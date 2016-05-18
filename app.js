wines = Object.keys(wine);

function search(input){
  for(var i = 0; i < wines.length; i++){
    wineClass = wines[i];
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
  if(currentType === undefined){
    $(".not-found").removeClass("hidden")//if reach end of object without finding wine, display not found message
    return false
  }
  if (currentType.indexOf(input) > -1) {
    return true;
  }else{
    return false;
  }
}

// function imgSwap()

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    $(".not-found").addClass("hidden")//hide error message if it was there from previous search
    wineEntered = $("#wineSearch").val().toLowerCase();//creates variable for the input wine type
    search(wineEntered);//runs function to search for wine in wine-object
    $("#inputWine").empty();//clearing previous search
    $("#inputWine").append(wineEntered.toUpperCase());//appends the entered wine to the DOM
    showPairings();
    changeImg();
    // $(".gouda").removeClass("hidden");
  })
});

function changeImg(){
  if(currentImg === undefined){
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
    $("#pairs").append(cheesePair);//display info
  }
  if (cheesePerf != undefined){//if the wine has a perfect pairing
    $("#perf-heading").removeClass("hidden");//display heading
    $("#perf").append(cheesePerf);//display info
  }
}
