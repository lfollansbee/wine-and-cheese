var wine = 0
var allWines = 0
$(document).ready(function(){
  $.get("https://warm-spire-51273.herokuapp.com/", function(data) {
    cheese = data.cheese;
    wine = data.wine;
    allWines = Object.keys(data.wine);
  });
});

function search(input){
  for(var i = 0; i < allWines.length; i++){
    wineClass = allWines[i];
    cheesePair = wine[wineClass].pairs;
    cheesePerf = wine[wineClass].perf;
    currentImg = wine[wineClass].img;
    currentType = wine[wineClass].types;
    inSystem = isInSystem(currentType, input);//runs the current type of wine through the system function to see if the input wine is in it's types array
    if (inSystem === true){
      return wineClass;//if found, this ends the function
    }
  }
}

function isInSystem(currentType, input){
  if(wineClass === "notPresent"){
    $(".not-found").removeClass("hidden")//if reach end of object without finding wine, display not found message
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
    $(".not-found").addClass("hidden")//hide error message if it was there from previous search - see function isInSys
    wineEntered = $("#wineSearch").val().toLowerCase();//creates variable for the input wine type
    search(wineEntered);//runs function to search for wine in wine-object
    displayInput(wineEntered)
    showPairings();
    changeImg();
    showWineClass();
    // $(".gouda").removeClass("hidden");
  })
});

function displayInput(){
  $("#inputWine").empty();//clearing previous search
  if (wineClass != "notPresent"){
    $("#inputWine").append(wineEntered.toUpperCase());//appends the entered wine to the DOM
  }
}

function changeImg(){
  if(currentImg === undefined){//if there's no img for that class, change it to the default img
    $(".img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg")
  }else{
    $(".img").attr("src", currentImg)
  }
}

function showPairings(){
  $(".pairings").removeClass("hidden")//displays entire div
  $("#pairs-heading, #perf-heading").addClass("hidden");//hides heading from previous search
  $("#pairs, #perf").empty();//clears info from previous search
  if(cheesePair != undefined){//if the wine pairs with something
    $("#pairs-heading").removeClass("hidden");//display heading
    console.log(cheesePair);
    $("#pairs").append(cheesePair);//display info
  }
  if (cheesePerf != undefined){//if the wine has a perfect pairing
    $("#perf-heading").removeClass("hidden");//display heading
    $("#perf").append(cheesePerf);//display info
  }
}

function showWineClass(){
  $("#wine-class").empty();//clears info from previous search
  if (wineClass != "notPresent"){
    $("#wine-class").append(wineClass);//display info
  }
}
