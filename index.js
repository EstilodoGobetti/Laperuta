require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Configurar o bot sem polling, pois só vai enviar mensagens
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

// Mensagem que será enviada
const mensagem = "🚀 Bot no ar com sucesso! Receba ofertas aqui!";

// Envia a mensagem assim que o bot iniciar
bot.sendMessage(process.env.CHAT_ID, mensagem)
  .then(() => {
    console.log("✅ Mensagem enviada com sucesso!");
  })
  .catch((err) => {
    console.error("❌ Erro ao enviar a mensagem:", err.message);
  });
