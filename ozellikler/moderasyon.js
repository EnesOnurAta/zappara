const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("<:TAmod:444855093569781760> Moderasyon")
    .addField("`" + message.prefix + "yasakla`", "Kullanıcıyı yasaklar")
    .addField("`" + message.prefix + "yasak-kaldır`", "Kullanıcının yasağını kaldırır [IDyi kullanın]")
    .addField("`" + message.prefix +"sil`", "Mesajları siler")
    .addField("`" + message.prefix +"at`", "Kullanıcıyı atar")
    .addField("`" + message.prefix +"uyar`", "Kullanıcıyı uyarırsınız")
    .setFooter("Mesajları zappara/mod-log kanalına atar!")

message.channel.send(embed);
}

module.exports.help = {
  name: "moderasyon"
}
