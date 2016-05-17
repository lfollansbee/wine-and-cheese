wines = Object.keys(wine);

function search(input){
  for(var i = 0; i < wines.length; i++){
    name = wines[i];
    cheesePair = wine[name].pairs;
    cheesePerf = wine[name].perf;
    currentType = wine[name].types;
    inSystem = isInSystem(currentType, input);
    if (inSystem === true){
      return input;
    }
  }
}

function isInSystem(kind, input){
  if (kind.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    wineEntered = $("#wineSearch").val().toLowerCase();
    search(wineEntered)
    $("#inputWine").empty();
    $("#inputWine").append(wineEntered.toUpperCase());
    showPairings();
  })
});

function showPairings(){
  $(".pairings").removeClass("hidden")
  $("#pairs-heading, #perf-heading").addClass("hidden");
  $("#pairs, #perf").empty();
  if(cheesePair != undefined){
    $("#pairs-heading").removeClass("hidden");
    $("#pairs").append(cheesePair);
  }
  if (cheesePerf != undefined){
    $("#perf-heading").removeClass("hidden");
    $("#perf").append(cheesePerf);
  }
}
