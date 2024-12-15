const { Telegraf } = require('telegraf');

const Token = '7592307195:AAHhXQv2P9BhJgsWz8TKzBh2Lx2zs-ZtHb0';

const bot = new Telegraf(Token);

bot.start((ctx) => {
  ctx.reply('Привет!\nЯ ФИЗРУЧКА.\nЯ помогу дотрахать эту группу');
});

bot.launch()
  .then(() => {
    console.log('Бот запущен!');
  })
  .catch((err) => {
    console.error('Ошибка при запуске бота:', err);
  });

process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));