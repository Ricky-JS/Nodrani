const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "youtube",
code: `
$title[$username[$authorID] searched "$message[]"]
$color[$random[00000;99999]]
$description[{hyper:Here are the results for your search.:https://www.youtube.com/search?q=$replaceText[$message[]; ;+]}]
$footer[YouTube Search | $getServerVar[prefix]youtube;$authorAvatar[webp;true;1024]]
$onlyIf[$message[]!=;**You must type something to search it.**]


${mode}
`});