const Discord = require("discord.js");
module.exports = {
    name: "avatar",
    description: "Displays USERS avatar",
      execute (message, args) {
        if(args[0]){
        const user = message.mentions.users.first();
        if(!user) return message.reply('Make sure to mention a user to view their icon.');

        const otherIconEmbed = new Discord.MessageEmbed()
        .setTitle(`${user.username}'s avatar`)
        .setImage(user.displayAvatarURL({size: 4096, dynamic: true}));

        return message.channel.send(otherIconEmbed).catch( err => console.log(err));
        }

        const myIconEmbed = new Discord.MessageEmbed()
        .setTitle(`${message.author.username}'s Avatar`)
        .setImage(message.author.displayAvatarURL({size: 4096, dynamic: true}));
        return message.channel.send(myIconEmbed).catch(err => console.log(err));
     }
}