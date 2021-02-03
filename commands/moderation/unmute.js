const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "unmute",
code: `
$channelSendMessage[$getServerVar[logs];**__User Unmuted__**
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **
]

$takeRole[$mentioned[1];$getServerVar[Muted]]
$color[$random[00000;99999]]
$description[
<@$mentioned[1]> is successfully unmuted!
]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyIf[$getServerVar[Muted]!=Undefined;In order to mute, You must set a muted role. Use command \`$getServerVar[prefix]mset @role\`.]
$onlyIf[$message[2]!=;Use: $getServerVar[prefix]unmute <@user> <reason>]
$onlyIf[$mentioned[1]!=;Mention a user to be unmuted]
$onlyPerms[managemessages;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Manage Messages\`\`\`]


${mode}
`});