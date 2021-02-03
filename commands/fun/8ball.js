const {mode} = require('../../Strings/dev.json');

module.exports = ({
name: "8ball",
code: `
$title[$message[]]
$description[The Magic 8 Ball says: *Drumroll please?*
$color[$random[00000;99999]]
$randomText[It is certain!;Yes.;No.;I don't think so..;Without a doubt!;Only time can tell..;I don't know.;Try again later.;Definitely!;You can rely on it.;The gods above cannot decide that answer!;As a great man once said, No.;As a great man once said, Yes.;most likely;The answer was so obvious. Do i have to tell you, Yes;Signs point to no!;Signs point to yes!;That is a question i cannot solve.;100% true!;100% false.;Ofcourse!;Ofcourse not.;This question is a mystery, ***for now...***;¯\_(ツ)_/¯;Well yes, but actually no.;Yes. Deal with it.;I don't know nor do I care.;Yeah, No.;This is why I don't want this command to exist.;***rAcIsT***;According to all known laws of aviation, there is no way that question can be true.;Heck no;Heck yes;Nope. That isn't even physically possible.;Unfortunately, no.;Unfortunately, yes.;Fortunately, no.;Fortunately, yes!]]
$footer[8Ball question by $username[$authorID];$authorAvatar[webp;true;1024]]
$onlyIf[$message[]!=;You must provide a query]

${mode}
`});