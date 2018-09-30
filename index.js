// //Link to invite SamBot with required permissions - https://discordapp.com/api/oauth2/authorize?client_id=494477057867251745&scope=bot&permissions=3537984

const Discord = require('discord.js-commando');
const Music = require('discord.js-musicbot-addon');
// const MultiGuildPlayer = require('discord-playlist/discord-playlist').MultiGuildPlayer;
const config = require('./config.json');
const client = new Discord.Client();

// This allows Admin to customize cmd prefix (!prefix [Your Custom Prefix])
// client.on("message", async message => {
//   if(message.author.client) return;
//   if(message.channel.type === "dm") return;

//   let prefixes = JSON.parse(fs.readFileSynv("./prefixes.json", "utf8"));

//   if(!prefixes[mesage.guild.id]){
//     prefixes[message.guild.id] = {
//       prefixes: botconfig.prefix
//     };
//   }

//   let prefix = prefixes[mesasge.guild.id].prefixes;
//   console.log(prefix);
// });

const cPrefix = "s!";

client.on("message", (message) => {

  if (!message.content.startsWith(cPrefix) || message.author.bot) return;

  if (message.content.startsWith(cPrefix + "ping")) {

    message.channel.send("pong!");

  } else

  if (message.content.startsWith(cPrefix + "foo")) {

    message.channel.send("bar!");

  }

});

client.registry.registerGroup('simple', 'Simple');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname + '/commands/');

Music.start(client, {
  youtubeKey: config.youtubeKey,
  enableQueueStat: true,
  prefix: 's!',
  // clearInvoker: true,
  maxQueueSize: '200',
  embedColor: 'Yellow',
  anyoneCanLeave: true,
  requesterName: true,
  // disableLeave: true,
  clearOnLeave: true,
  npCmd: 'nowplaying'
});

// console.log('');

client.login(config.token);

client.on('ready', () => console.log('SamBot is Ready!'));
