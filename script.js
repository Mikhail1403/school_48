// Инициализация Telegram Web App
let tg = window.Telegram.WebApp;
tg.ready();
tg.expand();

// Данные приложения
const appData = {
    dashboard: {
        title: 'Главная',
        subtitle: 'Добро пожаловать в информационную систему школы',
        content: `
            <div class="dashboard-grid">
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon">🏛️</div>
                        <div class="card-title">О школе</div>
                    </div>
                    <div class="card-content">
                        <p><strong>МБОУ "СОШ №48" г.Чебоксары</strong> - это современное образовательное учреждение с богатой историей и традициями качественного образования.</p>
                        <p><strong>Год основания:</strong> 1986</p>
                        <p><strong>Адрес:</strong> ул. Мичмана Павлова, 50/1</p>
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon">⏰</div>
                        <div class="card-title">Режим работы</div>
                    </div>
                    <div class="card-content">
                        <p><strong>Рабочие дни:</strong> Понедельник - Пятница</p>
                        <p><strong>Время:</strong> 08:00 - 17:30</p>
                        <p><strong>Обучение:</strong> В две смены</p>
                        <p><strong>Рабочая неделя:</strong> Пятидневная</p>
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon">📞</div>
                        <div class="card-title">Контакты</div>
                    </div>
                    <div class="card-content">
                        <p><strong>Приемная:</strong> (8352) 65-52-56</p>
                        <p><strong>Email:</strong> cheb-school48@rchuv.ru</p>
                        <p><strong>Адрес:</strong> 428034, г. Чебоксары, ул. Мичмана Павлова, 50/1</p>
                    </div>
                </div>
                
                <div class="dashboard-card">
                    <div class="card-header">
                        <div class="card-icon">🎓</div>
                        <div class="card-title">Образование</div>
                    </div>
                    <div class="card-content">
                        <p>Реализуем программы начального общего, основного общего и среднего общего образования в соответствии с ФГОС.</p>
                        <p><strong>Форма обучения:</strong> Очная</p>
                        <p><strong>Язык обучения:</strong> Русский</p>
                    </div>
                </div>
            </div>
        `
    },

    about: {
        title: 'О школе',
        subtitle: 'Полная информация об образовательном учреждении',
        content: `
            <div class="info-grid">
                <div class="info-card">
                    <h3>📋 Полное наименование</h3>
                    <p>Муниципальное бюджетное общеобразовательное учреждение "Средняя общеобразовательная школа №48" города Чебоксары Чувашской Республики</p>
                </div>
                
                <div class="info-card">
                    <h3>🏷️ Сокращенное наименование</h3>
                    <p>МБОУ "СОШ №48" г.Чебоксары</p>
                </div>
                
                <div class="info-card">
                    <h3>📅 Дата создания</h3>
                    <p>МБОУ «СОШ №48» г.Чебоксары была открыта в 1986 году</p>
                </div>
                
                <div class="info-card">
                    <h3>🏢 Учредители</h3>
                    <div class="contact-grid">
                        <div class="contact-card">
                            <div class="contact-header">Администрация города Чебоксары</div>
                            <div class="contact-info">
                                <p><strong>Адрес:</strong> 428000, г. Чебоксары, ул. К.Маркса, 36</p>
                                <p><strong>Телефон:</strong> (8352) 62-85-37</p>
                                <p><strong>Email:</strong> gcheb@cap.ru</p>
                                <p><strong>Сайт:</strong> https://gcheb.cap.ru/</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Комитет по управлению имуществом</div>
                            <div class="contact-info">
                                <p><strong>Адрес:</strong> 428015, г.Чебоксары, пр. Московский, д.33а</p>
                                <p><strong>Телефон:</strong> (8352) 23-41-00</p>
                                <p><strong>Email:</strong> cgki@cap.ru</p>
                                <p><strong>Сайт:</strong> https://gcheb-cgki.cap.ru/</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Управление образования</div>
                            <div class="contact-info">
                                <p><strong>Адрес:</strong> 428000, г. Чебоксары, Московский проспект, д. 8</p>
                                <p><strong>Телефон:</strong> (8352) 23-42-22</p>
                                <p><strong>Email:</strong> gcheb_gorobraz@rchuv.ru</p>
                                <p><strong>Сайт:</strong> https://gcheb-obraz.cap.ru/</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="info-card">
                    <h3>🎓 Места проведения ГИА</h3>
                    <p>г. Чебоксары: ул. Афанасьева, д.11; ул. 139 Стр.дивизии, д.12; ул. Космонавта Николаева, д.1; ул. Гайдара, д.3; пр-т Ленина, д. 55А; ул. Мичмана Павлова, д.9; ул. Ахазова, д.9А; ул. 139 Стр.дивизии, д.14; пр-т Тракторостроителей, д.38; ул. Лебедева, д.13; б-р Миттова, д. 47; б-р Миттова, д.23</p>
                </div>
            </div>
        `
    },

    administration: {
        title: 'Администрация',
        subtitle: 'Структура и органы управления школой',
        content: `
            <div class="info-grid">
                <div class="info-card">
                    <h3>🏛️ Органы управления</h3>
                    <div class="contact-grid">
                        <div class="contact-card">
                            <div class="contact-header">Общее собрание работников</div>
                            <div class="contact-info">
                                <p>Действует согласно Уставу МБОУ "СОШ № 48" г. Чебоксары</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Педагогический совет</div>
                            <div class="contact-info">
                                <p>Положение о педагогическом совете МБОУ "СОШ № 48" г. Чебоксары</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Управляющий совет</div>
                            <div class="contact-info">
                                <p>Действует согласно Уставу МБОУ "СОШ № 48" г. Чебоксары</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="info-card">
                    <h3>👥 Руководство школы</h3>
                    <div class="contact-grid">
                        <div class="contact-card">
                            <div class="contact-header">Директор</div>
                            <div class="contact-info">
                                <p>Общее руководство образовательным учреждением</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместители директора</div>
                            <div class="contact-info">
                                <p>• по воспитательной работе</p>
                                <p>• по учебно-воспитательной работе (начальное образование)</p>
                                <p>• по учебно-воспитательной работе (основное образование)</p>
                                <p>• по учебно-воспитательной работе (среднее образование)</p>
                                <p>• по административно-хозяйственной части</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    },

    documents: {
        title: 'Документы',
        subtitle: 'Нормативно-правовые документы учреждения',
        content: `
            <div class="section-header">
                <h4 style="color: #1e293b; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 600;">Основные документы</h4>
            </div>
            <div class="document-grid">
                <div class="document-item">
                    <span class="document-title">Устав МБОУ "СОШ №48" г.Чебоксары</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/banner/dokumenti/ustav_mbou_sosh_48.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Правила внутреннего распорядка обучающихся</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/banner/dokumenti/pravila_vnutrennego_rasporjadka_obuchajushhikhsja_.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Правила внутреннего трудового распорядка</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/vaJD/B4bVAztnN')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Коллективный договор</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/SJr7/P4wNtAGu3')">СКАЧАТЬ</button>
                </div>
            </div>

            <div class="section-header" style="margin-top: 2rem;">
                <h4 style="color: #1e293b; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 600;">Образовательная деятельность</h4>
            </div>
            <div class="document-grid">
                <div class="document-item">
                    <span class="document-title">Правила приема на обучение</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/banner/dokumenti/pravila_priema_grazhdan_v_sosh_48.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о режиме работы обучающихся</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/03122017/2025-2026/Dokumenti/rezhim_raboty_mbou_sosh_48_na_2025-2026_uchebnyj_g.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о текущем контроле и аттестации</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/2adt/4JLX5R2zy')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Порядок перевода и отчисления обучающихся</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/0100AYchGog2014/12102021/porjadok_oformlenija_vozniknovenija-priostanovleni.pdf')">PDF</button>
                </div>
            </div>

            <div class="section-header" style="margin-top: 2rem;">
                <h4 style="color: #1e293b; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 600;">Отчеты и процедуры</h4>
            </div>
            <div class="document-grid">
                <div class="document-item">
                    <span class="document-title">Отчет о самообследовании за 2024 год</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/WRNX/7EvqwBE1g')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">График оценочных процедур</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/banner/KachestvoObr/grafik_ocenochnykh_procedur.pdf')">PDF</button>
                </div>
            </div>

            <div class="section-header" style="margin-top: 2rem;">
                <h4 style="color: #1e293b; font-size: 1.25rem; margin-bottom: 1rem; font-weight: 600;">Положения и порядки</h4>
            </div>
            <div class="document-grid">
                <div class="document-item">
                    <span class="document-title">Положение об организации питания</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/Q7zL/skNE9zMq6')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о школьной форме</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/p1yy/DeQWAEuAg')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о языках образования</span>
                    <button class="document-btn" onclick="openDocument('https://cloud.mail.ru/public/TNGQ/wVjGK6aj5')">СКАЧАТЬ</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о поощрении обучающихся</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/0100AYchGog2014/12102021/polozhenie_o_pooshhrenii_obuchajushhikhsja.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Положение о Совете профилактики</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/0100AYchGog2014/28052021/polozhenie_o_sovete_profilaktiki_izm_25.03.21-1.pdf')">PDF</button>
                </div>
                <div class="document-item">
                    <span class="document-title">Федеральный закон об образовании в РФ</span>
                    <button class="document-btn" onclick="openDocument('https://mou48.ucoz.ru/index/federalnyj_zakon_ot_29_dekabrja_2012_g_273-fz_quot_ob_obrazovanii_v_rossijskoj_federacii_quot/0-286')">ОТКРЫТЬ</button>
                </div>
            </div>
        `
    },

    education: {
        title: 'Образование',
        subtitle: 'Образовательные программы и учебная деятельность',
        content: `
            <div class="info-grid">
                <div class="info-card">
                    <h3>🎓 Уровни образования</h3>
                    <p><strong>Начальное общее образование</strong> (1-4 классы)</p>
                    <p><strong>Основное общее образование</strong> (5-9 классы)</p>
                    <p><strong>Среднее общее образование</strong> (10-11 классы)</p>
                </div>
                
                <div class="info-card">
                    <h3>📚 Форма обучения</h3>
                    <p><strong>Основная форма:</strong> Очная</p>
                    <p><strong>Язык обучения:</strong> Русский язык</p>
                    <p><strong>Режим работы:</strong> Пятидневная учебная неделя в две смены</p>
                </div>
                
                <div class="info-card">
                    <h3>📋 Образовательные стандарты</h3>
                    <p>Образование осуществляется в соответствии с Федеральными государственными образовательными стандартами (ФГОС)</p>
                    <p><strong>ФГОС НОО</strong> - для начального общего образования</p>
                    <p><strong>ФГОС ООО</strong> - для основного общего образования</p>
                    <p><strong>ФГОС СОО</strong> - для среднего общего образования</p>
                </div>
                
                <div class="info-card">
                    <h3>🏆 Государственная итоговая аттестация</h3>
                    <p>Проводится в соответствии с федеральными требованиями</p>
                    <p><strong>ОГЭ</strong> - для выпускников 9 классов</p>
                    <p><strong>ЕГЭ</strong> - для выпускников 11 классов</p>
                    <p>Места проведения ГИА расположены в различных образовательных учреждениях города Чебоксары</p>
                </div>
            </div>
        `
    },

    contacts: {
        title: 'Контакты',
        subtitle: 'Контактная информация и местоположение',
        content: `
            <div class="info-grid">
                <div class="info-card">
                    <h3>📍 Адрес школы</h3>
                    <p><strong>Почтовый адрес:</strong></p>
                    <p>428034, г. Чебоксары, Чувашская Республика</p>
                    <p>ул. Мичмана Павлова, 50/1</p>
                </div>
                
                <div class="info-card">
                    <h3>📞 Телефоны администрации</h3>
                    <div class="contact-grid">
                        <div class="contact-card">
                            <div class="contact-header">Приемная</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 65-52-56</p>
                                <p><strong>Секретарь:</strong> Сандыркина Мария Олеговна</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместитель по ВР</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 41-83-65</p>
                                <p><strong>ФИО:</strong> Козлова Марина Ивановна</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместитель по УВР (НОО)</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 65-52-58</p>
                                <p><strong>ФИО:</strong> Кожевникова Ирина Владимировна</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместитель по УВР (ООО)</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 65-52-58</p>
                                <p><strong>ФИО:</strong> Гаврилова Тамара Николаевна</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместитель по УВР (СОО)</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 65-52-59</p>
                                <p><strong>ФИО:</strong> Николаева Елена Викторовна</p>
                            </div>
                        </div>
                        
                        <div class="contact-card">
                            <div class="contact-header">Заместитель по АХЧ</div>
                            <div class="contact-info">
                                <p><strong>Телефон:</strong> (8352) 65-52-57</p>
                                <p><strong>ФИО:</strong> Иванова Августина Алексеевна</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="info-card">
                    <h3>📧 Электронная почта</h3>
                    <p><strong>Официальный email:</strong> cheb-school48@rchuv.ru</p>
                </div>
                
                <div class="info-card">
                    <h3>⏰ График работы</h3>
                    <p><strong>Рабочие дни:</strong> Понедельник - Пятница</p>
                    <p><strong>Время работы:</strong> с 08:00 до 17:30</p>
                    <p><strong>Выходные дни:</strong> Суббота, Воскресенье</p>
                    <p><strong>Режим обучения:</strong> Пятидневная рабочая неделя в две смены</p>
                </div>
            </div>
            
            <button class="action-btn" onclick="openMap()">🗺️ Показать на карте</button>
        `
    }
};

// Управление навигацией
function showSection(sectionName) {
    // Убрать активные классы у всех элементов навигации
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Добавить активный класс к выбранному элементу
    document.querySelector(`[data-section="${sectionName}"]`).classList.add('active');
    
    // Обновить заголовок страницы
    const pageTitle = document.getElementById('page-title');
    pageTitle.textContent = appData[sectionName].title;
    
    // Обновить содержимое
    const contentArea = document.getElementById('content-area');
    contentArea.innerHTML = `
        <div class="content-section active">
            <div class="section-header">
                <h1 class="section-title">${appData[sectionName].title}</h1>
                <p class="section-subtitle">${appData[sectionName].subtitle}</p>
            </div>
            ${appData[sectionName].content}
        </div>
    `;
    
    // Прокрутить наверх
    contentArea.scrollTop = 0;
    
    // Закрыть сайдбар на мобильных устройствах
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
}

// Функции для работы с документами и картой
function openDocument(url) {
    if (tg.platform !== 'unknown') {
        tg.openLink(url);
    } else {
        window.open(url, '_blank');
    }
}

function openMap() {
    const address = "428034, г. Чебоксары, ул. Мичмана Павлова, 50/1";
    const encodedAddress = encodeURIComponent(address);
    
    if (tg.platform !== 'unknown') {
        tg.openLink(`https://maps.yandex.ru/?text=${encodedAddress}`);
    } else {
        window.open(`https://maps.yandex.ru/?text=${encodedAddress}`, '_blank');
    }
}

// Управление мобильным меню
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('open');
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Обработчики навигации
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            showSection(sectionName);
        });
    });
    
    // Обработчик мобильного меню
    document.getElementById('menu-toggle').addEventListener('click', toggleSidebar);
    
    // Обработчик закрытия сайдбара
    document.getElementById('sidebar-toggle').addEventListener('click', toggleSidebar);
    
    // Показать главную страницу по умолчанию
    showSection('dashboard');
    
    // Настройка темы Telegram
    if (tg.colorScheme === 'dark') {
        document.body.style.background = 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)';
        // Можно добавить дополнительные настройки для темной темы
    }
});

// Обработка кнопки "Назад" в Telegram
tg.onEvent('backButtonClicked', function() {
    tg.close();
});

// Настройка главной кнопки Telegram
tg.MainButton.setText('Обновить данные');
tg.MainButton.onClick(function() {
    location.reload();
});
tg.MainButton.show();
