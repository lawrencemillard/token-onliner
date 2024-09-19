const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false
});

// Keep the server alive
const keepAlive = require('./server.js');
keepAlive();

// Event listener when the bot is ready
client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId(process.env.TOKEN1) // Using TOKEN1 for Application ID
        .setType('WATCHING')
        .setURL('https://www.youtube.com/channel/UCYvGMEkXftp8u6El8HyVayw')
        .setState('Join Now')
        .setName('Lawrences Home')
        .setDetails(' Developer Home')
        .setAssetsLargeText('Visit this')
        .addButton('Discord Server', 'https://discord.gg/cMWvWUJv');

    client.user.setActivity(r);
    client.user.setPresence({ status: 'dnd' });
});

// Log in using the environment variable for TOKEN
client.login(process.env.TOKEN);
client.login(process.env.TOKEN1);

