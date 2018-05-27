const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("Özürlü müsün? Neden kendini yasaklamak istiyorsun?")
    if(!bUser) return message.channel.send(":name_badge: **| Üye bulunamadı.** Lütfen @üye şeklinde etiketleyin yada ID sini girin");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send(":pencil2: **| Lütfen bir sebep belirtin!**")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: **| Senin `BAN_MEMBERS` yetkin yok.**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("**Zappara | Yasakla**")
    .setColor("#bc0000")
    .addField("Kullanıcı", bUser.user.tag)
    .addField("Yasaklayan", message.author.tag)
    .addField("Sebep", bReason)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "zappara_yasaklananlar");
    if(!incidentchannel) return message.channel.send(":name_badge: **| Sunucuda `zappara_yasaklananlar` kanalı bulunamadı.**");
    let embed = new Discord.RichEmbed()
    .setTitle("Yasakla")
    .addField("Yasaklandı", message.guild.name)
    .setColor("#bc0000")
    .addField("Yasaklayan", message.author.tag)
    .addField("Sebep", bReason)
    bUser.send(embed);
  message.channel.send(":white_check_mark:  **| Üye başarıyla yasaklandı.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"yasakla"
}
