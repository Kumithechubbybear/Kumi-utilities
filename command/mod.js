const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('If we need more mod we will post on <#884402109821374514>')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'mod')) {
            message.delete();
            message.author.send({ embeds: [info] });
        }          
    })

}