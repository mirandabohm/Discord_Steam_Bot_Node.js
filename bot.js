/** First draft authored on Tues Nov 16 19:06:00 2019
A Discord bot which checks and sets a status equal to a specified user's acti.
    @author: Upquark00
*/

var bot_token = require('./credentials')

// Open a Discord client session
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    // Define bot status and actions on startup
    client.user.setStatus('dnd', 'XXX);
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if(message.author.id === client.user.id) {
        // instruct bot to end function if it receives a message from itself.
        return;

    } else if (msg.content.startsWith('!hello')) {
        // Otherwise, if greeted by a message beginning with !hello, reply to the author
        msg.channel.send(`Hello ${msg.author}`);
    }
});

client.login(bot_token);
console.log(bot_token)