module.exports = ({
name: "stop",
code: `

$djsEval[process.exit()]
Shutting Down...
$onlyForUsers[$getVar[dev1];$getVar[dev2];**Developer command**]
`});