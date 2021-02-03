module.exports = ({
name: "leave", 
code: `
$botLeave[$message[1]]
$suppressErrors[Failed to leave..]
$onlyIf[$message[1]!=;Mention a guild ID!]
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});