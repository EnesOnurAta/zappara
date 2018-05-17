const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '-';

/* TOKEN */
client.login(process.env.BOT_TOKEN);

/* BOT AÇILINCA */
client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log('Bot Isim: ${client.user.username}');
  console.log("Hizmet Verdigi Sunucu Sayisi:" + client.guilds.size);
  console.log(' ');
  console.log('HESAP BILGILERI');
  console.log('Bot Email: enesonurata.yedek@gmail.com');
  console.log('Bot Sifre: zapparabot');
});

/* OYNUYOR */
client.on('ready', () => {
  client.user.setStatus("STREAMING"); 
  client.user.setActivity('${prefix}yardım | ${client.user.username}', {
    type: "STREAMING"
  }); 
})

/* SOHBET TEMIZLEME */
client.on('message', msg => {
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
    .addField('Sonuç:', `1000 Mesaj Silindi :white_check_mark:`)
    return msg.channel.sendEmbed(sohbetsilindi);
      console.log("Sohbet " + msg.member + " tarafından silindi!");
}}});

/* YAZ */
client.on('message', msg => {
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

/* SUNUCUYA GİRİŞ */
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'zappara'); // burda ise kanalı belirleyelim hangi kanala atsın ben mod-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı!')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'zappara');
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı')
  .setTimestamp()
  channel.sendEmbed(embed); 
});
  /* Otomatik Mesajlar */
client.on('message', msg => {
  if (msg.content === 'Zappara') {
   	msg.reply('Efendim canım');
  }
});

client.on('message', msg => {
    if (msg.content === prefix + 'sunucu') {
      const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setThumbnail(msg.author.avatarURL)
        .addField("Sunucu Sahibi", msg.guild.owner)
        .addField("Toplam Üye Sayısı", msg.guild.members.size)
        .addField("Oluşturulma Tarihi", msg.guild.createdAt)
      msg.channel.send(embed)
    }
  });

client.on('message', message => {
	if (message.content === prefix + 'tr') {
		const attachment = new MessageAttachment('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVYpPObVeXJIcd9VY_tVynvkUyFC9maAQ02nHjoGn1EnZk_ArIe38wKtWk');
		message.channel.send(attachment);
  }
});
