const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "logs",
code: `
$setServerVar[logs;$mentionedChannels[1]]
$title[Server Logging Channel]
$description[**$serverName[$guildID]**'s Logging channel has been set to <#$mentionedChannels[1]>!]
$footer[Nodrani | Logging Channel;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$addTimestamp
$onlyIf[$mentionedChannels[1]!=;You must mention a channel.]
$onlyPerms[managechannels;You're missing the required permissions. \`\`\`Manage Channels\`\`\`]


${mode}
`});