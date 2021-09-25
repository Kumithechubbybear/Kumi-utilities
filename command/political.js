module.exports = (client) => {
    client.on('message', async message => {
    
      const msg = message.content.toLowerCase();
      const { MessageEmbed } = require('discord.js');
      const tag = `<@${message.author.id}>`
      const reply = new MessageEmbed()
          .setDescription(`${tag} has been warned because use POLITICAL WORD `)
   
          
      if (
        msg.includes('prayut') 
    
      ) {

        message.delete();
        message.channel.send({ embeds: [reply] });
      }
    });
    }