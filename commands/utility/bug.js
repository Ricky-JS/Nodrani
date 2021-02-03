const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "bug",
code: ` 
$title[BUG REPORTED]
$description[
$message[]]
$addCmdReactions[✅]
$useChannel[764550528390660116]
$onlyIf[$message[1]!=;Provide a bug]


${mode}
`});