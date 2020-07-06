const Discord = require('discord.js');
const MessageHandler = require('./MessageHandler');

const client = new Discord.Client();
const messageHandler = new MessageHandler();
const token = process.env.TOKEN;

client.login(token)
    .catch(console.error);

client.on('ready', () => {
    console.log('ready!');
});

client.on('message', messageHandler.handle);