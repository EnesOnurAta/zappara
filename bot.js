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
exports.run = (client, msg, args) => {
    let statuses = {
      "online": "online",
      "on": "online",
      "invisible": "invisible",
      "offline": "invisible",
      "off": "invisible",
      "invis": "invisible",
      "i": "invisible",
      "dnd": "dnd",
      "idle": "idle"
    };
    if(!args[0]) return msg.edit(`Zappara | www.zappara.cf`).then(setTimeout(msg.delete.bind(msg), 1000));
    let status = statuses[args[0].toLowerCase()];
    if(!status) {
      return msg.edit(`Yardım Komutu ${status} z!yardım`).then(setTimeout(msg.delete.bind(msg), 1000));
    }
    if(status === "on") status = "online";
    if(status === "off") status = "invisible";
    if(status === "i") status = "invisible";
    if(status === "offline") status = "invisible";
    client.user.setStatus(status)
    .then(u=> {
      msg.edit(`Status changed to ${status}`).then(setTimeout(msg.delete.bind(msg), 1000));
    }).catch(e=> {
      msg.edit(`Error while changing status to: ${status}\n\`\`\`${e}\`\`\``).then(setTimeout(msg.delete.bind(msg), 1000));
    });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["s"],
  permLevel: 0
};

exports.help = {
  name: 'status',
  description: 'Changes the Status of the bot/user',
  usage: 'status [online/invisible/dnd/idle]'
};

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
