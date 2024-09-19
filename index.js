const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
    readyStatus: false,
    checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

client.on('ready', async () => {
    console.clear();
    console.log(`${client.user.tag} - rich presence started!`);

    const r = new Discord.RichPresence()
        .setApplicationId('1286273907174805504')
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

client.login(process.env.TOKEN);












