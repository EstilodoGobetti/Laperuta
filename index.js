require('dotenv').config();
const TelegramBot = require('node-telegram-bot-api');

// Cria o bot com polling: false para só enviar mensagens, sem ouvir
const bot = new TelegramBot(process.env.BOT_TOKEN, { polling: false });

// Mensagem automática que será enviada
const mensagem = "🚀 Bot no ar com sucesso! Receba ofertas aqui!";

// Envia a mensagem assim que o script rodar
bot.sendMessage(process.env.CHAT_ID, mensagem)
  .then(() => {
    console.log("✅ Mensagem enviada com sucesso!");
  })
  .catch((err) => {
    console.error("❌ Erro ao enviar a mensagem:", err.message);
  });
