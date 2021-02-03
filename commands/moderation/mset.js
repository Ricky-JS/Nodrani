const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "mset",
code: `
$setServerVar[Muted;$mentionedRoles[1]]
$title[Muted Role Set]
$description[You have set <@&$mentionedRoles[1]> as your servers mute role. When using Nodrani's mute command. That role will be given!]
$footer[Set Muted Role!;$authorAvatar[webp;true;1024]]
$color[$random[00000;99999]]
$onlyIf[$mentionedRoles[1]!=;You **must** mention a role]
$onlyPerms[manageroles;Uh Oh. You don't have permission to use this command. \`\`\`Manage Roles\`\`\`]


${mode}
`});