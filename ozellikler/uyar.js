const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  message.delete();

  if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(":no_entry_sign: **| Senin `KICK_MEMBERS` yetkin yok.**");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(wUser === message.author) return message.channel.send("Özürlü müsün? Neden kendini uyarmak istiyorsun?")
  if(!wUser) return message.reply(":name_badge: **| Üye bulunamadı.**");
  let reason = args.join(" ").slice(22);
if(!reason) return message.channel.send(":pencil2: **| Lütfen bir sebep belirtin!**")
  if(!warns[wUser.id]) warns[wUser.id] = {
    warns: 0
  };

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err)
  });

  let warnEmbed = new Discord.RichEmbed()
  .setTitle("**Zappara | Uyar**")
  .setColor("#fc6400")
  .addField("Uyarılan", `${wUser.user.tag}`)
  .addField("Uyaran", `${message.author.tag}`)
  .addField("Kaç Kere Uyarıldı", warns[wUser.id].warns)
  .addField("Sebep", reason);

  let warnchannel = message.guild.channels.find(`name`, "zappara_uyarılar");
  if(!warnchannel) return message.channel.send(":name_badge: **| Sunucuda `zappara_uyarılar` kanalı bulunamadı.**");
  warnchannel.send(warnEmbed);
  message.channel.send(":white_check_mark:  **| Üye başarıyla uyarıldı.**")

  
}

module.exports.help = {
  name: "warn"
}
