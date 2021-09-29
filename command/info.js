const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('ℹ️ Information about server please go to <#884401760435834890>')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'info')) {
            message.reply({ embeds: [info] });
        }          
    })

}