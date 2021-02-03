const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "help",
code: `
:warning: **BOT SHUTTING DOWN SOON, CHECK SUPPORT SERVER** :warning:
$title[Nodrani Modules]
$description[
Welcome to Nodrani v$getVar[version], **$username[$authorID]!**

**Use the following Modules for help**

\`$getServerVar[prefix]help about\`  -  About Nodrani
\`$getServerVar[prefix]help moderation\`  -  Provides Moderation Module
\`$getServerVar[prefix]help utility\`  -  Provides Utility Module
\`$getServerVar[prefix]help custom\` Provides Customizable Module
\`$getServerVar[prefix]help fun\`  -  Provides Fun Module
]
$footer[Nodrani | Help Modules;$authorAvatar[webp;true;1024]]
$addTimestamp
$color[$random[00000;99999]]
$onlyIf[$message[1]!=about;{execute:about}]
$onlyIf[$message[1]!=moderation;{execute:moderation}]
$onlyIf[$message[1]!=custom;{execute:custom}]
$onlyIf[$message[1]!=utility;{execute:utility}]
$onlyIf[$message[1]!=fun;{execute:fun}]


${mode}
`});