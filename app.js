var wine = wine
var allWines = 0
$(document).ready(function(){
    cheese = cheese;
    wine = wine;
    allWines = Object.keys(wine);
});

$(document).ready(function(){
  $(".form-group").on("submit", function(){
    event.preventDefault();
    $(".not-found").addClass("hidden")
    wineEntered = $("#wineSearch").val().toLowerCase();
    search(wineEntered);
    displayInput(wineEntered)
    showPairings();
    changeImg();
    displayGouda()
  })
});

function changeImg(){
  var picturedWine = ["cabernet sauvignon", "pinot noir", "chardonnay", "sauvignon blanc", "prosecco", "riesling", "port"]
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
      case ("pinot noir"):
        $("img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/pinot-noir-gruyere-comte-wine-cheese.jpg")
        $("#perf").append(" It goes especially well with gruyere.");
        return;
        break;
      default:
        $(".img").attr("src", "http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg")
    }
  }
}
