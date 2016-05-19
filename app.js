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
      return wineClass;
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
    displayGouda()
  })
});

function displayInput(){
  $("#inputWine").empty();
  if (wineClass != "notPresent"){
    $("#inputWine").append(wineEntered.toUpperCase());
  }
}

var picturedWine = ["cabernet sauvignon", "pinot noir", "chardonnay", "sauvignon blanc", "prosecco", "riesling", "port"]
function changeImg(){
  for(var i = 0; i<picturedWine.length; i++){
    switch(wineEntered){
      case (picturedWine[i]):
        $(".img").attr("src", currentImg);
        return;
        break;
      case ("franzia"):
        $(".img").attr("src", currentImg);
        return;
        break;
      case ("shiraz"):
        $("img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/shiraz-gouda-wine-cheese.jpg");
        $("#perf").append(" It goes especially well with smoked gouda.");
        return;
        break;
      default:
        $(".img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg")
    }
  }
}

function showPairings(){
  $(".pairings").removeClass("hidden")//displays entire div
  $("#pairs-heading, #perf-heading").addClass("hidden");//hides heading from previous search
  $("#pairs, #perf").empty();//clears info from previous search
  if(cheesePair != undefined){//if the wine pairs with something
    $("#pairs-heading").removeClass("hidden");//display heading
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

//changeImg function used before specifying images to wines
// function changeImg(){
//   if(currentImg === undefined){//if there's no img for that class, change it to the default img
//     $(".img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg")
//   } else{
//     $(".img").attr("src", currentImg)
//   }
// }

// function showWineClass(){
//   $("#wine-class").empty();
//   if (wineClass != "notPresent"){
//     $("#wine-class").append(wineClass + " Wine");
//   }
// }
