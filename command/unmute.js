const command = require('./command') 
const { Permissions } = require('discord.js');
module.exports = (client) => {
  command(client, 'unmute', (message) => {
    const { member, mentions } = message

    if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        console.log(message.author.username,' useun  mute command');
        const tag = `<@${targetMember.id}>`
        message.delete();

        message.reply(`${tag} has been un muted,`)

        let verifyRole = message.guild.roles.cache.find(
          role => role.name === 'Muted'
      );
      let muteRole = message.guild.roles.cache.find(
        role => role.name === 'verify'
    );

    
        targetMember.roles.remove(verifyRole);
        targetMember.roles.add(muteRole);
      } else {
        message.reply(`Please tag someone to un muted.`)
      }
    } else {
        message.delete();
        message.author.send(
        `You do not have any permission to use un mute command in kumi sever.`
      )
    }
  })
}