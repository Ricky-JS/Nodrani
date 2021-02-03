const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "snipe",
code: `
$title[$username[$getChannelVar[user]]#$discriminator[$getChannelVar[user]]]
$description[$getChannelVar[snipes]]
$addTimestamp
$thumbnail[$userAvatar[$getChannelVar[user]]]
$footer[Sniped by: $username[$authorID]#$discriminator[$authorID];$userAvatar[$authorID]]


${mode}
`});
