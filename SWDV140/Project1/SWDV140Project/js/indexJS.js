"use strict";
var eligible = prompt("Are you 18 years of age or older? Y or N", "Y");
if(eligible == "Y"){
    var interested = prompt("Are you interested in being a hero for a statue in need? Y or N", "Y");
}
else{
    prompt("You will need an adult to co-sign for your statue");
}