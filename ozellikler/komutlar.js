const Discord = require('discord.js');
exports.run('message', msg => {
    if (msg.channel.type !== 'dm') {
      const KOMUTLAR = new Discord.RichEmbed()
    .setColor(0x00AE86)
    .setTimestamp()
    .setAuthor(msg.author.username, msg.author.avatarURL)
    .addField(msg.author.username, 'Özel mesajlarını kontrol et. :postbox:');
    msg.channel.sendEmbed(KOMUTLAR) }
      msg.author.sendMessage('`Komutlar:\n\n' + prefix + 'komutlar\n' + prefix + 'ping\n' + prefix + 'davet\n' + prefix + 'destek\n`').then(message => console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] Gönderilen mesaj: ${message.content}`)).catch(console.error);
  }
});
