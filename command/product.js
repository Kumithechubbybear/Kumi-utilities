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
    .setColor('#E74C3C')
    .setTitle('Product List')
    .setDescription('1.คุมิไรซ์บัตเตอร์บาล์ม 2.สติ๊กเกอร์กันยุงคุมิ 3.คุมิมอซซี่สเปรย์')



module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'kumiprice')) {


            const genprice = new MessageEmbed()
            .setDescription(`<@${message.author.id}> Kumi product price is in our DM | >kumiprice`)        

            message.author.send({ embeds: [price] });
            message.channel.send({ embeds: [genprice] });
            message.react('🛍️');
        }          
    })
    client.on('message', (message) => {
        if (message.content ===(prefix + 'kumiproduct')) {


            const genproduct = new MessageEmbed()
            .setDescription(`<@${message.author.id}> Kumi product list is in our DM | >kumiproduct`)        
            message.author.send({ embeds: [product] });
            message.channel.send({ embeds: [genproduct] });
            message.react('🛍️');

        }          
    })
}