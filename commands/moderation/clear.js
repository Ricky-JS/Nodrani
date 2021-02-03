const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "clear",
code: `
$channelSendMessage[$getServerVar[logs];$message[] messages were purged in <#$channelID[]>. Action by <@$authorID>.]
$deletecommand[100ms]
$title[Successfully Purged Messages!]
$color[$random[00000;99999]]
$description[I have successfully deleted **$message[]** messages]
$footer[Successfully Cleared Messages!;$authorAvatar[webp;true;1024]]
$addTimestamp
$clear[$message[]]
$onlyPerms[managemessages;<:ND_Warning:710551408318873671> You need the \`Manage Messages\` permission to run this command!!]
$onlyIf[$message[]<101;You cannot delete over **100** messages]
$onlyIf[$message[]>1;You cannot clear less than 1 message]
$onlyIf[$message[]!=;You must add a number to delete!]
$onlyIf[$getServerVar[logs]!=Undefined;Uh Oh. It seeems there was an error. \`\`\`ERROR CODE A01: SERVER LOGS NOT SET {$getServerVar[prefix]logs}\`\`\`]


${mode}
`});