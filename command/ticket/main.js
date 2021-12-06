require('dotenv').config();
const prefix = process.env.PREFIX;
module.exports = (client) => {
    client.on('message', (message) => {
     if (message.content ===( prefix + 'create')) {
        message.guild.channels.create(`ticket for ${message.author.username}`, { 
            parent: '866857262722056192',
            type: 'text', 
            permissionOverwrites: [{ 
                id: message.guild.id,
                allow: ['VIEW_CHANNEL'],
            }]
        });
        message.channel.send("Channel Created!")
    }})
}