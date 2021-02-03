const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "userinfo",
code: `
**User info for $username[$mentioned[1;yes]]**
$title[Userinfo]
$description[
Username: $username[$mentioned[1;yes]]
Discriminator: #$discriminator[$mentioned[1;yes]]
User ID: $mentioned[1;yes]
Creation Date: $creationDate[$mentioned[1;yes]]
Nickname: $nickname[$mentioned[1;yes]]
User Profile: $replaceText[$replaceText[$isBot[$mentioned[1;yes]];true;Bot User];false;Human User]
]
$thumbnail[$userAvatar[$mentioned[1;yes]]]
$color[$random[00000;99999]]
$footer[Requested by: $username[$authorID]#$discriminator[$authorID];$authorAvatar[webp;true;1024]]


${mode}
`});