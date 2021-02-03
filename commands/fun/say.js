const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "say",
code: `
$replaceText[$replaceText[$message[];@everyone;<:ping:764555443594330212>];@here;<:ping:764555443594330212>]
$onlyIf[$message[]!=;Give me something to say.]
$cooldown[30s;You must wait **{time}** to use \`$getServerVar[prefix]say\`.]
$disableMentions

${mode}
`});