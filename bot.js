const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = 'z!';

/* TOKEN */
bot.login('NDM3MjcwNjM2OTEwNDc3MzEz.Dbz5xw.aKtVdBPmMpwJIQspZpS2f7I3JcI');

/* node bot.js */
bot.on('ready', () => {
  console.log(`Yapımcısı Enes Onur Ata olan ${bot.user.username} botu sunucuya katıldı!`);
});

/* OYNUYOR */
bot.on('ready', () => {
  bot.user.setStatus("PLAYING"); 
  bot.user.setActivity('Yardım Komutu: z!yardım', {
    type: "PLAYING"
  }); 
})

/* PING */
bot.on('message', msg => {
  if (msg.content === prefix + 'ping') {
    msg.reply(`**${bot.ping}**ms gecikme`);
  }
