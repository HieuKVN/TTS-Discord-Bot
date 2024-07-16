const { Client, Intents, MessageEmbed } = require('discord.js');
const { getAudioUrl } = require('google-tts-api');
const { EmbedBuilder } = require('discord.js');
const { joinVoiceChannel, createAudioPlayer, createAudioResource, AudioPlayerStatus } = require('@discordjs/voice');

const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_VOICE_STATES
    ],
});

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', message => {

    if (message.author.bot) return;
    const prefix = '>'; //PREFIX HERE
    if (!message.content.startsWith(prefix)) return;
    const args = message.content.slice(prefix.length).trim().split(' ');
    const command = args.shift().toLowerCase();
    if (command === '<') {
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
    let VoiceConnection = joinVoiceChannel({ channelId: channel.id, guildId: channel.guild.id, adapterCreator: channel.guild.voiceAdapterCreator });
    const resource = createAudioResource(audioURL);
    const player = createAudioPlayer();
    VoiceConnection.subscribe(player);
    player.play(resource);      }

});
client.login("TOKEN") //TOKEN HERE
