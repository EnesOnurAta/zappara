const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = '-';

//TOKEN
client.login(process.env.BOT_TOKEN);

// BOT AÇILINCA
client.on('ready', () => {
  console.log('Giris Saglandi');
  console.log("Prefix: " + prefix);
  console.log("Bot ID'si:" + client.user.id);
  console.log("Bot Isim:" + client.user.username);
});

// OYNUYOR
client.on('ready', () => {
  client.user.setStatus("STREAMING"); 
  client.user.setActivity('> İyi Akşamlar', {
    type: "STREAMING"
  }); 
})

// SOHBET TEMIZLEME
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
    .addField('Sonuç:', `:white_check_mark: | Başarılı`)
    return msg.channel.sendEmbed(sohbetsilindi);
      console.log("Sohbet " + msg.member + " tarafından silindi!");
}}});

// YAZ
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

// SUNUCUYA GİRİŞ
client.on('guildMemberAdd', member => {
  let guild = member.guild;
  let joinRole = guild.roles.find('name', 'Üye'); // Burada girişte verilcek rolu seçelim.
  member.addRole(joinRole); // seçtiğimiz rolu verelim.

  const channel = member.guild.channels.find('name', 'zappara'); // burda ise kanalı belirleyelim hangi kanala atsın ben giris-log dedim.
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📥 | Sunucuya katıldı! | Hoşgeldin!')
  .setTimestamp()
  channel.sendEmbed(embed); // belirlediğimiz kanala mesaj gönderelim.
});

client.on('guildMemberRemove', member => {
  const channel = member.guild.channels.find('name', 'zappara');/* cikis-log isimli kanalınız varsa log oraya gidecektir*/
  if (!channel) return;
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setAuthor(member.user.username, member.user.avatarURL)
  .setThumbnail(member.user.avatarURL)
  .setTitle('📤 | Sunucudan ayrıldı | Görüşmek üzere!')
  .setTimestamp()
  channel.sendEmbed(embed); 
});

// Otomatik Mesajlar
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

// Tavsiye
client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(' ')[0];
  command = command.slice(prefix.length);

  let args = message.content.split(' ').slice(1);

  if (command === 'tavsiyeni-gönder' || command === 'tavsiye') {
    let str = '<@274551537139712001>';//@silmeyin!
    let id = str.replace(/[<@!>]/g, '');
    let mesaj = args.slice(0).join(' ');
    if (mesaj.length < 1) return message.reply(` ⚠ Tavsiyeni yazmayı unuttun. ⚠ `);
    message.channel.sendEmbed(new Discord.RichEmbed()
    .setColor('RANDOM')
    .setDescription(''));
    const embed = new Discord.RichEmbed()
    .setColor('RANDOM')
    .setTitle('Tavsiye bilgileri;')
    .addField('Tavsiye:', mesaj, true)
    .addField('Kullanıcı adı:', message.author.tag, true)
    .addField('Kullanıcı kimliği:', message.author.id, true)
    .addField('Sunucu adı:', message.guild.name, true)
    .addField('Sunucu kimliği:', message.guild.id, true)
    client.fetchUser(id)
    .then(user => {user.send({embed})})
  }
});

// Özelden Yazılanlar
    client.on("message", message => {
    const dmchannel = client.channels.find("name", "zappara-dm");
    if (message.channel.type === "dm") {
        if (message.author.id === client.user.id) return;
        dmchannel.sendMessage("", {embed: {
                color: 3447003,
                title: `DM'den Yazan: ${message.author.tag}`,
                description: `${message.content}`
              }})
    }
    if (message.channel.bot) return;
});
// Profil Fotoğrafı
client.on('message', message => {
    if (message.author.id != 274551537139712001) {
    if (message.content.startsWith(prefix + "profil normal"))
            {            
                client.user.setAvatar('https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png').catch(console.log);
            }
    if (message.content.startsWith(prefix + "profil z"))
            {            
                client.user.setAvatar('https://cdn.discordapp.com/attachments/304630731345362946/450008241645289482/letter.png').catch(console.log);
            }
    if (message.content.startsWith(prefix + "profil a"))
            {            
                client.user.setAvatar('https://cdn.discordapp.com/attachments/304630731345362946/450008555894865940/blue_2.png').catch(console.log);
            }
    if (message.content.startsWith(prefix + "profil p"))
            {            
                client.user.setAvatar('https://cdn.discordapp.com/attachments/304630731345362946/450008850808963103/alphabet-letter-letters-p-red_1.png').catch(console.log);
            }
    if (message.content.startsWith(prefix + "profil r"))
            {            
                client.user.setAvatar('https://cdn.discordapp.com/attachments/304630731345362946/450009096406433802/letter_1.png').catch(console.log);
            }
           }});

