/* First draft authored on Tues Nov 16 19:06:00 2019
Intuitive bot that checks user status across multiple digital platforms.
    @author: Upquark00
*/

const Discord = require('discord.js');
const client = new Discord.Client()

client.on('ready', () => {
    console.log('Connected as ' + client.user.tag)
    }
    );

