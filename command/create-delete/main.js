require('dotenv').config();
const prefix = process.env.PREFIX;
const command = require('../command') 
const { Permissions } = require('discord.js');

module.exports = (client) => {
    command(client, 'create', (message) => {
      const { member, mentions } = message
  
      if (
          member.permissions.has(Permissions.FLAGS.ADMINISTER)
      ) {
        const target = mentions.users.first()
        if (target) {
          message.guild.channels.create(`channel`, { 
            type: 'text', 
            permissionOverwrites: [{ 
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
        });
        message.channel.send("Channel Created!")
        } else {
          message.reply(`IDK`)
        }
      } else {
          message.delete();
        message.author.send(
          `You do not have any permission to create channel`
        )
      }
    })
  }