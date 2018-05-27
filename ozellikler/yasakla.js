const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(bUser === message.author) return message.channel.send("Özürlü müsün? Neden kendini yasaklamak istiyorsun?")
    if(!bUser) return message.channel.send("Üye bulunamadı");
    let bReason = args.join(" ").slice(22);
   if(!bReason) return message.channel.send("Lütfen bir sebep belirtin!")
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("<:tickNo:432418492667396097> **| Senin `BAN_MEMBERS` yetkin yok.**");

    let banEmbed = new Discord.RichEmbed()
    .setDescription("Yasakla")
    .setColor("#bc0000")
    .addField("Kullanıcı", bUser.user.tag)
    .addField("Yasaklayan", message.author.tag)
    .addField("Sebep", bReason)
    .setTimestamp()
    let incidentchannel = message.guild.channels.find(`name`, "zappara_yasaklananlar");
    if(!incidentchannel) return message.channel.send("<:tickNo:432418492667396097> **| Sunucuda `zappara_yasaklananlar` kanalı bulunamadı.**");
    let embed = new Discord.RichEmbed()
    .setTitle("Yasakla")
    .addField("Yasaklandı", message.guild.name)
    .setColor("#bc0000")
    .addField("Yasaklayan", message.author.tag)
    .addField("Sebep", bReason)
    bUser.send(embed);
  message.channel.send("<:tickYes:432418492889694210> **| Üye başarıyla yasaklandı.**")
  bUser.ban(bReason)
  incidentchannel.send(banEmbed);
}

module.exports.help = {
  name:"yasakla"
}
