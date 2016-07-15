function search(input){
  for(var i = 0; i < allWines.length; i++){
    wineClass = allWines[i];
    cheesePair = wine[wineClass].pairs;
    cheesePerf = wine[wineClass].perf;
    currentImg = wine[wineClass].img;
    currentType = wine[wineClass].types;
    inSystem = isInSystem(currentType, input);
    if (inSystem === true){
      return wineClass;
    }
  }
}

function isInSystem(currentType, input){
  if(wineClass === "notPresent"){
    $(".not-found").removeClass("hidden")
    return false
  }
  if (currentType.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

function displayInput(){
  $("#inputWine").empty();
  if (wineClass != "notPresent"){
    $("#inputWine").append(wineEntered.toUpperCase());
  }
}

function showPairings(){
  $(".pairings").removeClass("hidden")
  $("#pairs-heading, #perf-heading").addClass("hidden");
  $("#pairs, #perf").empty();
  if(cheesePair != undefined){
    $("#pairs-heading").removeClass("hidden");
    breakPairs("#pairs", cheesePair);
  }
  if (cheesePerf != undefined){
    $("#perf-heading").removeClass("hidden");
    breakPairs("#perf", cheesePerf);
  }
}

function breakPairs (location, array){
  if(array.length === 2 && typeof(array) == "object"){
    $(location).append(array[0] + "<br>" + array[1]);
  }else if(array.length > 2 && typeof(array) == "object"){
    $(location).append(array[0] + "<br>" + array[1] + "<br>" + array[2]);
  }else{
    $(location).append(array);
  }
}

function displayGouda(){
  $(".gouda").addClass("hidden");
  if (wineClass != "notPresent"){
    $(".gouda").removeClass("hidden");
  }
}
