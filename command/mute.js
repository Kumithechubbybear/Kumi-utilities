const command = require('./command') 
const { Permissions } = require('discord.js');
module.exports = (client) => {
  command(client, 'mute', (message) => {
    const { member, mentions } = message

    const tag = `<@${member.id}>`
    if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        console.log('Mute', message.author.username);
    let mutedRole = message.guild.roles.cache.find(
      role => role.name === 'Muted'
    );
    let defaultRole = message.guild.roles.cache.find(
      role => role.name === 'Member'
    );

    targetMember.roles.add(mutedRole);
    targetMember.roles.remove(defaultRole);


        message.reply(`That user has been muted,`)
      } else {
        message.reply(`Please tag someone to muted.`)
      }
    } else {
      message.reply(
        `You do not have any permission to use this command.`
      )
    }
  })
}