/**
 * Сервер для автоматизированного обновления новостей
 * Запускает парсер каждый день в 08:00
 */

const express = require('express');
const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
const schedule = require('node-schedule');

const app = express();
const PORT = process.env.PORT || 3000;
const NEWS_FILE = path.join(__dirname, 'news_data.json');

// Middleware
app.use(express.json());
app.use(express.static(__dirname));

// Функция для запуска парсера
function runNewsParser() {
    return new Promise((resolve, reject) => {
        console.log(`[${new Date().toLocaleString('ru-RU')}] Запускаем парсер новостей...`);
        
        const python = spawn('python', ['news_parser.py'], {
            cwd: __dirname,
            stdio: 'pipe'
        });
        
        let output = '';
        let error = '';
        
        python.stdout.on('data', (data) => {
            output += data.toString();
            console.log(`[PARSER] ${data.toString()}`);
        });
        
        python.stderr.on('data', (data) => {
            error += data.toString();
            console.error(`[PARSER ERROR] ${data.toString()}`);
        });
        
        python.on('close', (code) => {
            if (code === 0) {
                console.log(`[${new Date().toLocaleString('ru-RU')}] Парсер завершил работу успешно`);
                resolve({ success: true, output });
            } else {
                console.error(`[${new Date().toLocaleString('ru-RU')}] Парсер завершил работу с ошибкой: ${code}`);
                reject({ success: false, error });
            }
        });
    });
}

// API маршруты

// Получить все новости
app.get('/api/news', (req, res) => {
    try {
        if (fs.existsSync(NEWS_FILE)) {
            const news = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
            res.json({
                success: true,
                count: news.length,
                news: news
            });
        } else {
            res.json({
                success: false,
                message: 'Новости еще не загружены',
                news: []
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Ошибка при чтении новостей',
            error: error.message
        });
    }
});

// Получить новости с лимитом
app.get('/api/news/:limit', (req, res) => {
    try {
        const limit = parseInt(req.params.limit) || 10;
        if (fs.existsSync(NEWS_FILE)) {
            const news = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
            res.json({
                success: true,
                count: news.slice(0, limit).length,
                news: news.slice(0, limit)
            });
        } else {
            res.json({
                success: false,
                message: 'Новости еще не загружены',
                news: []
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Ошибка при чтении новостей',
            error: error.message
        });
    }
});

// Получить одну новость по ID
app.get('/api/news/item/:id', (req, res) => {
    try {
        const id = req.params.id;
        if (fs.existsSync(NEWS_FILE)) {
            const news = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
            const item = news.find(n => n.id === id);
            if (item) {
                res.json({
                    success: true,
                    news: item
                });
            } else {
                res.status(404).json({
                    success: false,
                    message: 'Новость не найдена'
                });
            }
        } else {
            res.status(404).json({
                success: false,
                message: 'Новости еще не загружены'
            });
        }
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Ошибка при чтении новостей',
            error: error.message
        });
    }
});

// Ручное обновление новостей
app.post('/api/update-news', async (req, res) => {
    try {
        const result = await runNewsParser();
        res.json({
            success: true,
            message: 'Новости обновлены',
            result: result
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Ошибка при обновлении новостей',
            error: error.message
        });
    }
});

// Получить статус сервера
app.get('/api/status', (req, res) => {
    const newsExists = fs.existsSync(NEWS_FILE);
    let newsCount = 0;
    let lastUpdate = null;
    
    if (newsExists) {
        try {
            const news = JSON.parse(fs.readFileSync(NEWS_FILE, 'utf-8'));
            newsCount = news.length;
            if (news.length > 0) {
                lastUpdate = news[0].timestamp;
            }
        } catch (e) {
            // Ignore
        }
    }
    
    res.json({
        success: true,
        server: 'running',
        newsFile: newsExists,
        newsCount: newsCount,
        lastUpdate: lastUpdate,
        serverTime: new Date().toISOString()
    });
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`\n╔════════════════════════════════════════╗`);
    console.log(`║  Сервер новостей запущен на порту ${PORT}  ║`);
    console.log(`╚════════════════════════════════════════╝\n`);
    
    // Запускаем парсер при старте
    runNewsParser().catch(err => {
        console.error('Ошибка при первом запуске парсера:', err);
    });
    
    // Планируем ежедневное обновле��ие в 08:00
    const dailyJob = schedule.scheduleJob('0 8 * * *', async () => {
        try {
            await runNewsParser();
        } catch (error) {
            console.error('Ошибка при ежедневном обновлении:', error);
        }
    });
    
    console.log('✓ Ежедневное обновление запланировано на 08:00');
    
    // Также обновляем каждые 6 часов для надежности
    const intervalJob = setInterval(async () => {
        try {
            await runNewsParser();
        } catch (error) {
            console.error('Ошибка при интервальном обновлении:', error);
        }
    }, 6 * 60 * 60 * 1000); // 6 часов
    
    console.log('✓ Интервальное обновление каждые 6 часов');
});

// Graceful shutdown
process.on('SIGINT', () => {
    console.log('\n\nОстановка сервера...');
    process.exit(0);
});
