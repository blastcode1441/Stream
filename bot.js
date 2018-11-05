const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("guildMemberAdd", member => {
    member.createDM().then(function (channel) {
        return channel.send(`:rose:  ولكم نورت السيرفر :rose: 
        https://discord.gg/hfpFfDf  
        انت العضو رقم ${member.guild.memberCount} `) 
    }).catch(console.error)
})


client.login(process.env.BOT_TOKEN);
