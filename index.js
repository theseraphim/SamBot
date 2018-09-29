//Link to invite SamBot with required permissions - https://discordapp.com/api/oauth2/authorize?client_id=494477057867251745&scope=bot&permissions=3537984

const Commando = require('discord.js-commando');
const Music = require('discord.js-musicbot-addon');
const MultiGuildPlayer = require('discord-playlist/discord-playlist').MultiGuildPlayer;
const bot = new Commando.Client();
const TOKEN = 'NDk0NDc3MDU3ODY3MjUxNzQ1.Do0GQA.Cfa9WQYcFQqif2jB7ZxJKnt2rTY';
//const ytdl = require('ytdl-core');

bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands/');

global.servers = {};

bot.on('message', function(message){
  if(message.content == 'Hello'){
    message.channel.sendMessage('Hello!');
  }
});

Music.start(bot, {
  youtubeKey: 'AIzaSyDNoH8g3hVzyQs_qWiwtwlFLj6Xv1Dt_dc',
  enableQueueStat: 'true',
  prefix: 'm!',
  //clearInvoker: 'true',
  maxQueueSize: '200',
  embedColor: 'Yellow',
  anyoneCanLeave: 'true'
});

bot.login(TOKEN);

bot.on('ready', () => console.log('SamBot is Ready!'));
