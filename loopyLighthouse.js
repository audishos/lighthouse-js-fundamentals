function loopyLighthouse(range, multiples, words){
  //var numbers = [];

  for (var i = range[0]; i <= range[1]; i++){
    if (i % multiples[0] === 0 && i % multiples[1] === 0){
      //numbers.push("LoopyLighthouse");
      console.log(words[0] + words[1]);
    }
    else if(i % multiples[0] === 0){
      //numbers.push("Loopy");
      console.log(words[0]);
    }
    else if(i % multiples[1] === 0){
      //numbers.push("Lighthouse");
      console.log(words[1]);
    }
    else{
      //numbers.push(i);
      console.log(i);
    }
  }

  //return numbers;
}

//console.log(loopyLighthouse());
loopyLighthouse([15, 90], [2, 5], ["Batty", "Beacon"]);