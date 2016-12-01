/**
 * Methods to change how the recipes are ordered.
 **/

var ReorderRecipes = {
  byImage: function(recipes) {
    var images = [];
    var withoutImages = [];

    for (var i = 0; i < recipes.length; i++) {
      var currentRecipe = recipes[i];
      if (currentRecipe.thumbnail !== '') {
        images.push(currentRecipe);
      }
      else {
        withoutImages.push(currentRecipe);
      }
    }
    var orderedRecipes = images.concat(withoutImages);
    return orderedRecipes;
  }
}

module.exports = ReorderRecipes;
