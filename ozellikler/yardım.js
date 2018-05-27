const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
  let embed = new Discord.RichEmbed()
    .setTitle("KATEGORİLER")
    .setAuthor("85 Tane Komut Var", bot.user.displayAvatarURL)
    .addField("Moderasyon", "`" + message.prefix + "moderasyon`", true)
    .addField("Oyunlar", "`" + message.prefix + "oyunlar`", true)
    .addField("Bayraklar", "`" + message.prefix + "bayrak`", true)
    .addField("Müzik", "`" + message.prefix + "Müzik`", true)
    .addField("Eğlence", "`" + message.prefix + "eğlence`", true)
    .addField("İstatistikler", "`" + message.prefix + "istatistikler`", true)
    .addField("Admin", "`" + message.prefix + "admin`", true)
  .setFooter("Gördüğünüz tüm komutlar JavaScript'tir " + message.prefix + "yardım" + "Botun Sahibi: Enes Onur Ata#9427")
    message.channel.send(embed);
}
module.exports.help = {
    name: "yardım"
}
