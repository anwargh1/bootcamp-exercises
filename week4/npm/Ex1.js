var validator = require("validator");
console.log(validator.isEmail("shoobert@dylan"));
console.log(validator.isMobilePhone("786-329-9958", "en-US"));
let blacklist = ["!", "?", ".", "@", "~", ",", "'"];
let text = "I'M SO EXCITED!!!~!";
console.log(validator.blacklist(text, blacklist));
