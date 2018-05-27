const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let bUser = args[0]
    if(!bUser) return message.channel.send(":name_badge: **| Üye bulunamadı.** Lütfen ID sini girin");
    let bReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(":no_entry_sign: **| Senin `BAN_MEMBERS` yetkin yok.**");

  message.channel.send("<:tickYes:432418492889694210> **| That member has been un-banned.**").then(msg => msg.delete({timeout: 20000}));
  message.guild.unban(bUser)
}

module.exports.help = {
  name:"yasak-kaldır"
}
