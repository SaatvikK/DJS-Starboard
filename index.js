const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;

/*
NOTE: This will NOT work with images yet.
*/


//This is an "event listener". It searches for a specific "event" to occur and triggers the code underneath. 
//This event listener is checking for the event "messageReactionAdd", aka checking for when a reaction is added to a message.
client.on("messageReactionAdd", (reaction) => {
  starboardchnl = client.channels.cache.get('787092382373773343'); //The channel ID that we want to send Bundies to.
  if(reaction.emoji.name == "⭐") { //Checking for if the message has a specific reaction.
    if(reaction.count >= 1) { //Checking if the amount of reactions is >= 5.
      const author = reaction.message.author.id; //The user ID of the person who sent the message.
      const msg = reaction.message.content; //The message.
      const reactions = reaction.count; //The amount of stars it got.
      const desc = "**Author:**\n<@" + author + ">\n\n**Message:**\n" + msg + "\n\n**Bundies:**\n" + reactions;
      const footer = "The Gaming Crew";
      const colour = '#0099ff';


      //Sending a discord embed. This is what it will look like: https://cdn.discordapp.com/attachments/787088128271581204/787105598553456650/unknown.png
      const Embed = new Discord.MessageEmbed() 
      .setColor(colour)
      .setTitle("New Bundie!")
      .setDescription(desc)
      .setTimestamp()
      .setFooter(footer);
      starboardchnl.send(Embed);
    }
  }
});

client.login(token); //Bot logging into Discord.
