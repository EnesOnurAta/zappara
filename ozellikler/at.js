const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!kUser) return message.channel.send(":name_badge: **| Üye bulunamadı.**");
  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry_sign: **| Senin `KICK_MEMBERS` yetkin yok.**")
  let kReason = args.join(" ").slice(22);
  if(!kReason) return message.channel.send(":pencil2: **| Lütfen bir sebep belirtin!**")

  let kickEmbed = new Discord.RichEmbed()
  .setDescription("**Zappara | Sunucudan At**")
  .setColor("#f45642")
  .addField("Atılan", `${kUser}`)
  .addField("Atan", `${message.author}`)
  .addField("Sebep", kReason)
  .setTimestamp();

  let kickChannel = message.guild.channels.find(`name`, 'zappara_atılanlar');
  if(!kickChannel) return message.channel.send(":name_badge: **| Sunucuda `zappara_atılanlar` kanalı bulunamadı.**");
   let embed = new Discord.RichEmbed()
  .setDescription("**Zappara | Sunucudan At**")
  .setColor("#f45642")
  .addField("Atılan", kUser.user.tag)
  .addField("Atan", message.author.tag)
  .addField("Saat", message.createdAt.toLocaleString())
  .addField("Sebep", kReason);
  kUser.send(embed)
message.channel.send(":white_check_mark:  **| Üye başarıyla sunucudan atıldı.**")
kUser.kick(kReason)
kUser.send(embed);
kickChannel.send(kickEmbed);
}

module.exports.help = {
  name: "at.js"
}
