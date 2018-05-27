const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

//PREFIX
var prefix = "z.";

//TOKEN
client.login(process.env.BOT_TOKEN);

//DOSYALARI KOMUT OLARAK ALGILAMASI ICIN
client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = msg.content.toLower

  try {
    let commandFile = require(`./ozellikler/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {}
});

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
  client.user.setActivity(`Teşekkürler: ${client.users.size} Türk Kullanıcı, ${client.channels.size} Kanal, ${client.guilds.size} Sunucu.`); 
});
//EKLİ OLDUĞU SUNUCU SAYISI - OYNUYOR İLE
client.on("guildCreate", guild => {
  client.user.setActivity(`Teşekkürler: ${client.users.size} Türk Kullanıcı, ${client.channels.size} Kanal, ${client.guilds.size} Sunucu.`);
});
client.on("guildDelete", guild => {
  client.user.setActivity(`Teşekkürler: ${client.users.size} Türk Kullanıcı, ${client.channels.size} Kanal, ${client.guilds.size} Sunucu.`);
});

//SELAM
client.on('message', async msg => {
  if (msg.content.toLowerCase() === 'sa') {
    await msg.react('🇦');
    msg.react('🇸');
  }
});
// Otomatik Mesajlar
client.on('message', msg => {
  if (msg.content === 'Zappara') {
   	msg.reply('Efendim canım');
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
// SUNUCUYA ÇIKIŞ
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
//MODERASYON İÇİN GEREKLİ
client.on("message", async message => {
    if(message.author.bot) return;
    if(message.content.indexOf(config.prefix) !== 0) return;
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

//MODERASYON KOMUTLARI - AT-KICK
    if(command === "at") {
    if(!message.member.roles.some(r=>["Zappara Team"].includes(r.name)) )
      return message.reply("Üzgünüm, bu komutu Zappara Team rolüne sahip olanlar kullanabilir!");
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Lütfen bu sunucuda olan bir üyeyi belirtin @üyeninadı#kodu şeklinde");
    if(!member.kickable) 
      return message.reply("Bu kullanıcıyı atamam! Daha yüksek bir rolleri var mı? Atma izinlerim var mı?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nedeni yok";
    await member.kick(reason)
      .catch(error => message.reply(`Üzgünüm ${message.author} üyeyi atamadım : ${error}`));
    message.reply(`${member.user.tag} isimli üye ${message.author.tag} tarafından atıldı çünkü: ${reason}`);

  } 
//MODERASYON KOMUTLARI - BAN-YASAKLAMAK
  if(command === "yasakla") {
    if(!message.member.roles.some(r=>["Zappara Team"].includes(r.name)) )
      return message.reply("Üzgünüm, bu komutu Zappara Team rolüne sahip olanlar kullanabilir!");
    let member = message.mentions.members.first();
    if(!member)
      return message.reply("Lütfen bu sunucuda olan bir üyeyi belirtin @üyeninadı#kodu şeklinde");
    if(!member.bannable) 
      return message.reply("Bu kullanıcıyı yasaklayamam! Daha yüksek bir rolleri var mı? Yasaklama yetkim var mı?");
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nedeni yok";    
    await member.ban(reason)
      .catch(error => message.reply(`Üzgünüm ${message.author} , yasaklayamadım çünkü: ${error}`));
    message.reply(`${member.user.tag} isimli üye ${message.author.tag} tarafından yasaklandı çünkü: ${reason}`);
  }
});

//MINECRAFT MOB
client.on("message", msg => {
  if (msg.content === prefix + 'mcyaratık') {
const embed = new Discord.RichEmbed()
  .setTitle("Minecraft Yaratıkları")
  .setAuthor("Zappara", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setColor(0x00AE86)
  .setFooter("Zappara | Minecraft Yaratıkları", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setImage("https://cdn.discordapp.com/attachments/440820289312522261/445144265333538817/giphy.gif")
  .setTimestamp()
  .setURL("http://enesonurata.cf")
  msg.channel.send({embed})
  }});
//Türkiye Bayrağı
client.on("message", msg => {
  if (msg.content === prefix + 'tr') {
const embed = new Discord.RichEmbed()
  .setTitle("Türkiye Bayrağı")
  .setAuthor("Zappara", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setColor(0x00AE86)
  .setFooter("Zappara | Türkiye Bayrağı", "https://cdn.discordapp.com/attachments/440820385643233290/449932544700579842/images_1.png")
  .setImage("http://gifgalaksi.com/upload/tbb_1.gif")
  .setTimestamp()
  .setURL("http://enesonurata.cf")
  msg.channel.send({embed})
  }});
