const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('🖥️ see update form us at <#884435292541575248> also you can contribute on github and it will show on <#887327669451120681>')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content.startsWith( prefix + 'website')) {
            message.reply({ embeds: [info] });
        }          
    })

}