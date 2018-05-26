exports.run = (client, message, args) => {
    if (msg.content === prefix + 'sunucu') {
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
         .setThumbnail(msg.author.avatarURL)
         .addField("Sunucu Sahibi", msg.guild.owner)
         .addField("Toplam Üye Sayısı", msg.guild.members.size)
         .addField("Oluşturulma Tarihi", msg.guild.createdAt)
        msg.channel.send(embed)
        }
    });
