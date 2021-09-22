const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const faq = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Frequently Asked Questions (FAQ)')
	.setDescription('Here is command to show FAQ by number')
	.addFields(
		{ name: 'Inline field title', value: 'Some value here', inline: true },
		{ name: 'Inline field title', value: 'Some value here', inline: true },
	)


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'faq')) {
            message.reply({ embeds: [faq] });
        }          
    })
}