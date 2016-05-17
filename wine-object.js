cheese = ["Soft cheeses such as goat cheese, brie, or mascarpone.<br>", "Pungent cheeses. Try gorgonzola or a nice bleu cheese.<br>", "Hard cheeses, like a tasty cheddar, pecroino, asiago, or parmesan."]
var wine = {
  boldRed:{
    types:['malbec', 'syrah', 'shiraz', 'petite sirah', 'pinotage'],
    pairs:cheese[1],
    perf: cheese[2],
    img: "http://winefolly.com/wp-content/uploads/2014/11/cabernet-cheddar-wine-cheese.jpg"
  },
  mediumRed:{
    types:['merlot', 'zinfandel', 'zin', 'cabernet franc', 'tempranillo', 'sangiovese'],
    pairs:[cheese[0],cheese[2]],
    perf: cheese[3],
  },
  lightRed:{
    types:['pinot noir', 'grenache', 'gamay'],
    perf: cheese[0],
    img: "http://winefolly.com/wp-content/uploads/2014/11/pinot-noir-gruyere-comte-wine-cheese.jpg"
  },
  rose:{
    types:['white zinfandel', 'rose', 'garnacha rosado'],
    pairs:[cheese[0],cheese[1],cheese[2]],
    img:"http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg"
  },
  richWhite:{
    types:['chardonnay', 'semillon', 'viognier'],
    pairs:cheese[2],
    perf: cheese[0],
    img:"http://winefolly.com/wp-content/uploads/2014/11/chardonnay-brie-wine-cheese.jpg"
  },
  lightWhite:{
    types:['sauvignon blanc', 'albarino', 'pinot blanc', 'pinot gris', 'pinot grigio'],
    pairs:[cheese[0], cheese[1]],
    img: "http://winefolly.com/wp-content/uploads/2014/11/sauvignon-blanc-wine-goat-cheese.jpg"
  },
  sparkling:{
    types:['champagne', 'prosecco', 'cava', 'sparkling wine', 'sparkling rose', 'cremant'],
    pairs:[cheese[0], cheese[1], cheese[2]],
    img: "http://winefolly.com/wp-content/uploads/2014/11/prosecco-asiago-wine-cheese.jpg"
  },
  sweetWhite:{
    types:['moscato', 'riesling', 'chenin blanc'],
    pairs:[cheese[0],cheese[1]],
    perf:["My favorite's gouda."],
    img:"http://winefolly.com/wp-content/uploads/2014/11/riesling-fondue-wine-cheese.jpg"
  },
  dessert:{
    types:['port', 'sherry', 'madeira', 'muscat'],
    pairs:cheese[0],
    perf: cheese[1],
    img:"http://winefolly.com/wp-content/uploads/2014/11/port-silton-wine-cheese-pairings.jpg"
  },
  jokes:{
    types:['franzia','three buck chuck'],
    pairs: "String cheese",
    perf: "Velveeta",
    img:"http://www.trbimg.com/img-53a32adf/turbine/chi-velveeta-recall-20140619-001/2048/2048x1326"
  },
  notPresent:{
    types:undefined,
    img:"http://winefolly.com/wp-content/uploads/2014/11/wine-and-cheese-pairing.jpg"
  }
}
