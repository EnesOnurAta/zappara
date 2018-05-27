const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle(":tools: Moderasyon Komutları")
    .addField("`" + message.prefix + "yasakla`", "Kullanıcıyı yasaklar")
    .addField("`" + message.prefix + "yasak-kaldır`", "Kullanıcının yasağını kaldırır [IDyi kullanın]")
    .addField("`" + message.prefix +"sil`", "Mesajları siler")
    .addField("`" + message.prefix +"at`", "Kullanıcıyı atar")
    .setFooter("Gördüğünüz her şey JavaScript'tir")

message.channel.send(embed);
}

module.exports.help = {
  name: "moderasyon"
}
