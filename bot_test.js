const Discord = require("discord.js");
const client = new Discord.Client();
const ayarlar = require("./ayarlar.json");

var prefix = "-";

client.on("message", async msg => {
  if (msg.author.bot) return;
  if(msg.content.indexOf(prefix) !== 0) return;

  const args = msg.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const event = msg.content.toLower

  try {
    let commandFile = require(`./ozellikler/${command}.js`);
    commandFile.run(client, msg, args);
  } catch (err) {}
});
