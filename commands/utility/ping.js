const {mode} = require('../../Strings/dev.json');

module.exports = ({
name:"ping",
code: `
$title[API Latency (ping)]
$description[Nodrani's current latency is **$ping**ms]
$footer[Nodrani's calculated API Latency;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]


${mode}
`});