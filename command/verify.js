const pre = '!'


module.exports = (client) => {
    client.on('message', (message) => {
        if (message.content ===(pre +  'verify')) {
            if (message.channel.id === '884402231007408128') {
                message.delete();
                let verify = message.guild.roles.cache.find(
                  role => role.name === 'verify'
                );
          
                  message.member.roles.add(verify);
                message.author.send('You are **verify**, Congrats.')
            } else {
                message.delete();
            }       
        } else {
            message.delete();
        }     
    })

}
