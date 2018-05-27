const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAstats:444855091501989888> İstatistikler")
.addField("`" + message.prefix +"istatistik`", "Botun istatistiklerini gösterir")
.addField("`" + message.prefix +"kullanıcı-istatistik`", "Kullanıcının istatistiklerini gösterir")
.addField("`" + message.prefix +"sunucu-istatistik`", "Sunucunun istatistiklerini gösterir")


message.channel.send(embed);
}

module.exports.help = {
  name: "istatistikler"
}
