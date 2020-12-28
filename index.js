const Discord = require("discord.js");
const client = new Discord.Client();
const alexa = require("alexa-bot-api");
var chatbot = new alexa("aw2plm");

client.once("ready", () => {
  console.log("ChatBot online!");
  });
client.on("message", async message => {
  if (message.author.bot) return;
    let content = message.content;
      if(!content) return;
          chatbot.getReply(content).then(r => message.channel.send(r));
            });
client.login('NzkzMTIxODYxNDE1MzM3OTg1.X-nqSw.yrsb-sT8ro_jLlCYvFxI_lTj5KM')
