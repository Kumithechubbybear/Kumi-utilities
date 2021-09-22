const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('Hi ,my prefix is `>` start to use bot with `>help`')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith('<@!890191209954443264>')) {
            message.reply({ embeds: [info] });
        }          
    })

}