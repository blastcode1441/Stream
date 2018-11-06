const Discord = require('discord.js');
const client = new Discord.Client();
const A7MD = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});










A7MD.on("guildMemberAdd", member => {
  member.createDM().then(function (channel) {
  return channel.send(` 
**
السلام وعليكم و رحمة الله بركاته
 افضل سيرفر لبيع حسابات ماين كرافت و تاقات ديسكورد و كل شي رخيص مرا
                             https://discord.gg/jhyNtsg
اتمني انك تدخله ... [ ${member}  ]
**`) 
}).catch(console.error)
})
A7MD.login('BOT_TOKEN');
