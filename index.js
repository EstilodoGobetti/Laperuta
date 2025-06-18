require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

bot.sendMessage(process.env.CHAT_ID, "🚀 Bot iniciado com sucesso e pronto para enviar promoções!")
  .then(() => {
    console.log("Mensagem enviada com sucesso!");
    process.exit(0); // Encerra o programa após enviar
  })
  .catch((error) => {
    console.error("Erro ao enviar mensagem:", error);
    process.exit(1);
  });
