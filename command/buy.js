const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;




module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===(prefix +  'buyproduct')) {
            if (message.channel.id === '887243007710068737') {
                message.delete();
                const target = new MessageEmbed()
                	.setDescription(`<@${message.author.id}> Go to <#887238341035175956> | >buyproduct`)
                    message.channel.send({ embeds: [target] });

            } else {
                message.delete();
            }       
        } else if(message.channel.id === '887243007710068737') {
            message.delete();
        }  
    })

}
