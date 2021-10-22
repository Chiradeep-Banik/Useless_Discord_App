import { config } from 'dotenv';
import { Client, ClientOptions, Intents } from 'discord.js'
config();

var token = process.env['BOT_TOKEN'] as string;

var client = new Client({  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
    Intents.FLAGS.GUILD_VOICE_STATES,
  ],} as ClientOptions);

client.once("ready", () => { 
	console.log("Ready!");
});

client.login(token).then(()=>{
    console.log("Logged in !!")
}).catch(()=>{
    console.log("Unable to login");
});

client.on("messageCreate", (message) => {
    if(message.content === "pickup"){
        message.reply("Shibu  da");
    }
    if(message.content === "chatamata"){
        message.reply("Shibu  da kmn asos");
    }
});