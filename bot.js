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
  client.user.setActivity('Teşekkürler: ${client.guilds.size} sunucu', {
    type: "STREAMING"
  }); 
})
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

//MODERASYON KOMUTLARI - BAN,KICK,
client.on("message", async message => {
  if(command === "at") {
    // This command must be limited to mods and admins. In this example we just hardcode the role names.
    // Please read on Array.some() to understand this bit: 
    // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/some?
    if(!message.member.roles.some(r=>["Zappara Team"].includes(r.name)) )
      return message.reply("Üzgünüm, bu komutu Zappara Team rolüne sahip olanlar kullanabilir!");
    
    // Let's first check if we have a member and if we can kick them!
    // message.mentions.members is a collection of people that have been mentioned, as GuildMembers.
    // We can also support getting the member by ID, which would be args[0]
    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if(!member)
      return message.reply("Lütfen bu sunucuda olan bir üyeyi belirtin @üyeninadı#kodu şeklinde");
    if(!member.kickable) 
      return message.reply("Bu kullanıcıyı atamam! Daha yüksek bir rolleri var mı? Atma izinlerim var mı?");
    
    // slice(1) removes the first part, which here should be the user mention or ID
    // join(' ') takes all the various parts to make it a single string.
    let reason = args.slice(1).join(' ');
    if(!reason) reason = "Nedeni yok";
    
    // Now, time for a swift kick in the nuts!
    await member.kick(reason)
      .catch(error => message.reply(`Üzgünüm ${message.author} üyeyi atamadım : ${error}`));
    message.reply(`${member.user.tag} isimli üye ${message.author.tag} tarafından atıldı çünkü: ${reason}`);

  }
  
//BAN - Yasaklama
  if(command === "yasakla") {
    // Most of this command is identical to kick, except that here we'll only let admins do it.
    // In the real world mods could ban too, but this is just an example, right? ;)
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
