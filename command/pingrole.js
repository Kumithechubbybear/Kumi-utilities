const pre = '!'


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===(pre +  'websiterole')) {
            if (message.channel.id === '893443505869955092') {
                message.delete();
                let muteRole = message.guild.roles.cache.find(
                  role => role.name === 'Web update ping'
              );
          
                  message.member.roles.add(muteRole);
                message.author.send('**Web update ping** role just added to you')
            } else {
                message.delete();
            }       
        } else {
            message.delete();
        }         
    })


    client.on('message', (message) => {
        if (message.content ===(pre +  'promotionrole')) {
            if (message.channel.id === '893443505869955092') {
                message.delete();
                let promotion = message.guild.roles.cache.find(
                    role => role.name === 'Promotion ping'
                );
            
                    message.member.roles.add(promotion);
                message.author.send('**Promotion ping** role just added to you')
            } else {
                message.delete();
            }       
        } else {
            message.delete();
        }     
    })

}
