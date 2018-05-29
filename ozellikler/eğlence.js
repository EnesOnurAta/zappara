const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    let embed = new Discord.RichEmbed()
    .setTitle(":tada: Eğlence")
    .setTimestamp()
    .addField("`" + message.prefix +"avatar`", "Kullanıcının Avatarını gösterir")
    .addField("`" + message.prefix +"köpek`", "Rastgele köpek fotoğrafı atar")
    .addField("`" + message.prefix +"kedi`", "Rastgele kedi fotoğrafı atar")
    .addField("`" + message.prefix +"sayıtut`", "1-100 arası bir sayı tutar")
    .addField("`" + message.prefix +"slot`", "Slot oynarsınız. 3 tane yan yana emoji getiren kazanır!")
    message.channel.send(embed)
}
module.exports.help = {
    name: "eğlence"
}
