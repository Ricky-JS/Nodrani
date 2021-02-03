const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "embed",
code: `
$title[$splitText[1]]
$description[$splitText[2]]
$footer[$splitText[3] - $username[$authorID];$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$textSplit[$message[];+]
$onlyIf[$message[3]!=;Provide a Title & Description - \`Footer (optional)\`. {$getServerVar[prefix]embed (title) + (desc) + (footer (optional))]
$onlyIfMessageContains[$message[];+;Incorrect usage, use: $getServerVar[prefix]embed {title}+ {desc}+ {footer (optional)}]


${mode}
`});