const Discord = require('discord.js');
const bot = new Discord.Client();
var prefix = 'z!';

/* TOKEN */
bot.login('NDQyMDMyNTEzMzcyOTEzNjY0.Dc5O7Q.qyu5kUp7BZZNt6dxXOtUcTVPTxs');

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
  
  /* YAZDIRMA */
bot.on('message', msg => {
    if (msg.content.startsWith(prefix + "yaz")) {
      if (msg.channel.type !== "dm"){
      let mesaj = msg.content.substring(2 + 3);
      msg.delete (msg.content == 'yaz' + mesaj)
      let embed = new Discord.RichEmbed()
      .setColor("RANDOM")
         .setDescription(mesaj)
  return msg.channel.send({embed})}
  
      }
      });
