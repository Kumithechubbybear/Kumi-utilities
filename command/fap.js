const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const faq = new MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Frequently Asked Questions (FAQ)')
	.setDescription('Here is command to show FAQ by number')
	.addFields(
		{ name: `>faq1`, value: 'What is kumi?', inline: true },
	)

const faq1 = new MessageEmbed()
    .setAuthor('Question 1')
	.setColor('#0099ff')
	.setTitle('What is kumi?')
	.setDescription(`The Kumi brand was founded and launched the first product in August 2019 through collaboration. between pediatric allergists and chemists who want to develop natural, gentle mosquito repellent products... Read more at <#890078089072242689>`)


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'faq')) {
            message.reply({ embeds: [faq] });
        }          
    })

    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'faq1')) {
            message.reply({ embeds: [faq1] });
        }          
    })
}