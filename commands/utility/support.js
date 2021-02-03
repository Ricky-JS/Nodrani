const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "support",
code: `
$title[Need Help?]
$description[We are so sorry you need help with our bot.
Here are a few tips:

**Use $getServerVar[prefix]help**
Our help command will give you more info on Nodrani!

**Support Server**
If you really feel you need more help. Contact a dev in our {hyper:Support Server:https://discord.gg/FyY5zCn}]
$footer[Nodrani | Support;$authorAvatar[webp;true;1024]]


${mode}
`});