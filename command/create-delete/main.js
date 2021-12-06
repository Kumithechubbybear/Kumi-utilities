require('dotenv').config();
const prefix = process.env.PREFIX;

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