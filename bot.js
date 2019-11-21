/** First draft authored on Tues Nov 16 19:06:00 2019
Intuitive bot that checks user status across multiple digital platforms.
    @author: Upquark00
*/

var bot_token = require('./credentials')

// Open a Discord client session
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content.startsWith('!hello')) {
        msg.channel.send(`Hello ${msg.author}`);
    }
});

client.login(bot_token);
console.log(bot_token)