const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('🖥️ see update form us at <#884435292541575248> also you can contribute on github and it will show on <#887327669451120681>')
const infoo = new MessageEmbed()
	.setDescription('🖥️ We send kumi website link in your DM')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===( prefix + 'website')) {
            message.reply({ embeds: [info] });
        }          
    })
    client.on('message', (message) => {
        if (message.content ===( prefix + 'kumiweb')) {
            message.reply({ embeds: [infoo] });
            message.author.send('https://kumithechubbybear.netlify.app/')
        }          
    })

}