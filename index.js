require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

bot.sendMessage(process.env.CHAT_ID, "🚀 Bot iniciado com sucesso e pronto para enviar promoções!");
