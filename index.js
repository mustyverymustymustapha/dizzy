const Discord = require('discord.js')
const client = new Discord.Client({ intents: [
  Discord.GatewayIntentBits.Guilds,
  Discord.GatewayIntentBits.GuildMessages
]})
const token = process.env.token

client.on('ready', () => {
  console.log("its working");
  console.log(client.user.username);
});

client.on('message', msg => {
    if (msg.author.id !== client.user.id) {
        msg.channel.send(msg.content.split('').reverse().join(''));
    }
});

client.on("messageCreate", message => {
    if(message.content === "!test") {
    message.channel.send("received!")
    }
})

client.login(token);