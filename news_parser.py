#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Автоматизированный парсер новостей с кешированием
"""

import requests
from bs4 import BeautifulSoup
import json
import os
from datetime import datetime
import re
import hashlib

class NewsParser:
    def __init__(self, cache_file='news_data.json'):
        self.cache_file = cache_file
        self.url = "https://mou48.ucoz.ru/"
        self.headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
    
    def get_cached_news(self):
        """Получает кешированные новости"""
        if os.path.exists(self.cache_file):
            try:
                with open(self.cache_file, 'r', encoding='utf-8') as f:
                    return json.load(f)
            except:
                return []
        return []
    
    def save_news(self, news_list):
        """Сохраняет новости в кеш"""
        with open(self.cache_file, 'w', encoding='utf-8') as f:
            json.dump(news_list, f, ensure_ascii=False, indent=2)
    
    def parse_news(self):
        """Парсит новости с сайта"""
        try:
            response = requests.get(self.url, headers=self.headers, timeout=10)
            response.encoding = 'utf-8'
            
            soup = BeautifulSoup(response.content, 'html.parser')
            news_list = []
            
            # Ищем все новости в контейнере
            entries = soup.find_all('div', {'id': re.compile(r'entryID\d+')})
            
            for entry in entries:
                try:
                    # Извлекаем заголовок
                    title_elem = entry.find('center')
                    if not title_elem:
                        continue
                    
                    title_font = title_elem.find('font')
                    title = title_font.get_text(strip=True) if title_font else title_elem.get_text(strip=True)
                    
                    if not title:
                        continue
                    
                    # Извлекаем описание
                    description = ""
                    paragraphs = entry.find_all('p')
                    for p in paragraphs[:2]:
                        text = p.get_text(strip=True)
                        if text and text != "Читать дальше >>":
                            description += text + " "
                    
                    # Извлекаем ссылку на полную новость
                    read_more = entry.find('a', {'class': 'entryReadAllLink'})
                    link = ""
                    if read_more:
                        link = read_more.get('href', '')
                        if link and not link.startswith('http'):
                            link = "https://mou48.ucoz.ru" + link
                    
                    # Извлекаем изображение
                    image_url = ""
                    img = entry.find('img')
                    if img:
                        img_src = img.get('src', '')
                        if img_src:
                            if not img_src.startswith('http'):
                                image_url = "https://mou48.ucoz.ru" + img_src
                            else:
                                image_url = img_src
                    
                    # Генерируем уникальный ID
                    news_id = hashlib.md5(title.encode()).hexdigest()[:8]
                    
                    if title and description:
                        news_item = {
                            'id': news_id,
                            'title': title,
                            'description': description.strip()[:200],
                            'full_description': description.strip(),
                            'link': link,
                            'image': image_url,
                            'date': datetime.now().strftime('%d.%m.%Y'),
                            'timestamp': datetime.now().isoformat()
                        }
                        news_list.append(news_item)
                
                except Exception as e:
                    print(f"Ошибка при парсинге новости: {e}")
                    continue
            
            return news_list
        
        except Exception as e:
            print(f"Ошибка при получении страницы: {e}")
            return None
    
    def update_news(self):
        """Обновляет новости если они изменились"""
        print(f"[{datetime.now().strftime('%Y-%m-%d %H:%M:%S')}] Начинаем парсинг новостей...")
        
        # Получаем новые новости
        new_news = self.parse_news()
        
        if new_news is None:
            print("Ошибка при парсинге. Используем кешированные данные.")
            return False
        
        # Получаем старые новости
        old_news = self.get_cached_news()
        
        # Сравниваем
        old_ids = {item['id'] for item in old_news}
        new_ids = {item['id'] for item in new_news}
        
        if old_ids != new_ids:
            print(f"Найдены новые новости! Старых: {len(old_news)}, Новых: {len(new_news)}")
            self.save_news(new_news)
            return True
        else:
            print(f"Новостей не изменилось. Всего: {len(new_news)}")
            return False
    
    def get_news_for_app(self, limit=10):
        """Получает новости для приложения"""
        news = self.get_cached_news()
        return news[:limit]

def main():
    parser = NewsParser()
    parser.update_news()

if __name__ == "__main__":
    main()
