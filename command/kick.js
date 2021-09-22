const command = require('./command') 
const { Permissions } = require('discord.js');

module.exports = (client) => {
  command(client, 'kick', (message) => {
    const { member, mentions } = message


    if (
        member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)
    ) {
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        const tag = `<@${targetMember.id}>`
        targetMember.kick()
        message.reply(`${tag} has kicked, BYE!`)
      } else {
        message.reply(`Please tag someone to kick.`)
      }
    } else {
        message.delete();
      message.author.send(
        `You do not have any permission to use kick command in kumi server.`
      )
    }
  })
}