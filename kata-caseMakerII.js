const makeCase = function(input, givenCase) {
  let string = input.split(" "); 
  let output = ""; 

  if (givenCase === "camel") {
    for (var i = 1; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1); 
      output += string[i]; 
    }
    output = string[0] + output; 
    return output; 
  }

  if (givenCase === "pascal") {
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1); 
      output += string[i]; 
    }
    return output; 
  }

  if (givenCase === "snake") {
    for (var i = 1; i < string.length; i++) {
      string[i] = "_" + string[i]
      output += string[i]; 
    }
    output = string[0] + output; 
    return output; 
  }

  if (givenCase === "kebab") {
    for (var i = 1; i < string.length; i++) {
      string[i] = "-" + string[i]
      output += string[i]; 
    }
    output = string[0] + output; 
    return output; 
  }

  if (givenCase === "title") {
    for (var i = 0; i < string.length; i++) {
      string[i] = string[i].charAt(0).toUpperCase() + string[i].substring(1); 
      output += string[i] + " "; 
    }
    return output; 
  }
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));
// console.log(makeCase("this is a string", ["upper", "snake"]));

// Expected Output
// thisIsAString
// ThisIsAString
// this_is_a_string
// this-is-a-string
// This Is A String
// thIs Is A strIng
// THiS iS a STRiNG
// THIS_IS_A_STRING