
wines = Object.keys(wine);

function conditional(kind, input){
  if (kind.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

function search(input){
  for(var i = 0; i<wines.length; i++){
    name = wines[i];
    currentType = wine[name].types;
//     cheesePair = wine[name].pairs;
    inSystem = conditional(currentType, input);
//     console.log(name)
    if (inSystem === true){
      console.log(input);
      return input;
      return name;
    }
  }
}
search("champagne");

var inputPairs = wine[name].pairs;
var inputPerf = wine[name].perf;
console.log(inputPairs + inputPerf)
