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
    cheesePair = wine[name].pairs;
    cheesePerf = wine[name].perf;
    currentType = wine[name].types;
    inSystem = conditional(currentType, input);
    if (inSystem === true){
      return input;
    }
    // else{
    //   return
    // }
  }
}

function showPairings(){
  $(".pairings").removeClass("hidden");
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

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    wineEntered = $("#wineSearch").val().toLowerCase();
    $("#inputWine").empty();
    $("#inputWine").append(wineEntered.toUpperCase());
    search(wineEntered)
    showPairings();
  })
});
