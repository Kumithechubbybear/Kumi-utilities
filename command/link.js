module.exports = (client) => {
    client.on('message', (message) => {

        const msg = message.content.toLowerCase();


        if (
            msg.includes('https://')
            
            ) {
            if (message.channel.id === '884446016370270269') {
                message.delete();

            }      
        }  
    })

}