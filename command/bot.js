const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('ℹ️ Information about bot click [here](https://example.com/)')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'bot')) {
            message.reply({ embeds: [info] });
        }          
    })

}