// import discord.js
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES" ,"GUILD_BANS","GUILD_EMOJIS_AND_STICKERS"] })

const prefix = process.env.PREFIX;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', message => {
    if (message.content.startsWith(prefix + 'hello')) {
        message.reply('Hello!');
      }
});

client.login();