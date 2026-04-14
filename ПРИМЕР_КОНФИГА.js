// ═════════════════════════════════════════════════════════════
// ПРИМЕР: Как должен выглядеть заполненный CONFIG
// ═════════════════════════════════════════════════════════════

// ❌ ДО (как не надо):
const CONFIG = {
  GOOGLE_SHEET_WEBHOOK: 'https://script.google.com/macros/d/YOUR_DEPLOYMENT_ID/userweb?v=1',
  TELEGRAM_TOKEN: 'YOUR_TELEGRAM_BOT_TOKEN',
  TELEGRAM_CHAT_ID: 'YOUR_CHAT_ID',
  GOOGLE_SHEETS_ENABLED: false,
  TELEGRAM_ENABLED: false,
};

// ✅ ПОСЛЕ (пример с реальными данными):
const CONFIG = {
  GOOGLE_SHEET_WEBHOOK: 'https://script.google.com/macros/d/1AIdyR5dv4FbqLjzlN8a9K0pQ1R2S3T4U5V6W7X8/userweb?v=1',
  TELEGRAM_TOKEN: '123456789:ABCdefGHIjklmnoPQRstuvWXyz1234567890',
  TELEGRAM_CHAT_ID: '987654321',
  GOOGLE_SHEETS_ENABLED: true,
  TELEGRAM_ENABLED: true,
};

// ═════════════════════════════════════════════════════════════
// 📌 ЗАПОЛНЕНИЕ STEP-BY-STEP
// ═════════════════════════════════════════════════════════════

// 1️⃣ GOOGLE SHEET WEBHOOK (из Google Apps Script)
// 
// Где его взять:
// 1. Google Sheets → Расширения → Apps Script
// 2. Развернуть → Новое развертывание
// 3. Выбрать "Веб-приложение"
// 4. Скопировать URL из поля "URL развертывания"
//
// Пример реального URL:
// https://script.google.com/macros/d/1AIdyR5dv4FbqLjzlN8a9K0pQ1R2S3T4U5V6W7X8/userweb?v=1
//
// Вставь сюда (между кавычками):
GOOGLE_SHEET_WEBHOOK: 'https://script.google.com/macros/d/[СКОПИРУЙ_СЮДА]/userweb?v=1'

// ═════════════════════════════════════════════════════════════

// 2️⃣ TELEGRAM TOKEN (от @BotFather)
//
// Где его взять:
// 1. Telegram → @BotFather
// 2. /newbot → следуй инструкциям
// 3. Получишь строку вида: 123456789:ABCdefGHIjklmnoPQRstuvWXyz1234567890
//
// Пример реального токена:
// 123456789:ABCdefGHIjklmnoPQRstuvWXyz1234567890
//
// Вставь сюда:
TELEGRAM_TOKEN: '[СКОПИРУЙ_ВСЮ_СТРОКУ_СЮДА]'

// ═════════════════════════════════════════════════════════════

// 3️⃣ TELEGRAM CHAT ID (твой ID)
//
// Где его взять:
// 1. Отправь любое сообщение боту (напиши /start)
// 2. Открой в браузере:
//    https://api.telegram.org/botТВОЙ_ТОКЕН/getUpdates
// 3. Найди "id":987654321 — это твой Chat ID
//
// Пример реального Chat ID:
// 987654321
//
// Вставь сюда:
TELEGRAM_CHAT_ID: '[СКОПИРУЙ_ЦИФРЫ_СЮДА]'

// ═════════════════════════════════════════════════════════════

// 4️⃣ ВКЛЮЧЕНИЕ СЕРВИСОВ
//
// После того, как заполнил значения сверху, меняй на true:
GOOGLE_SHEETS_ENABLED: true,  // true = включить, false = отключить
TELEGRAM_ENABLED: true,       // true = включить, false = отключить

// ═════════════════════════════════════════════════════════════
// ИТОГОВЫЙ КОНФИГ:
// ═════════════════════════════════════════════════════════════

const CONFIG_FINAL = {
  GOOGLE_SHEET_WEBHOOK: 'https://script.google.com/macros/d/[ТВО_URL]/userweb?v=1',
  TELEGRAM_TOKEN: '[ТВ_ТОКЕН_ОТ_BOTFATHER]',
  TELEGRAM_CHAT_ID: '[ТВ_CHAT_ID]',
  GOOGLE_SHEETS_ENABLED: true,
  TELEGRAM_ENABLED: true,
};

// ═════════════════════════════════════════════════════════════
// 🧪 КАК ПРОВЕРИТЬ, ЧТО РАБОТАЕТ?
// ═════════════════════════════════════════════════════════════

// 1. Открой steam_vote.html в браузере
// 2. Ответь на ВСЕ вопросы
// 3. Нажми кнопку "Отправить оценку"
// 4. Проверь:
//    ✓ Появились ли данные в Google Sheets?
//    ✓ Пришло ли сообщение в Telegram бот?
// 5. Если нет — открой F12 → Console и посмотри ошибки

// ═════════════════════════════════════════════════════════════
// ⚠️ БЕЗОПАСНОСТЬ
// ═════════════════════════════════════════════════════════════

// НИКОГДА не выкладывай эту конфигурацию в GitHub или публичные места!
// Токены — это твой приватный ключ.
//
// Если случайно выложил:
// 1. Скорее всего это не опасно (токены работают ограниченное время)
// 2. Но лучше создать новый бот в @BotFather
// 3. И обновить токен в конфиге
