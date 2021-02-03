const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "image",
code: `
$image[https://api.alexflipnote.dev/supreme?text=$replaceText[$message[]; ;+]]
$footer[Requested by $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$message[]!=;Provide a text for me to convert to an image]


${mode}
`});