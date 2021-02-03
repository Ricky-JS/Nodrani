module.exports = ({
  name: "mode",
  code: `
$setVar[devSwitch;$replaceText[$replaceText[$toLowercase[$message[1]];on;enabled];off;disabled]]

<@$client[id]> $replaceText[$replaceText[$toLowercase[$message[1]];on;is enabled];off;has been put in Maintenance Mode]!

$onlyIfMessageContains[on;off;{title:Current status}
{description:$replaceText[$replaceText[$getVar[devSwitch];enabled;Active!];disabled;Maintenance Mode!]}
{field:Usage:$getServerVar[prefix]mode <on/off>}
{field:Description:\`on\` = Enable the bot
\`off\` = Put in Maintenance Mode}
{footer:Developer command}
{color:RANDOM}]


$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`})