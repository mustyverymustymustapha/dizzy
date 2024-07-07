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

client.on("messageCreate", message => {
    if(message.content === "!hackclub") {
    message.channel.send("hackclub is a non-profit from vermont, usa that hosts events based on coding, engineering and all sorts of things!")
    }
})

client.on("messageCreate", message => {
    if(message.content === "cat") {
    message.channel.send("meow :3")
    }
})

client.on("messageCreate", message => {
    if(message.content === "!help") {
    message.channel.send("dm me for questions")
    }
})

client.on("messageCreate", message => {
    if(message.content === "stackoverflow") {
    message.channel.send("stackoverflow.com")
    }
})

client.on("messageCreate", message => {
    if(message.content === "!lol") {
    message.channel.send("yay!")
    }
})

client.login(token);