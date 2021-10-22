"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
const discord_js_1 = require("discord.js");
(0, dotenv_1.config)();
var token = process.env['BOT_TOKEN'];
var client = new discord_js_1.Client({ intents: [
        discord_js_1.Intents.FLAGS.GUILDS,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGES,
        discord_js_1.Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        discord_js_1.Intents.FLAGS.GUILD_VOICE_STATES,
    ], });
client.once("ready", () => {
    console.log("Ready!");
});
client.login(token).then(() => {
    console.log("Logged in !!");
}).catch(() => {
    console.log("Unable to login");
});
client.on("messageCreate", (message) => {
    if (message.content === "pickup") {
        message.reply("Shibu  da");
    }
    if (message.content === "chatamata") {
        message.reply("Shibu  da kmn asos");
    }
});
