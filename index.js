touch index.js
require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Usa o token que você colocou no arquivo .env
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

// Trecho TEMPORÁRIO só para descobrir o chat ID:
bot.on('message', (msg) => {
  console.log(JSON.stringify(msg, null, 2));
});
