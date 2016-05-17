wines = Object.keys(wine);

function search(input){
  for(var i = 0; i < wines.length; i++){
    name = wines[i];
    cheesePair = wine[name].pairs;
    cheesePerf = wine[name].perf;
    currentType = wine[name].types;
    inSystem = isInSystem(currentType, input);//runs the current type of wine through the system function to see if the input wine is in it's types array
    if (inSystem === true){
      return wine[i];//if found, this ends the function
    }
  }
}

function isInSystem(currentType, input){
  if(currentType === undefined){
    $(".not-found").removeClass("hidden")
    return false
  }
  if (currentType.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    wineEntered = $("#wineSearch").val().toLowerCase();//creates variable for the input wine type
    $(".not-found").addClass("hidden")
    search(wineEntered);//runs function to search for wine in wine-object
    $("#inputWine").empty();//clearing previous search
    $("#inputWine").append(wineEntered.toUpperCase());//appends the entered wine to the DOM
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
