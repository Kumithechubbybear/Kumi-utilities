const { MessageEmbed, Permissions } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;
const command = require('./command') 

const info = new MessageEmbed()
    .setTitle(`Kumi's Utilities help`)
	.setDescription('My prefix is `>`')
    .addFields(
		{ name: '`>faq`', value: 'Show **FAQ**', inline: true },
		{ name: '`>website`', value: 'Show website update channel', inline: true },
        { name: '`>joke`', value: 'Random joke', inline: true },
        { name: '`>info`', value: 'Show info about server', inline: true },
        { name: '`>website`', value: 'Show info about website', inline: true },
        { name: '`>kumiweb`', value: 'Show kumi website', inline: true },
	)

module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'help')) {
            const taggy = `<@${message.author.id}>`
            const noname = new MessageEmbed()
                .setDescription(`${taggy} Help command is in your dm | >help`)

            message.delete();
            message.author.send({ embeds: [info] });
            message.channel.send({ embeds: [noname] });
        }          
    })

    
         

}