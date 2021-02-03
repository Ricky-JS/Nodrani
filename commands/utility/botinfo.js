const {mode} = require('../../Strings/dev.json');

module.exports = ({
 name: "botinfo",
 aliases: ["bot", "info"],
 code: `
$title[Nodrani v$getVar[version] | General Information]
$description[
$addField[Developers;{hyper:QAZAЯ Productions:https://www.twitter.com/qazar____};yes]
$addField[Server Count;$serverCount;yes]
$addField[Usage;$memory mb;yes]
$addField[MemberCount;$allMembersCount;yes]
$addField[Version;$getVar[version];yes]
$addField[Ping;$ping ms;yes]
$addField[Prefix;$getServerVar[prefix];yes]
]
$footer[General Info;$authorAvatar[webp;true;1024]]


${mode}
`});