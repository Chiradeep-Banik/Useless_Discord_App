import { config } from 'dotenv';
import { Client, ClientOptions, Intents } from 'discord.js'
config();
import { createServer } from 'http'; 

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

var server = createServer();

var port = process.env['PORT'] as string;
server.listen(port,()=>{
    console.log(`Server started on port ${port}`);
});