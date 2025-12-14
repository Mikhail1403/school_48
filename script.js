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
            <div class="quick-actions">
                <a href="#" class="quick-action" data-section="about">
                    <span class="quick-action-icon">🏛️</span>
                    <span class="quick-action-label">О школе</span>
                </a>
                <a href="#" class="quick-action" data-section="documents">
                    <span class="quick-action-icon">📋</span>
                    <span class="quick-action-label">Документы</span>
                </a>
                <a href="#" class="quick-action" data-section="education">
                    <span class="quick-action-icon">🎓</span>
                    <span class="quick-action-label">Образование</span>
                </a>
                <a href="#" class="quick-action" data-section="contacts">
                    <span class="quick-action-icon">📞</span>
                    <span class="quick-action-label">Контакты</span>
                </a>
                <a href="#" class="quick-action" data-section="news">
                    <span class="quick-action-icon">📰</span>
                    <span class="quick-action-label">Новости</span>
                </a>
            </div>
            
            <div class="important-dates">
                <h3>📅 Важные даты</h3>
                <div class="date-item upcoming">
                    <span class="date-icon">🎓</span>
                    <div class="date-info">
                        <div class="date-title">День знаний</div>
                        <div class="date-description">1 сентября - начало учебного года</div>
                    </div>
                    <span class="date-badge">Скоро</span>
                </div>
                <div class="date-item">
                    <span class="date-icon">🏆</span>
                    <div class="date-info">
                        <div class="date-title">День рождения школы</div>
                        <div class="date-description">Основана в 1986 году</div>
                    </div>
                    <span class="date-badge">1986</span>
                </div>
                <div class="date-item">
                    <span class="date-icon">🎉</span>
                    <div class="date-info">
                        <div class="date-title">Выпускной</div>
                        <div class="date-description">Конец учебного года</div>
                    </div>
                    <span class="date-badge">Май</span>
                </div>
            </div>
            
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

    news: {
        title: 'Новости',
        subtitle: 'Последние новости школы',
        content: `
            <div id="news-loading" style="text-align: center; padding: 2rem;">
                <div class="loader-spinner"></div>
                <p>Загрузка новостей...</p>
            </div>
            <div id="news-container" style="display: none;"></div>
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
    const activeNavItem = document.querySelector(`[data-section="${sectionName}"]`);
    if (activeNavItem) {
        activeNavItem.classList.add('active');
    }
    
    // Обновить заголовок страницы
    const pageTitle = document.getElementById('page-title');
    if (pageTitle && appData[sectionName]) {
        pageTitle.textContent = appData[sectionName].title;
    }
    
    // Обновить содержимое с анимацией
    const contentArea = document.getElementById('content-area');
    if (contentArea && appData[sectionName]) {
        // Анимация исчезновения
        contentArea.style.opacity = '0';
        contentArea.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            contentArea.innerHTML = `
                <div class="content-section active fade-in-up">
                    <div class="section-header">
                        <h1 class="section-title">${appData[sectionName].title}</h1>
                        <p class="section-subtitle">${appData[sectionName].subtitle}</p>
                    </div>
                    ${appData[sectionName].content}
                </div>
            `;
            
            // Показать/скрыть поиск и фильтры
            const searchContainer = document.getElementById('search-container');
            const filterContainer = document.getElementById('filter-container');
            
            if (sectionName === 'documents') {
                if (searchContainer) searchContainer.style.display = 'block';
                if (filterContainer) filterContainer.style.display = 'flex';
                initFilters();
            } else {
                if (searchContainer) searchContainer.style.display = 'none';
                if (filterContainer) filterContainer.style.display = 'none';
            }
            
            // Инициализировать поиск
            initSearch();
            
            // Добавить ripple эффекты к кнопкам
            contentArea.querySelectorAll('.action-btn, .document-btn').forEach(btn => {
                addRippleEffect(btn);
                
                // Добавить эффект волны при клике
                btn.addEventListener('click', (e) => {
                    createWaveEffect(e.clientX, e.clientY, btn);
                    createParticles(e.clientX, e.clientY, '#3b82f6', 8);
                });
            });
            
            // Инициализировать quick actions если это главная
            if (sectionName === 'dashboard') {
                setTimeout(() => {
                    initQuickActions();
                }, 300);
            }
            
            // Анимация появления карточек
            setTimeout(() => {
                contentArea.querySelectorAll('.dashboard-card, .info-card, .document-item').forEach((card, index) => {
                    card.style.opacity = '0';
                    card.style.transform = 'translateY(20px)';
                    setTimeout(() => {
                        card.style.transition = 'all 0.5s ease';
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 50);
                });
            }, 100);
            
            // Восстановить opacity
            contentArea.style.opacity = '1';
            contentArea.style.transform = 'translateY(0)';
        }, 200);
    }
    
    // Прокрутить наверх
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    // Закрыть сайдбар на мобильных устройствах
    if (window.innerWidth <= 768) {
        document.getElementById('sidebar').classList.remove('open');
    }
    
    // Обновить breadcrumbs
    updateBreadcrumbs(sectionName);
    
    // Обновить индикатор раздела
    updateSectionIndicator(sectionName);
    
    // Haptic feedback
    if (tg && tg.HapticFeedback) {
        tg.HapticFeedback.impactOccurred('light');
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

// Продвинутый loader с прогрессом
function simulateLoaderProgress() {
    const progressBar = document.getElementById('loader-progress');
    const percentage = document.getElementById('loader-percentage');
    let progress = 0;
    
    const interval = setInterval(() => {
        progress += Math.random() * 15;
        if (progress > 100) progress = 100;
        
        if (progressBar) progressBar.style.width = progress + '%';
        if (percentage) percentage.textContent = Math.floor(progress) + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            setTimeout(hideLoader, 500);
        }
    }, 100);
}

// Функция скрытия загрузчика
function hideLoader() {
    const loader = document.getElementById('loading');
    if (loader) {
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loader.remove();
            // Анимация появления контента
            document.getElementById('app').classList.add('fade-in');
        }, 500);
    }
}

// Toast уведомления
function showToast(message, type = 'info', duration = 3000) {
    const container = document.getElementById('toast-container');
    if (!container) return;
    
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: '✅',
        error: '❌',
        warning: '⚠️',
        info: 'ℹ️'
    };
    
    toast.innerHTML = `
        <span class="toast-icon">${icons[type] || icons.info}</span>
        <div class="toast-content">
            <div class="toast-message">${message}</div>
        </div>
    `;
    
    container.appendChild(toast);
    
    // Haptic feedback для важных уведомлений
    if (type === 'success' || type === 'error') {
        if (tg && tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('medium');
        }
    }
    
    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateX(100%)';
        setTimeout(() => toast.remove(), 300);
    }, duration);
}

// Ripple эффект для кнопок
function addRippleEffect(element) {
    element.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
}

// Анимированные счетчики
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;
    
    element.classList.add('animating');
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target + (element.dataset.suffix || '');
            element.classList.remove('animating');
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current) + (element.dataset.suffix || '');
        }
    }, 16);
}

// Scroll to top
function initScrollToTop() {
    const button = document.getElementById('scroll-to-top');
    if (!button) return;
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            button.classList.add('visible');
        } else {
            button.classList.remove('visible');
        }
    });
    
    button.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
        
        // Haptic feedback
        if (tg && tg.HapticFeedback) {
            tg.HapticFeedback.impactOccurred('light');
        }
    });
}

// Progress indicator
function updateProgressIndicator(percentage) {
    const progressBar = document.getElementById('progress-bar');
    if (progressBar) {
        progressBar.style.width = percentage + '%';
    }
}

// Breadcrumbs
function updateBreadcrumbs(sectionName) {
    const breadcrumbs = document.getElementById('breadcrumbs');
    if (!breadcrumbs) return;
    
    const sectionNames = {
        dashboard: 'Главная',
        about: 'О школе',
        administration: 'Администрация',
        documents: 'Документы',
        education: 'Образование',
        contacts: 'Контакты'
    };
    
    if (sectionName === 'dashboard') {
        breadcrumbs.style.display = 'none';
        return;
    }
    
    breadcrumbs.style.display = 'flex';
    breadcrumbs.innerHTML = `
        <div class="breadcrumb-item">
            <a href="#" data-section="dashboard">Главная</a>
        </div>
        <span class="breadcrumb-separator">/</span>
        <div class="breadcrumb-item active">
            <span>${sectionNames[sectionName] || sectionName}</span>
        </div>
    `;
    
    // Добавить обработчик для breadcrumb ссылок
    breadcrumbs.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetSection = link.getAttribute('data-section');
            if (targetSection) {
                showSection(targetSection);
            }
        });
    });
}

// Поиск и фильтрация
function initSearch() {
    const searchInput = document.getElementById('search-input');
    const searchClear = document.getElementById('search-clear');
    const searchContainer = document.getElementById('search-container');
    
    if (!searchInput) return;
    
    // Показать поиск для документов
    const currentSection = document.querySelector('.nav-item.active')?.getAttribute('data-section');
    if (currentSection === 'documents') {
        searchContainer.style.display = 'block';
    }
    
    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase().trim();
        
        if (query) {
            searchClear.style.opacity = '1';
            performSearch(query);
        } else {
            searchClear.style.opacity = '0';
            clearSearch();
        }
    });
    
    if (searchClear) {
        searchClear.addEventListener('click', () => {
            searchInput.value = '';
            searchClear.style.opacity = '0';
            clearSearch();
        });
    }
}

function performSearch(query) {
    const contentArea = document.getElementById('content-area');
    const items = contentArea.querySelectorAll('.document-item, .info-card, .dashboard-card, .contact-card');
    
    items.forEach(item => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = '';
            item.classList.add('fade-in');
        } else {
            item.style.opacity = '0.3';
            item.style.transform = 'scale(0.95)';
        }
    });
}

function clearSearch() {
    const contentArea = document.getElementById('content-area');
    const items = contentArea.querySelectorAll('.document-item, .info-card, .dashboard-card, .contact-card');
    
    items.forEach(item => {
        item.style.display = '';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    });
}

// Фильтры для документов
function initFilters() {
    const filterContainer = document.getElementById('filter-container');
    if (!filterContainer) return;
    
    const filters = [
        { id: 'all', label: 'Все', active: true },
        { id: 'basic', label: 'Основные' },
        { id: 'education', label: 'Образование' },
        { id: 'reports', label: 'Отчеты' },
        { id: 'regulations', label: 'Положения' }
    ];
    
    filterContainer.innerHTML = filters.map(filter => `
        <button class="filter-chip ${filter.active ? 'active' : ''}" data-filter="${filter.id}">
            ${filter.label}
        </button>
    `).join('');
    
    filterContainer.querySelectorAll('.filter-chip').forEach(chip => {
        chip.addEventListener('click', function() {
            filterContainer.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
            this.classList.add('active');
            filterDocuments(this.dataset.filter);
        });
    });
}

function filterDocuments(filterType) {
    const documents = document.querySelectorAll('.document-item');
    
    documents.forEach(doc => {
        if (filterType === 'all') {
            doc.style.display = '';
        } else {
            // Простая логика фильтрации (можно улучшить)
            const text = doc.textContent.toLowerCase();
            const shouldShow = 
                (filterType === 'basic' && (text.includes('устав') || text.includes('правила'))) ||
                (filterType === 'education' && text.includes('образование')) ||
                (filterType === 'reports' && text.includes('отчет')) ||
                (filterType === 'regulations' && text.includes('положение'));
            
            doc.style.display = shouldShow ? '' : 'none';
        }
    });
}

// Confetti эффект
function createConfetti() {
    const colors = ['#3b82f6', '#1d4ed8', '#8b5cf6', '#ec4899', '#10b981'];
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.style.position = 'fixed';
        confetti.style.width = Math.random() * 10 + 5 + 'px';
        confetti.style.height = Math.random() * 10 + 5 + 'px';
        confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.top = '-10px';
        confetti.style.opacity = Math.random();
        confetti.style.zIndex = '10000';
        confetti.style.pointerEvents = 'none';
        confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
        confetti.style.animation = `confettiFall ${Math.random() * 3 + 2}s linear forwards`;
        
        document.body.appendChild(confetti);
        
        setTimeout(() => confetti.remove(), 5000);
    }
}

// Индикатор раздела в хедере
function updateSectionIndicator(sectionName) {
    const indicator = document.getElementById('section-indicator');
    if (!indicator) return;
    
    const navItem = document.querySelector(`[data-section="${sectionName}"]`);
    if (!navItem) return;
    
    const sidebar = document.getElementById('sidebar');
    const navRect = navItem.getBoundingClientRect();
    const sidebarRect = sidebar.getBoundingClientRect();
    
    indicator.style.width = navItem.offsetWidth + 'px';
    indicator.style.left = (navRect.left - sidebarRect.left) + 'px';
}

// Эффект волны при клике
function createWaveEffect(x, y, element) {
    const wave = document.createElement('div');
    wave.className = 'wave-effect';
    const rect = element.getBoundingClientRect();
    wave.style.left = (x - rect.left) + 'px';
    wave.style.top = (y - rect.top) + 'px';
    wave.style.width = '20px';
    wave.style.height = '20px';
    element.style.position = 'relative';
    element.appendChild(wave);
    setTimeout(() => wave.remove(), 600);
}

// Эффект частиц при клике
function createParticles(x, y, color = '#3b82f6', count = 12) {
    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.background = color;
        particle.style.left = x + 'px';
        particle.style.top = y + 'px';
        
        const angle = (Math.PI * 2 * i) / count;
        const velocity = 50 + Math.random() * 50;
        const tx = Math.cos(angle) * velocity;
        const ty = Math.sin(angle) * velocity;
        
        particle.style.setProperty('--tx', tx + 'px');
        particle.style.setProperty('--ty', ty + 'px');
        
        document.body.appendChild(particle);
        setTimeout(() => particle.remove(), 1000);
    }
}

// Праздничный эффект - снег
function createSnowEffect(count = 30) {
    const snowflakes = ['❄', '❅', '❆', '✻', '✼'];
    
    for (let i = 0; i < count; i++) {
        const snowflake = document.createElement('div');
        snowflake.className = 'snowflake';
        snowflake.textContent = snowflakes[Math.floor(Math.random() * snowflakes.length)];
        snowflake.style.left = Math.random() * 100 + '%';
        snowflake.style.fontSize = (Math.random() * 10 + 10) + 'px';
        snowflake.style.animationDuration = (Math.random() * 3 + 2) + 's';
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.opacity = Math.random() * 0.5 + 0.5;
        
        document.body.appendChild(snowflake);
        
        setTimeout(() => {
            snowflake.style.opacity = '0';
            setTimeout(() => snowflake.remove(), 1000);
        }, 5000);
    }
}

// Проверка праздничных дат
function checkHolidays() {
    const now = new Date();
    const month = now.getMonth() + 1;
    const day = now.getDate();
    
    // Новый год (1 января)
    if (month === 1 && day === 1) {
        createSnowEffect(50);
        showToast('С Новым годом! 🎉', 'success', 5000);
    }
    
    // День рождения школы (можно настроить)
    // if (month === 9 && day === 1) {
    //     createConfetti();
    //     showToast('С Днём рождения, школа! 🎂', 'success', 5000);
    // }
}

// Магнитный эффект для элементов
function initMagneticEffect() {
    const magneticElements = document.querySelectorAll('.dashboard-card, .quick-action, .logo-icon');
    
    magneticElements.forEach(element => {
        element.classList.add('magnetic');
        
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;
            
            const moveX = x * 0.1;
            const moveY = y * 0.1;
            
            element.style.transform = `translate(${moveX}px, ${moveY}px)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'translate(0, 0)';
        });
    });
}

