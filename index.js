const Discord = require("discord.js")
const client = new Discord.Client();
const prefix = "+";
client.on("ready",message => {
    conosle.log("I am ready to Go");
    
});


client.on("message" , message => {
    if(message.content === `${prefix}ping`) {
        message.channel.send(`🏓 pong - ${client.ws.ping}`)
    }
})
client.login("NzgwMzAwMTQ4NTYzMzc4MTg2.X7tFJA.jSCjT2gnj_u-JQCgoO8J5_cjeTg") 