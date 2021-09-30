const { MessageEmbed } = require('discord.js');
require('dotenv').config();
const prefix = process.env.PREFIX;

const info = new MessageEmbed()
	.setDescription('📰 You can read rules in <#884401760435834890> or use `>rules <rules number>`')

const rules1 = new MessageEmbed()
    .setTitle('Rules 1')
	.setDescription('**Do not organize, participate in, or encourage harassment of others.** Disagreements happen and are normal, but continuous, repetitive, or severe negative comments may cross the line into harassment and are not okay.')


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content === ( prefix + 'rules')) {
            message.reply({ embeds: [info] });
        }          
    })
    client.on('message', (message) => {
        if (message.content === ( prefix + 'rules 1')) {
            message.channel.send({ embeds: [rules1] });
        }          
    })
}