require('dotenv').config();
const prefix = process.env.PREFIX;
const command = require('../command') 
const { Permissions } = require('discord.js');

module.exports = (client) => {
  client.on('message',(message) => {
    if (message.content ===( prefix + 'create')) {
          message.guild.channels.create(`channel`, { 
            type: 'text', 
            permissionOverwrites: [{ 
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
        });
      }
  })
}