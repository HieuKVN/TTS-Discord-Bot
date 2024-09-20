const config = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');
const { getAudioUrl } = require('@sefinek/google-tts-api');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildVoiceStates,
    GatewayIntentBits.MessageContent,
  ],
});

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {
  if (message.author.bot) return;
  const prefix = config.PREFIX;
  if (!message.content.startsWith(prefix)) return;
  const args = message.content.slice(prefix.length).trim().split(' ');
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong!');
  }

  if (command === 'speak') {
    if (isSpeaking) return message.channel.send('The bot is already speaking!');
    const { channel } = message.member.voice;
    if (!args[0]) return message.channel.send('Please type something for the bot to say!');
    if (!channel) return message.reply('You must be in the voice room to use this command!');
    const string = args.join(' ');
    if (string.length > 200) return message.channel.send('Please enter less than 200 characters');
    const audioURL = getAudioUrl(string, {
      lang: 'vi',
      slow: false,
      host: 'https://translate.google.com',
      timeout: 10000,
    });
    const VoiceConnection = joinVoiceChannel({
      channelId: channel.id,
      guildId: channel.guild.id,
      adapterCreator: channel.guild.voiceAdapterCreator,
    });
    const resource = createAudioResource(audioURL);
    const player = createAudioPlayer();
    VoiceConnection.subscribe(player);
    player.play(resource);

    message.channel.send(`${message.author.username} say: "${string}"`);
  }
});

client.login(config.TOKEN);
