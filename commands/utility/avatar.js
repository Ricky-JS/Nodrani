const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "avatar",
code: `
$title[Avatar for $username[$mentioned[1;yes]]#$discriminator[$mentioned[1;yes]]]
$image[$userAvatar[$mentioned[1;yes]]]
$color[$random[00000;99999]]
$footer[Avatar of $username[$mentioned[1;yes]];$userAvatar[$mentioned[1;yes]]]


${mode}
`});