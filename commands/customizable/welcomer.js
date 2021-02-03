const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "welcomer",
code: `
$title[Welcomer]
$description[
Here is the configuration settings for Welcome Channel/Messages

**Current Settings**
Channel: $replaceText[$replaceText[$checkCondition[$getServerVar[wchannel]==Undefined];true;No Channel Set];false;<#$getServerVar[wchannel]>]
Message: \`$getServerVar[wmessage]\`

**Configuration**
$getServerVar[prefix]welcomer message <message>  -  Sets the welcome message.
$getServerVar[prefix]welcomer channel <channel> -  Sets the welcome channel.

**Functions**
These are the functions you can use when setting welcome message
{user}  -  Mentions the User
{server} - Provides Server Name
{username} - Gives username and discriminator
{joined} - Provides Account Creation Date]
$footer[Nodrani | Welcome Configuration;$authorAvatar[png;true;1024]]
$onlyIf[$message[1]!=message;{execute:wmessage}]
$onlyIf[$message[1]!=channel;{execute:wchannel}]
$onlyPerms[managemessages;<:xmark:761828801474723870> You do  not have permission to run this command.]

${mode}
`});