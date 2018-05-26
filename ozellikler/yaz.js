const Discord = require('discord.js');
exports.run = (client, message, args) => {
let yaz = message.content.split(" ").slice(1).join(" ");
message.delete();
const embed = new Discord.RichEmbed()
.setDescription(yaz)
message.channel.send({embed});
  
}
