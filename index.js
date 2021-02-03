const discordScript = require("discordbot-script");
let bot = new discordScript({
  token: process.env.TOKEN,
  prefix: [process.env.PREFIX1, process.env.PREFIX2, process.env.PREFIX3]
})
bot.MessageEvent()
bot.Status({
        0: {
            description: "Your Commands | Nodrani 1.1", 
            type: "LISTENING" 
        }, 
        1: {
            description: "$serverCount Guilds!", 
            type: "WATCHING" 
        },
        2: {
            description: "Development Shutdown, Stopping Bot January 3rd 2021!",
            type: "PLAYING"
        },
    }, 20000)
bot.Variables({
  devSwitch: "enabled",
  dev1: "672215920558604332",
  dev2: "584667139974365185",
  prefix: "nd!",
  Muted: "Undefined",
  logs: "Undfined",
  version: "1.1 BETA RELEASE",
  snipes: "Nodrani can't snipe anything, *yet*.",
  user: "710571521172832336",
  antilink: "Disabled",
  warns: 0,
  wchannel: "Undefined",
  wmessage: "Welcome to **{server}**, {user}!",
})
//---THESE ARE THE FUNCTIONS---
bot.ReadyCommand({
name: "763121787520811008",
code: `<@$client[id]> has restarted
`})
bot.MessageDeleteCommand({
name: "$channelID[]",
code: `
$setChannelVar[snipes;$replaceText[$replaceText[$message[];a2008A;];a2008E;]]
$setChannelVar[user;$authorID]
$onlyIf[$guildID!=;]
`})
bot.onMessageDelete()

