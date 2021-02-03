const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "rps",
code: `
$title[Rock, Paper, Scissors!]
$description[
$addField[$username[$authorID] Selected;$message[]] 
$addField[Nodrani Selected;$randomText[Rock;Paper;Scissors!]]
]
$footer[Rock Paper Scissors | nd!rps;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$checkCondition[$toLowercase[$message[1]]==rock]$checkCondition[$toLowercase[$message[1]]==paper]$checkCondition[$toLowercase[$message[1]]==scissors]!=falsefalsefalse;You can only say one of the **3** items in the ACTUAL GAME!! Now pick **rock, paper, or scissors**.]


${mode}
`});