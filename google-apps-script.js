// ═════════════════════════════════════════════════════════════
// Google Apps Script для Google Sheets
// Вставь этот код в Apps Script своей таблицы
// ═════════════════════════════════════════════════════════════

function doPost(e) {
  try {
    // Парсим JSON из запроса
    const data = JSON.parse(e.postData.contents);
    
    // Получаем лист по названию (posobie или praktikum)
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(data.type);
    
    if (!sheet) {
      Logger.log('Лист не найден: ' + data.type);
      return ContentService.createTextOutput('Sheet not found: ' + data.type);
    }
    
    // Преобразуем объект данных в массив
    const entry = data.data;
    const values = [];
    
    // Порядок полей должен совпадать с заголовками в листе!
    if (data.type === 'posobie') {
      values.push(
        entry['Рекомендация'] || '',
        entry['Актуальность содержания'] || '',
        entry['Полнота тем'] || '',
        entry['Структура (1-5)'] || '',
        entry['Навигация'] || '',
        entry['Мультимедиа'] || '',
        entry['Наглядность'] || '',
        entry['Планируете использовать'] || ''
      );
    } else if (data.type === 'praktikum') {
      values.push(
        entry['Количество заданий'] || '',
        entry['Закрепление теории'] || '',
        entry['Разнообразие заданий'] || '',
        entry['Качество иллюстраций (1-5)'] || ''
      );
    }
    
    // Добавляем новую строку в таблицу
    sheet.appendRow(values);
    
    Logger.log('Голос добавлен: ' + data.type);
    return ContentService.createTextOutput('OK').setMimeType(ContentService.MimeType.TEXT);
    
  } catch (error) {
    Logger.log('Ошибка: ' + error.toString());
    return ContentService.createTextOutput('Error: ' + error.toString());
  }
}

// Функция для тестирования (опциональна)
function testWebhook() {
  const testData = {
    type: 'posobie',
    data: {
      'Рекомендация': 'Да, очень',
      'Актуальность содержания': '5',
      'Полнота тем': 'Достаточно',
      'Структура (1-5)': '5',
      'Навигация': 'Очень удобно',
      'Мультимедиа': 'Отлично',
      'Наглядность': 'Очень наглядно',
      'Планируете использовать': 'Да, точно'
    }
  };
  
  Logger.log(JSON.stringify(testData));
}
