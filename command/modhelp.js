const command = require('./command') 
const { Permissions , MessageEmbed } = require('discord.js');

module.exports = (client) => {
  command(client, 'mhelp', (message) => {
    const { member, mentions } = message
    const send = new MessageEmbed()
    .setTitle('Mod help')
    .setDescription('My prefix is `>`')
    .addFields(
		{ name: '`>kick`', value: 'Kick people', inline: true },
		{ name: '`>ban`', value: 'Ban people', inline: true },
        { name: '`>mute`', value: 'Mute people', inline: true },
        { name: '`>unmute`', value: 'Un mute people', inline: true },
        { name: '`>warn`', value: 'Warn people', inline: true },
	)


    if (
        member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
    ) {
            const taggy = `<@${message.author.id}>`
            const noname = new MessageEmbed()
                .setDescription(`${taggy} Mod help command is in your dm | >mhelp`)

        message.channel.send({ embeds: [noname] });
        message.author.send({ embeds: [send] });

        message.delete();
    } else {
        message.delete();
        const nonamme = new MessageEmbed()
        .setDescription(`${taggy} You don't have permission to use this command | >mhelp`)

message.author.send({ embeds: [nonamme] });
    }
  })
}