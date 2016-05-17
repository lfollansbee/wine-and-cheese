cheese = ["Soft cheeses such as brie and mascarpone.<br>", "Pungent cheeses. Try gorgonzola or a nice bleu cheese.<br>", "Hard cheeses, like a tasty cheddar, pecroino, asiago, or parmesan."]
var wine = {
  boldRed:{
    types:['malbec', 'syrah', 'shiraz', 'petite sirah', 'pinotage'],
    pairs:cheese[1],
    perf: cheese[2],
  },
  mediumRed:{
    types:['merlot', 'zinfandel', 'zin', 'cabernet franc', 'tempranillo', 'sangiovese'],
    pairs:[cheese[0],cheese[2]],
    perf: cheese[3],
  },
  lightRed:{
    types:['pinot noir', 'grenache', 'gamay'],
    perf: cheese[0]
  },
  rose:{
    types:['white zinfandel', 'rose', 'garnacha rosado'],
    pairs:[cheese[0],cheese[1],cheese[2]],
  },
  richWhite:{
    types:['chardonnay', 'semillon', 'viognier'],
    pairs:cheese[2],
    perf: cheese[0],
  },
  lightWhite:{
    types:['sauvignon blanc', 'albarino', 'pinot blanc', 'pinot gris', 'pinot grigio'],
    pairs:[cheese[0], cheese[1]],
  },
  sparkling:{
    types:['champagne', 'prosecco', 'cava', 'sparkling wine', 'sparkling rose', 'cremant'],
    pairs:[cheese[0], cheese[1], cheese[2]],
  },
  sweetWhite:{
    types:['moscato', 'riesling', 'chenin blanc'],
    pairs:[cheese[0],cheese[1]],
    perf:["My favorite's gouda."]
  },
  dessert:{
    types:['port', 'sherry', 'madeira', 'muscat'],
    pairs:cheese[0],
    perf: cheese[1],
  },
  jokes:{
    types:['franzia','three buck chuck'],
    pairs: "String cheese",
    perf: "Velveeta",
  }
}
