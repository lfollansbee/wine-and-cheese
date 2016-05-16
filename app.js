wines = Object.keys(wine);

function conditional(kind, input){
  if (kind.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

function search(input){
  for(var i = 0; i < wines.length; i++){
    name = wines[i];
    currentType = wine[name].types;
    cheesePair = wine[name].pairs;
    inSystem = conditional(currentType, input);
    if (inSystem === true){
      console.log(name);
      return input;
      return name;
    }
  }
}

// var inputPairs = wine[name].pairs;
// var inputPerf = wine[name].perf;
// console.log(inputPairs + inputPerf)

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    wineEntered = $("#wineSearch").val().toLowerCase();
    $("#inputWine").empty();
    $("#inputWine").append(wineEntered);
    console.log(wineEntered);
    search(wineEntered)
  })
});
