const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "unban",
code: `
$channelSendMessage[$getServerVar[logs];**__User Unbanned__**
Username: $username[$message[1]]#$discriminator[$message[1]]
User ID: $message[1]
Action By: $username[$authorID]#$discriminator[$authorID]
Reason:** $message[2] **
]
**<@$message[1]>** has been unbanned!

$unban[$message[1]]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]
$onlyPerms[ban;<:ND_Warning:710551408318873671> Uh Oh. You don't have the permissions to use this command. \`\`\`Ban Members\`\`\`]
$onlyIf[$userExists[$message[1]]==true;This user ID is invalid.]
$onlyIf[$message[2]!=;**Incorrect Arugments** {$getServerVar[prefix]unban <userID> <reason>}]


${mode}
`});