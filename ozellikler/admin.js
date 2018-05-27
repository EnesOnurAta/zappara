const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("<:TAdev:444855091443531782> Admin Komutları")
.addField("`" + message.prefix +"eval`", "JavaScript kodunu dener")
.addField("`" + message.prefix +"yenidenbaşlat`","Botu yeniden başlatır")
.addField("`" + message.prefix +"yenile`","Tüm komutları yeniler")

message.channel.send(embed);
}

module.exports.help = {
  name: "admin"
}