// Quick actions обработчики
function initQuickActions() {
    document.querySelectorAll('.quick-action').forEach(action => {
        action.addEventListener('click', (e) => {
            e.preventDefault();
            const section = action.getAttribute('data-section');
            if (section) {
                // Эффект волны
                createWaveEffect(e.clientX, e.clientY, action);
                // Частицы
                createParticles(e.clientX, e.clientY, '#3b82f6', 8);
                
                showSection(section);
                // Confetti для важных действий
                createConfetti();
            }
        });
        
        // Ripple эффект
        addRippleEffect(action);
    });
}

// Интерактивный логотип
function initInteractiveLogo() {
    const logoIcon = document.querySelector('.logo-icon');
    if (!logoIcon) return;
    
    let clickCount = 0;
    let lastClickTime = 0;
    
    logoIcon.style.cursor = 'pointer';
    logoIcon.addEventListener('click', (e) => {
        const currentTime = Date.now();
        
        if (currentTime - lastClickTime < 500) {
            clickCount++;
        } else {
            clickCount = 1;
        }
        lastClickTime = currentTime;
        
        // Эффект частиц
        const rect = logoIcon.getBoundingClientRect();
        const x = rect.left + rect.width / 2;
        const y = rect.top + rect.height / 2;
        createParticles(x, y, '#3b82f6', 20);
        
        // Анимация
        logoIcon.style.animation = 'none';
        setTimeout(() => {
            logoIcon.style.animation = 'bounce 0.6s ease';
        }, 10);
        
        // Секретная функция при 5 кликах
        if (clickCount >= 5) {
            clickCount = 0;
            createConfetti();
            showToast('🎉 Секретная функция активирована!', 'success', 3000);
            
            // Haptic feedback
            if (tg && tg.HapticFeedback) {
                tg.HapticFeedback.impactOccurred('heavy');
            }
        }
    });
}

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
    // Запустить продвинутый loader
    simulateLoaderProgress();
    
    // Обработчики навигации
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const sectionName = this.getAttribute('data-section');
            showSection(sectionName);
        });
    });
    
    // Обработчик мобильного меню
    const menuToggle = document.getElementById('menu-toggle');
    if (menuToggle) {
        menuToggle.addEventListener('click', toggleSidebar);
    }
    
    // Обработчик закрытия сайдбара
    const sidebarToggle = document.getElementById('sidebar-toggle');
    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', toggleSidebar);
    }
    
    // Инициализировать scroll to top
    initScrollToTop();
    
    // Настройка темы Telegram с принудительным контрастом
    if (tg.colorScheme === 'dark') {
        // Темная тема - принудительно устанавливаем контрастные цвета
        document.documentElement.style.setProperty('--tg-theme-bg-color', '#1a1a1a');
        document.documentElement.style.setProperty('--tg-theme-text-color', '#ffffff');
        document.documentElement.style.setProperty('--tg-theme-hint-color', '#cccccc');
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', '#2a2a2a');
        document.body.style.background = '#1a1a1a';
        document.body.style.color = '#ffffff';
    } else {
        // Светлая тема
        document.documentElement.style.setProperty('--tg-theme-bg-color', tg.themeParams.bg_color || '#ffffff');
        document.documentElement.style.setProperty('--tg-theme-text-color', tg.themeParams.text_color || '#000000');
        document.documentElement.style.setProperty('--tg-theme-hint-color', tg.themeParams.hint_color || '#666666');
        document.documentElement.style.setProperty('--tg-theme-secondary-bg-color', tg.themeParams.secondary_bg_color || '#f8f8f8');
        document.body.style.background = tg.themeParams.bg_color || '#ffffff';
        document.body.style.color = tg.themeParams.text_color || '#000000';
    }
    
    // Показать главную страницу по умолчанию после загрузки
    setTimeout(() => {
        showSection('dashboard');
        
        // Анимировать счетчики
        setTimeout(() => {
            document.querySelectorAll('.counter').forEach(counter => {
                const target = parseInt(counter.dataset.target) || 0;
                animateCounter(counter, target);
            });
        }, 500);
    }, 1500);
    
    // Smooth scroll для всех ссылок (без ошибок на "#")
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = (this.getAttribute('href') || '').trim();
            // Игнорируем пустые/псевдо-ссылки
            if (!href || href === '#' || href.length <= 1) return;
            e.preventDefault();
            let target = null;
            try {
                target = document.querySelector(href);
            } catch (_) {
                // Невалидный селектор — просто выходим
                return;
            }
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Обновление прогресс-индикатора при прокрутке
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
        updateProgressIndicator(scrollPercent);
    });
    
    // Инициализировать поиск
    initSearch();
    
    // Инициализировать магнитный эффект
    setTimeout(() => {
        initMagneticEffect();
    }, 1500);
    
    // Инициализировать интерактивный логотип
    setTimeout(() => {
        initInteractiveLogo();
    }, 1500);
    
    // Проверить праздничные даты
    checkHolidays();
    
    // Показать приветственное сообщение
    setTimeout(() => {
        showToast('Добро пожаловать в информационную систему школы!', 'success', 4000);
    }, 2000);
    
    // Добавить эффект волны к важным кнопкам
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('action-btn') || 
            e.target.classList.contains('document-btn') ||
            e.target.closest('.action-btn') ||
            e.target.closest('.document-btn')) {
            const button = e.target.closest('.action-btn, .document-btn') || e.target;
            if (button) {
                createWaveEffect(e.clientX, e.clientY, button);
                createParticles(e.clientX, e.clientY, '#3b82f6', 6);
            }
        }
    });
});

