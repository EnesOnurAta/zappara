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

/* KULLANICI BILGI */
const moment = require("moment");
require("moment-duration-format");
const status = {
  online: "Çevrimiçi",
  idle: "Boşta",
  dnd: "Rahatsız Etme",
  offline: "Çevrimdışı yada Görünmez"
};
const randomColor = "#000000".replace(/0/g, function () { return (~~(Math.random() * 16)).toString(16); });
exports.run = (client, msg, args) => {
  const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member;
  if (!member) return msg.reply("Lütfen kullanıcıyı @etiketleyin yada ID sini yazın");
  let bot;
  if (member.user.bot === true) {
    bot = "EVET";
  } else {
    bot = "HAYIR , o gerçek üye";
  }
  const embed = new Discord.MessageEmbed()
    .setColor(randomColor)
    .setThumbnail(`${member.user.displayAvatarURL()}`)
    .setAuthor(`${member.user.tag} (${member.id})`, `${member.user.avatarURL()}`)
    .addField("Kullanıcı Adı:", `${member.nickname !== null ? `Nickname: ${member.nickname}` : "Kullanıcı Adı YOK"}`, true)
    .addField("Bot?", `${bot}`, true)
    .addField("Guild", `${bot}`, true)
    .addField("Durumu", `${status[member.user.presence.status]}`, true)
    .addField("Oynadığı Oyun", `${member.user.presence.game ? `${member.user.presence.game.name}` : "Hiç bir şey oynamıyor"}`, true)
    .addField("Rolleri", `${member.roles.filter(r => r.id !== msg.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || "Rolü Yok"}`, true)
    .addField("Katıldığı Tarih", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true)
    .addField("Hesabı Açtığı Tarih", `${moment.utc(member.user.createdAt).format("dddd, MMMM Do YYYY, HH:mm:ss")}`, true);

  msg.channel.send({
    embed
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["profil"],
  permLevel: 0
};

exports.help = {
  name: "profil",
  description: "Kullanıcılar hakkında bilgi verir",
  usage: "z!profil <@etiket> veya <ID>"
};
