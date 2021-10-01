const pre = '!'


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===(pre +  'websiterole')) {
            if (message.channel.id === '893443548375035955') {
                message.delete();
                let muteRole = message.guild.roles.cache.find(
                  role => role.name === 'Web update ping'
              );
          
                  message.member.roles.add(muteRole);
                message.author.send('**Web update ping** role just added to you')
            } else {
                message.delete();
                message.author.send('Use this command in <#893443548375035955>')
            }       
        }     
    })

    client.on('message', (message) => {
        if (message.content ===(pre +  'promotionrole')) {
            if (message.channel.id === '893443548375035955') {
                message.delete();
                let muteRole = message.guild.roles.cache.find(
                  role => role.name === 'Promotion ping'
              );
          
                  message.member.roles.add(muteRole);
                message.author.send('**Promotion ping** role just added to you')
            } else {
                message.delete();
                message.author.send('Use this command in <#893443548375035955>')
            }       
        }     
    })

}
