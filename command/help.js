const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
    .setTitle(`Kumi's Utilities help`)
	.setDescription('My prefix is `>`')
    .addFields(
		{ name: '`>faq`', value: 'Show **FAQ**', inline: true },
		{ name: '`>website`', value: 'Show website update channel', inline: true },
	)
const noname = new MessageEmbed()
    .setDescription(`Help command is in your dm | <@!890191209954443264>`)

module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'help')) {
            message.author.send({ embeds: [info] });
            message.channel.send({ embeds: [noname] });
        }          
    })

}