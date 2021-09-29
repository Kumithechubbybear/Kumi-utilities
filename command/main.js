const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('Hi ,my prefix is `>` start to use bot with `>help`')

const infoo = new MessageEmbed()
	.setDescription('Click [here](https://github.com/kumi-the-chubby-bear/) to show kumi github')



module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===('<@!890191209954443264>')) {
            message.reply({ embeds: [info] });
            message.react('🔥');
        }          
    })
    client.on('message', (message) => {
        if (message.content ===(prefix + 'github')) {
            const infooo = new MessageEmbed()
	.setDescription(`<@${message.author.id}> kumi github link was send to you in DM | >github `)
    message.delete()
            message.channel.send({ embeds: [infooo] });
            message.author.send({ embeds: [infoo] });
        }          
    })
}