bot.ExecutableCommand({
name: "antilink-on",
code: `
$setServerVar[antilink;Enabled]
$title[Anti-Link | Enabled]
$description[
You've enabled Anti-Link!!

Users will no longer be able to send links.
(Users with \`MANAGE_MESSAGES\` aren't affected)]
$footer[Anti-Link Enabled | $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.ExecutableCommand({
name: "antilink-off",
code: `
$setServerVar[antilink;Disabled]
$title[Anti-Link | Disabled]
$description[
You've Disabled Anti-Link!

Users are now able to send links.]
$footer[Anti-Link Disabled | $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.SpaceCommand({
name: "antilink",
code: `
$setUserVar[warns;$sum[$getUserVar[warns];1]]
**<@!$authorID>, <a:alert:763103278556381214> ALERT ALERT <a:alert:763103278556381214>**
$title[ANTI-LINK DETECTION ALERT]
$description[
**YOU HAVE BEEN CAUGHT SENDING LINKS IN THIS SERVER!**

Anti-Link is enabled for this server. Therefore you cannot send links.
\`1 warning has been added to your account\`]
$color[$random[00000;99999]]
$deletecommand[1ms]
$onlyIf[$hasPerm[$authorID;managemessages]==false;]
$onlyIf[$getServerVar[antilink]==Enabled;]
$onlyIfMessageContains[https://;www.;.com;.ca;.xyz;.gg;discord.com;discord.gg;youtube.com;]
`})
bot.ExecutableCommand({
name: "wchannel",
code: `
$setServerVar[wchannel;$mentionedChannels[1]]
$title[Welcome Channel Set]
$description[
You've successfully set the Welcome channel to <#$mentionedChannels[1]>!]
$footer[Welcome Channel | Set by $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.ExecutableCommand({
name: "wmessage",
code: `
$setServerVar[wmessage;$messageSlice[>1]]
$title[Welcome Message Set]
$description[
You've successfully set the Welcome Message to \`$messageSlice[>1]\`!]
$footer[Welcome Message | Set by $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]
`})
bot.JoinedCommand({
name: "$getServerVar[wchannel]",
code: `
$replaceText[$replaceText[$replaceText[$replaceText[$getServerVar[wmessage];{server};$serverName[$guildID]];{user};<@!$authorID>];{username};$username[$authorID]#$discriminator[$authorID]];{joined};$creationDate[$authorID]]

$onlyIf[$getServerVar[wchannel]!=Undefined;]
`})
bot.onJoined()
bot.ExecutableCommand({
name: "about",
code: `
$title[Nodrani v$getVar[version] | About]
$description[

**__What Is Nodrani__**
Nodrani is just another multipurpose bot; Moderation, Utility, Fun, So much to do!

**__Theres.... A BUG__**
WHAT?! EMERGENCY EMERGENCY!!!!
Haha, Please make sure to report ALL bugs using $getServerVar[prefix]bug
(We may hand out a special role in the support server)

**__Links__**
{hyper:My Developers:https://www.twitter.com/qazar____}
{hyper:Support Server:https://discord.gg/FyY5zCn}
{hyper:Invite Me!:https://discord.com/oauth2/authorize?client_id=710571521172832336&scope=bot&permissions=201714919}
]
`})
bot.ExecutableCommand({
name: "moderation",
code: `
$title[Nodrani v$getVar[version] | Moderation]
$description[
$getServerVar[prefix]ban  - Bans provided user
$getServerVar[prefix]unban  - Unbans provided user
$getServerVar[prefix]mute  -  Mutes provided user
$getServerVar[prefix]unmute  -  Unmutes provided user
$getServerVar[prefix]kick  -  Kicks provided user
$getServerVar[prefix]logs  -  Define a Logging Channel
$getServerVar[prefix]clear  - Purge the chat (1-500)
$getServerVar[prefix]antilink  -  Enables/Disabled Anti-Link]
`})
bot.ExecutableCommand({
name: "utility",
code: `
$title[Nodrani v$getVar[version]]
$description[
$getServerVar[prefix]help  -  Provides help modules
$getServerVar[prefix]avatar  -  Provids your/mentioned users avatar
$getServerVar[prefix]userinfo -  Provides your/mentioned user info
$getServerVar[prefix]support  -  Provides ways to get help with Nodrani
$getServerVar[prefix]ping  -  Provides bot Latency
$getServerVar[prefix]snipe  -  Snipes most recent deleted message
]
`})
bot.ExecutableCommand({
name: "custom",
code: `
$title[Nodrani v$getVar[version] | Custom]
$description[
$getServerVar[prefix]prefix  -  Allows you to change prefix
$getServerVar[prefix]welcomer  -  Config the welcomer module

**THIS MODULE ISN'T FINISHED, MORE COMMANDS SOON!**]
`})
bot.ExecutableCommand({
name: "fun",
code: `
$title[Nodrani v$getVar[version] | Fun]
$description[
$getServerVar[prefix]say  -  Says the message you provide
$getServerVar[prefix]embed  -  Turns your message into an embed
$getServerVar[prefix]8ball  -  Yes
$getServerVar[prefix]image  -  Turns your works into an image (Supreme API)
$getServerVar[prefix]rps  -  Rock, Paper, Scissors
$getServerVar[prefix]twitter  -  Search Twitter
$getServerVar[prefix]youtube  -  Search YouTube
$getServerVar[prefix]google  -  Search Google
$getServerVar[prefix]coinflip  -  Heads, or tails?
]
`})
//this is if a role is mentioned..
bot.ExecutableCommand({
name: "say",
code: `
$replaceText[$replaceText[$replaceText[$message[];$mentionedRoles[1];**$roleName[$findRole[$mentionedRoles[1]]]**];<@&; ];>; ]
`})



//COMMAND HANDLER
const fs = require('fs');
const {
    notDeepEqual
} = require("assert");
const {
    time
} = require("console");
const folders = fs.readdirSync("./commands/")

for (const files of folders) {
    const folder = fs.readdirSync(`./commands/${files}/`).filter(file => file.endsWith(".js"))

    for (const commands of folder) {
        const command = require(`./commands/${files}/${commands}`)
        bot.Command({
            name: command.name,
            aliases: command.aliases,
            description: command.description,
            api: command.api,
            code: command.code,
        })
    }
}


bot.LoopCommand({
 name: "761976502682124329",
 code:`
<@672215920558604332> MAINTENACE MODE IS ON!
$useChannel[761976502682124329]
$onlyIf[$toLowercase[$getVar[devSwitch]]!=enabled;]
`
}, 30000)



//-----[ REBELPING STUFF ]-----//
const express = require('express')
const app = express()
app.listen(9000)
app.use(express.json())
app.use(express.static('./public'))

app.get('/', async (req, res) => {
    res.sendFile(__dirname + '/index.html')
});
//-----[ REBELPING STUFF ]-----//