const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

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



const product = new MessageEmbed()
	.setDescription('Click [here](https://github.com/kumi-the-chubby-bear/) to show kumi github')



module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'kumiprice')) {


            const genprice = new MessageEmbed()
            .setDescription(`<@${message.author.id}> Kumi product price is in our DM | >kumiprice`)        

            message.author.send({ embeds: [price] });
            message.channel.send({ embeds: [genprice] });
            message.react('🛍️');
        }          
    })
    client.on('message', (message) => {
        if (message.content.startsWith(prefix + 'kumiproduct')) {


            const genproduct = new MessageEmbed()
            .setDescription(`<@${message.author.id}> Kumi product list is in our DM | >kumiproduct`)        
            message.channel.send({ embeds: [product] });
            message.author.send({ embeds: [genproduct] });
        }          
    })
}