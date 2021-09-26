const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;
const tag = `<@${message.author.id}>`

// Kumi price in
// You can see more in kumi website
const price = new MessageEmbed()
    .setColor('#E74C3C')
    .setTitle('Price List')
    .addFields(
		{ name: `คุมิไรซ์บัตเตอร์บาล์ม`, value: '฿220.00', inline: true },
        { name: `สติ๊กเกอร์กันยุงคุมิ`, value: '฿130.00', inline: true },
		{ name: `คุมิมอซซี่สเปรย์`, value: '฿220.00', inline: true },
	)

const genprice = new MessageEmbed()
    .setDescription(`${tag} Kumi product price is in our DM | >kumiprice`)

const infoo = new MessageEmbed()
	.setDescription('Click [here](https://github.com/kumi-the-chubby-bear/) to show kumi github')



module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'kumiprice')) {
            message.author.send({ embeds: [price] });
            message.channel.send({ embeds: [genprice] });
            message.react('🛍️');
        }          
    })
    client.on('message', (message) => {
        if (message.content.startsWith(prefix + 'github')) {
            const infooo = new MessageEmbed()
	.setDescription(`<@${message.author.id}> kumi github link was send to you in DM | >github `)
    message.delete()
            message.channel.send({ embeds: [infooo] });
            message.author.send({ embeds: [infoo] });
        }          
    })
}