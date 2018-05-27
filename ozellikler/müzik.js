const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

let embed = new Discord.RichEmbed()
    .setTitle("Müzik")
    .setDescription("There are currently 8 commands in this category.\n`The default prefix will remain.`")
    .addField("`" + message.prefix +"çal`", "Müzik çalar")
    .addField("`" + message.prefix +"neçalıyor`", "Şu anda ne çaldığını gösterir.")
    .addField("`" + message.prefix +"dur`", "Çalan müziği durdurur")
    .addField("`" + message.prefix +"kuyruk`", "Müzik kuyruğunu gösterir")
    .addField("`" + message.prefix +"geç`", "Bir sonraki müziği çalar")
    .addField("`" + message.prefix +"ses`", "Müziğin sesini ayarlar")
    .addField("`" + message.prefix +"devamet`", "Durdurulan müziği devam ettirilir")
    .setFooter("Zappara | Müzik Komutları")

message.channel.send(embed);
}

module.exports.help = {
  name: "müzik"
}
