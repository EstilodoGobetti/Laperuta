require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: true });

bot.on('message', (msg) => {
  console.log("Chat ID:", msg.chat.id);
  bot.sendMessage(msg.chat.id, `Seu chat ID é ${msg.chat.id}`);
});
