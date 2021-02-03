const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "mute",
code: `
$channelSendMessage[$getServerVar[logs];**__User Muted__**
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **
]
$giveRole[$mentioned[1];$getServerVar[Muted]]
$color[$random[00000;99999]]
$description[
<@$mentioned[1]> is successfully muted!
\`\`\`\Please remember: User may not be muted if there is a member role\`\`\`
]

$onlyIf[$getServerVar[Muted]!=Undefined;In order to mute, You must set a muted role. Use command \`$getServerVar[prefix]mset @role\`.]

$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyIf[$message[2]!=;Use: $getServerVar[prefix]mute <@user> <reason>]
$onlyIf[$mentioned[1]!=;Mention a user to be muted]
$onlyPerms[managemessages;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Manage Messages\`\`\`]


${mode}
`});