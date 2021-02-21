module.exports = {
    name: 'rules',
    description: "this is a command for the rules of the bot",
    execute(message, args, Discord){
        //embed part
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#ffbc75')
        .setTitle('Rules')
        .setDescription('follow these rules or d word!!!!!')
        .addFields(
            {name: 'Rule 1', value: 'be nice to mashiho'},
            {name: 'Rule 2', value: 'be nice to cherry'},
            {name: 'Rule 3', value: 'be nice to queen alma'}
        )
        .setImage('https://pbs.twimg.com/media/EcaAlXPU4AYH-aC.jpg')
        .setFooter('mashiho is epic');

        message.channel.send(newEmbed)
    }
}