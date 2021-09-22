const command = require('./command') 
const { Permissions ,  MessageEmbed } = require('discord.js');

module.exports = (client) => {
  command(client, 'warn', (message) => {
    const { member, mentions } = message

    if (
        member.permissions.has(Permissions.FLAGS.BAN_MEMBERS)
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const tag = `<@${targetMember.id}>`
        const taggy = `<@${message.author.id}>`
        const warnEmbed = new MessageEmbed()
        .setDescription(`${tag} has been **warned** | Warn by ${taggy}`)
    
        message.channel.send({ embeds: [warnEmbed] });
      } else {
        message.reply(`Please tag someone to ban.`)
      }
    } else {
        message.delete();
      message.author.send(
        `You do not have any permission to use ban command in kumi server.`
      )
    }
  })
}