// Обработка кнопки "Назад" в Telegram
tg.onEvent('backButtonClicked', function() {
    tg.close();
});

// Скрыть главную кнопку (не нужна для этого приложения)
tg.MainButton.hide();

//

// Функции загрузки и отображения новостей
// Форматирование даты из разных форматов в локальный вид
function formatNewsDate(input) {
    if (!input) return '';
    if (input instanceof Date && !isNaN(input)) {
        return input.toLocaleDateString('ru-RU');
    }
    // Попытка распарсить как ISO или Date-совместимую строку
    const iso = new Date(input);
    if (!isNaN(iso)) return iso.toLocaleDateString('ru-RU');

    // Попытаться распарсить dd.mm.yyyy | dd/mm/yyyy | dd-mm-yyyy
    const s = String(input).trim();
    const parts = s.split(/[./-]/);
    if (parts.length === 3) {
        let [d, mo, y] = parts;
        if (y.length === 2) y = '20' + y;
        const jsDate = new Date(Number(y), Number(mo) - 1, Number(d));
        if (!isNaN(jsDate)) return jsDate.toLocaleDateString('ru-RU');
    }
    return '';
}

async function loadNews() {
    try {
        const loading = document.getElementById('news-loading');
        const container = document.getElementById('news-container');
        if (!loading || !container) return;

        loading.style.display = 'block';
        container.style.display = 'none';
        container.innerHTML = '';

        const res = await fetch('news_data.json', { cache: 'no-store' });
        if (!res.ok) throw new Error('HTTP ' + res.status);
        const data = await res.json();

        // Сортировка по дате (новые сверху)
        const items = Array.isArray(data) ? data : (data.items || []);
        items.sort((a, b) => new Date(b.date || 0) - new Date(a.date || 0));

        if (!items.length) {
            container.innerHTML = '<div class="empty-state">Новостей пока нет</div>';
        } else {
            const fragment = document.createDocumentFragment();
            items.forEach((n, idx) => {
                const card = document.createElement('div');
                card.className = 'news-card';
                card.style.opacity = '0';
                card.style.transform = 'translateY(10px)';

                const dateStr = formatNewsDate(n.date);
                const imageBlock = n.image ? `<div class="news-image"><img src="${n.image}" alt="news" loading="lazy"/></div>` : '';
                const linkBlock = n.link ? `<a class="news-link action-btn" href="#" data-url="${n.link}">Читать</a>` : '';

                card.innerHTML = `
                    <div class="news-header">
                        <div class="news-title">${n.title || 'Без названия'}</div>
                        <div class="news-date">${dateStr}</div>
                    </div>
                    ${imageBlock}
                    <div class="news-content">${n.content || ''}</div>
                    <div class="news-footer">${linkBlock}</div>
                `;
                fragment.appendChild(card);

                setTimeout(() => {
                    card.style.transition = 'all .35s ease';
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, idx * 60);
            });
            container.appendChild(fragment);

            // Обработчик для ссылок новостей с открытием в Telegram/браузере
            container.querySelectorAll('.news-link').forEach(a => {
                addRippleEffect(a);
                a.addEventListener('click', (e) => {
                    e.preventDefault();
                    const url = a.getAttribute('data-url');
                    if (url) {
                        if (tg && tg.platform !== 'unknown') tg.openLink(url); else window.open(url, '_blank');
                    }
                });
            });
        }
    } catch (err) {
        const container = document.getElementById('news-container');
        if (container) container.innerHTML = `<div class=\"error-state\">Ошибка загрузки новостей: ${err.message}</div>`;
        console.error('News load error:', err);
    } finally {
        const loading = document.getElementById('news-loading');
        const container = document.getElementById('news-container');
        if (loading) loading.style.display = 'none';
        if (container) container.style.display = 'block';
    }
}

// Автозагрузка новостей при переходе в раздел "Новости"
(function patchShowSectionForNews() {
    const originalShowSection = window.showSection;
    window.showSection = function(sectionName) {
        originalShowSection(sectionName);
        if (sectionName === 'news') {
            // Ждем появления DOM-элементов раздела новостей и затем загружаем
            const waitAndLoadNews = (attempts = 15) => {
                const loading = document.getElementById('news-loading');
                const container = document.getElementById('news-container');
                if (loading && container) {
                    loadNews();
                } else if (attempts > 0) {
                    setTimeout(() => waitAndLoadNews(attempts - 1), 100);
                }
            };
            waitAndLoadNews();
        }
    };
})();

// Минимальные стили для карточек новостей (если нет в CSS)
(function injectNewsStyles() {
    const id = 'news-inline-styles';
    if (document.getElementById(id)) return;
    const style = document.createElement('style');
    style.id = id;
    style.textContent = `
    .news-card{background:var(--tg-theme-bg-color,#fff);border:1px solid rgba(0,0,0,.08);border-radius:14px;padding:14px;margin:10px 0;box-shadow:0 2px 8px rgba(0,0,0,.06)}
    .news-header{display:flex;justify-content:space-between;gap:10px;align-items:center;margin-bottom:8px}
    .news-title{font-weight:600;color:#1e293b}
    .news-date{font-size:.85rem;color:#64748b}
    .news-image{margin:8px 0;border-radius:10px;overflow:hidden}
    .news-image img{width:100%;display:block}
    .news-content{color:#334155;line-height:1.5}
    .news-footer{margin-top:10px;display:flex;justify-content:flex-end}
    .news-link{padding:.5rem .9rem;border-radius:10px;background:#3b82f6;color:#fff;text-decoration:none;}
    .empty-state,.error-state{text-align:center;color:#64748b;padding:1rem}
    `;
    document.head.appendChild(style);
})();

//
