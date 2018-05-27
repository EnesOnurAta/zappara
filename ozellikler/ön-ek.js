const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(":no_entry_sign: **| Senin `ADMINISTRATOR` yetkin yok.**");
  if(!args[0]) return message.channel.send(":pencil2: **| Lütfen bir ön ek belirtin!**")

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let sEmbed = new Discord.RichEmbed()
  .setColor("#FF9900")
  .setTitle("**Ön Ek (Prefix) Değiştirme**")
  .setThumbnail(bot.user.displayAvatarURL)
  .setColor("RANDOM")
  .addField(`Artık Ön Ek`, **`\`${args[0]}\`** olmuştur`);

  message.channel.send(sEmbed);

}

module.exports.help = {
  name: "ön-ek"
}
