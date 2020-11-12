const franc = require("franc");
const langs = require("langs");
const colors = require("colors");

// get string from the console input
const string = process.argv[2];

// console.log(franc(string));
// console.log(string[0]);

const langCode = franc(string);

if (langCode === "und") {
  console.log("Sorry we couldn't determine the language");
} else {
  const language = langs.where("3", langCode);
  console.log(`Our best guess is: ${language.name.green.underline}`);
}
