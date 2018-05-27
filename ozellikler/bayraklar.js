const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
.setTitle("BAYRAKLAR")
.setDescription("Bu kategoride şimdilik 1 komut vardır")
.addField("`" + message.prefix +"tr`", "Türkiye Bayrağı")
message.channel.send(embed);
}

module.exports.help = {
  name: "bayraklar"
}