//KULLANICI BİLGİ
client.on('message', message => { //Message Event | Listener

    if (message.content.startsWith(prefix + 'kullanıcıbilgi')) {

        const KullanıcıBilgi = new Discord.MessageEmbed()

            //All Fields are Optional Pick Any some

            .setAuthor(message.author.username, message.author.avatarURL()) //Heading With Username & Their Avatar 
            .setTitle('Kullanıcı Bilgi')
            .setURL('www.google.com') //Any Vaild Link
            .setColor('RANDOM') //You Can Use HexColour Ex:- #000000
            .setImage(message.author.avatarURL()) //Add Any Image URl || Image
            .setThumbnail(message.author.avatarURL()) //Add Any Image URl || ThumbNail

            //All Feilds Are Just Examples pick Some & add as you like

            .addField('Avatar', message.author.avatar, true) //The ID of the user's avatar //Inline True or false
            .addField('AvatarURL', message.author.avatarURL({
                format: 'png'
            }), true) //{options} options are Size?: 128 | 256 | 512 | 1024 | 2048, Format?: "webp" | "png" | "jpg" | "gif" //.defaultAvatarURL() A link to the user's default avatar //.displayAvatarURL() A link to the user's avatar if they have one. Otherwise a link to their default avatar will be returned
            .addField('AvatarURL', message.author.avatarURL({
                size: '2048'
            }), true)
            .addField('Bot', message.author.bot, true) //Returns True If Message Author = Bot || False If Message Author not Bot.
            .addField('Created At', message.author.createdAt, false) //The time the user was created || .createdTimestamp - The timestamp the user was created at
            .addField('Discrim', message.author.discriminator, true) //A discriminator/tag based on username for the user Ex:- 0001
            .addField('DMChannel', message.author.dmChannel) //The DM between the client's user and this user || If Nothing Returns "Null"
            .addField('ID', message.author.id) //The ID of the User/author
            .addField('Last Message', message.author.lastMessage) //The Message object of the last message sent by the user, if one was sent
            .addField('Last Message ID', message.author.lastMessageID) //The ID of the last message sent by the user, if one was sent
            .addField('Presence', message.author.presence) //The presence of this user
            .addField('Presence Status', message.author.presence.status) //The presence status of this user
            .addField('Presence Game', message.author.presence.activity.name) //The presence Game of this user
            .addField('Tag', message.author.tag) //The Discord "tag" for this user || Ex:- Sai Chinna#6718
            .addField('Username', message.author.username) //The username of the user || Ex:- Sai Chinna
            .addField('Nick Name', message.guild.member(target).displayName) //Nick Name In That (message sent) server || Define target as message Author Ex:- let target = message.author; || Add This Line in Top

            .setFooter('Requested By', message.author.tag) //Change To Anything As You Wish
            .setTimestamp() //The timestamp of this embed

        message.channel.send(KullanıcıBilgi);
    }
});

//EMOJİLER
client.on('message', message => { //Message Event | Listener

    if (message.content.startsWith(prefix + 'emojiler')) {

        const List = message.guild.emojis.map(e => e.toString()).join(" ");

        const Emojiler = new Discord.MessageEmbed() //Embed Constructor || If lower than v12.0.0 | Use RichEmbed
            .setTitle('➠ Emoji\'s') //Title
            .setAuthor(message.guild.name, message.guild.iconURL `https://cdn.discordapp.com/attachments/383886042178256909/397988796186230784/4zBNFjA8S9yjNB_ONwqBvxTvyXYdC7Nh1jYZ2x6YEcldBr2fyijdjM2J5EoVdTpnkAw300.png`) //<Guild> Name, Icon URL || If <Guild> Icon => Null Sends Custom Image URL 
            .setColor('RANDOM') //Random colour || Any HexCode Can be used Instead
            .setDescription(List) //Here will List of Emoji's
            .setTimestamp() //The timestamp of this embed
            .setFooter(message.guild.name) //Change To Anything As You Wish
        message.channel.send(Emojiler) //Sends to Channel

        //------------------------------------------------------------------------------
        //If You pefer not to send in an Embed
        //Try
        message.channel.send(List); //sends to Channel Without Embed
    }
});

//YARDIM
client.on('message', msg => {
    if (msg.content === prefix + 'yardım') {
    const embed = new Discord.RichEmbed()
      .setColor("RED")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .addField("Komutlarımız Şunlardır:", `${prefix}yardım = Komutları gösterir`, `${prefix}ping = Gecikmenizi gösterir`, `${prefix}yaz <mesajınız> = Bota mesajınızı yazdırırsınız`, `${prefix}sil = Sohbeti siler`, `${prefix}sunucu = Sunucu bilgisini gösterir`, `${prefix}emojiler = Bulunduğun sunucudaki emojileri gösterir`,)
      .setDescription(`${client.user.username} Komut Yardımı`)
      .setFooter("Zappara | Yardım")
      .setTimestamp()
    const embed2 = new Discord.RichEmbed()
      .setColor("GREEN")
      .setDescription("Özel mesajlarını kontrol et :postbox:")
      .setAuthor(msg.author.username, msg.author.avatarURL)
      .setFooter("Zappara | Yardım")
      .setTimestamp()
    msg.channel.send(embed2).then(msg.author.send(embed));
  }
});
