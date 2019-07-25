const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603898523414560770")
setInterval(function() {
channel.send(`سبااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااااام ناااااااااااااااااااااااااااااااااااااااااار`);
}, 30)
})

client.login(process.env.BOT_TOKEN);