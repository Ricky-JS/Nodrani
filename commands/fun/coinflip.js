const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "coinflip",
code: `
$title[Okay, I'm flipping]
$description[and the coin lands on $randomText[||<:nodranicoin:717105076119928902>**Heads**||;||<:nodranicoin:717105076119928902>**Tails**||]]
$color[$random[00000;999999]]


${mode}
`});