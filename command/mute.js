const command = require('./command') 
const { Permissions , MessageEmbed } = require('discord.js');
module.exports = (client) => {
  command(client, 'mute', (message) => {
    const { member, mentions } = message
    const one = new MessageEmbed()
    .setDescription(`Please someone to mute`)

    if (member.permissions.has(Permissions.FLAGS.KICK_MEMBERS)){
      const target = mentions.users.first()
      if (target) {
        const targetMember = message.guild.members.cache.get(target.id)
        console.log(message.author.username,' use mute command');
        const tag = `<@${targetMember.id}>`
        const two = new MessageEmbed()
        .setDescription(`${tag} has been muted`)
        message.reply({ embeds: [two]})
        message.delete();
        let verifyRole = message.guild.roles.cache.find(
          role => role.name === 'verify'
      );
      let muteRole = message.guild.roles.cache.find(
        role => role.name === 'Muted'
    );

    
        targetMember.roles.remove(verifyRole);
        targetMember.roles.add(muteRole);
      } else {
        message.reply({ embeds: [one] });
      }
    } else {
        message.delete();
        message.author.send(
        `You do not have any permission to use mute command in kumi sever.`
      )
    }
  })
}