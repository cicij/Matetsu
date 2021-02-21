const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = 'm.';

const fs = require('fs');

client.commands = new Discord.Collection();

//friend commands
const commandFiles = fs.readdirSync('./friendCommands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./friendCommands/${file}`);
    client.commands.set(command.name, command);
}

//bot commands
const commandFiles2 = fs.readdirSync('./botCommands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles2){
    const command2 = require(`./botCommands/${file}`);
    client.commands.set(command2.name, command2);
}

//start up
client.once('ready', () =>{
    console.log('GO GO POWERRANGERS');
    client.user.setActivity('in 3 servers! ps. alma sexc');
});

//bot messages
client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot)return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'cherry'){
        //cherry
        client.commands.get('cherry').execute(message, args, Discord);
    } else if(command === 'alma'){
        //alma
        client.commands.get('alma').execute(message, args, Discord);
    } else if(command === 'gemini'){
        //gemini
        client.commands.get('gemini').execute(message, args, Discord);
    }else if(command === 'fam'){
        //fam
        client.commands.get('fam').execute(message, args, Discord);
    }else if(command === 'rules'){
        //rules
        client.commands.get('rules').execute(message, args, Discord);
    }else if(command === 'avatar'){
        //rules
        client.commands.get('avatar').execute(message, args, Discord);
    }
});


client.login('ODEyNzE1MjU5NTIwODc2NjI5.YDEyEQ.sk8_vsDnLOh9NrtbAr3c5lWWero');
