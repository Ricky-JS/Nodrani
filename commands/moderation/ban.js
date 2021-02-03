const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "ban",
code: `
$channelSendMessage[$getServerVar[logs];**__User Banned__**
Username: $username[$mentioned[1]]#$discriminator[$mentioned[1]]
User ID: $mentioned[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $noMentionMessage[] **
]
**$username[$mentioned[1]]** has been banned!

$ban[$mentioned[1];$noMentionMessage[] - Action by $username[$authorID]#$discriminator[$authorID]]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyPerms[ban;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Ban Members\`\`\`]
$onlyIf[$message[2]!=;**Incorrect Arguments** {$getServerVar[prefix]ban <@user> <reason>}]
$suppressErrors[<:xmark:761828801474723870> I could not ban that user.]
$onlyIf[$mentioned[1]!=;Try mentioning someone.]


${mode}
`});