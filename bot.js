const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});


client.on('guildMemberAdd', member => {
    let channel = member.guild.channels.find('name', '♛『five』♛');
    let memberavatar = member.user.avatarURL
      if (!channel) return;
    let embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .setThumbnail(memberavatar)
        .addField('السلام وعليكم',`${member}`)
        .addField('تبي تشتري تاقات او حسابات او اي شي رخيص ؟`)
        .addField('🆔 | user :', "**[" + `${member.id}` + "]**" )
                .addField('https://discord.gg/hfpFfDf`)
               
                  .addField("Name:",`<@` + `${member.id}` + `>`, true)
                     
                                     .addField(' الـسيرفر', `${member.guild.name}`,true)
                                       
     .setFooter(`${member.guild.name}`)
        .setTimestamp()
   
      channel.sendEmbed(embed);
    });


client.login(process.env.BOT_TOKEN);
