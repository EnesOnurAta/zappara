const Discord = require("discord.js");
const fs = require("fs");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("MANAGE_MEMBERS")) return message.reply(":no_entry_sign: **| Senin `MANAGE_MEMBERS` yetkin yok.**");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.reply(":name_badge: **| Üye bulunamadı.**");
  let warnlevel = warns[wUser.id].warns;

  let embed = new Discord.RichEmbed()
  .setTitle("**Zappara | Uyarı Bak**")
  .addField("Uyarılan", wUser.user.tag)
  .addField("Uyaran", message.author.tag)
  .addField("Kaç Kere Uyarıldı", `${warnlevel}`)
  .setColor("#f4b342")
  message.channel.send(embed);

}

module.exports.help = {
  name: "uyarıbak"
}
