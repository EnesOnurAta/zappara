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

/* SELAM VERME */
bot.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});

/* SOHBET TEMIZLEME */
bot.on('message', msg => {
  if (msg.content.toLowerCase() === prefix + 'sil') {
    if (msg.channel.type === 'dm') {
      const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0xFF0000)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(':warning: Uyarı :warning:', 'Bu komutu özel mesajlarda kullanamazsın.')
    msg.author.sendEmbed(ozelmesajuyari); }
      if (msg.channel.type !== 'dm') {
        if (!msg.member.hasPermission("MANAGE_MESSAGES")) {{
          const mesajlariyonet = new Discord.RichEmbed()
          .setColor(0xFF0000)
          .setTimestamp()
          .setAuthor(msg.author.username, msg.author.avatarURL)
          .addField(':warning: Uyarı :warning:', 'Bu komutu kullanmak için `Mesajları Yönet` iznine sahip olmalısın.')
          return msg.author.sendEmbed(mesajlariyonet);
      }}
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100);
      msg.channel.bulkDelete(100); //1000 mesaj gg
      const sohbetsilindi = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .addField('Eylem:', 'Sohbet silme')
    .addField('Yetkili:', msg.author.username)
    .addField('Sonuç:', `1000 Mesaj Silindi`)
    return msg.channel.sendEmbed(sohbetsilindi);
      console.log("Sohbet " + msg.member + " tarafından silindi!");
      console.log("1000 mesaj gg oldu :)");
}}});

/* AVATAR */
// Create an event listener for messages
bot.on('message', message => {
  // If the message is "what is my avatar"
  if (message.content === prefix + 'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
