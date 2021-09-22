// import discord.js
const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES" ,"GUILD_BANS","GUILD_EMOJIS_AND_STICKERS"] })

const prefix = process.env.PREFIX;
const mute = require('./command/mute')
const unmute = require('./command/unmute')
const kick = require('./command/kick')


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setPresence({ activities: [{ name: 'activity' }], status: 'online' });
  client.user.setActivity('Kumi guys', { type: 'WATCHING' });
  mute(client)
  unmute(client)
  kick(client)
});

client.login();