module.exports = (client) => {
    client.on('message', async message => {
    
      const msg = message.content.toLowerCase();
      const { MessageEmbed } = require('discord.js');
      const tag = `<@${message.author.id}>`
      const reply = new MessageEmbed()
          .setDescription(`${tag} has been warned because use BADWORD `)
   
          
      if (
        msg.includes('หี') ||
        msg.includes('ควย') ||
        msg.includes('เหี้ย') ||
        msg.includes('สัส') ||
        msg.includes('หน้าหี') ||
        msg.includes('ไอสัส') ||
        msg.includes('ไอเหี้ย') ||
        msg.includes('เสือก') ||
        msg.includes('fucker') ||
        msg.includes('fuck') ||
        msg.includes('bitch') ||
        msg.includes('dick') ||
        msg.includes('pussy') ||
        msg.includes('shit') ||
        msg.includes('vagina') ||
        msg.includes('HEE')
    
      ) {

        message.delete();
        message.channel.send({ embeds: [reply] });
      }
    });
    }