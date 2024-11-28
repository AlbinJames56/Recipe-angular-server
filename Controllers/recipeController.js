const recipes = require("../Model/recipeSchema");

//  getAllRecipes
exports.getAllRecipes = async (req, res) => {
   console.log("inside get all");
   
  try {
    const allRecipes = await recipes.find();
    res.status(200).json(allRecipes);
  } catch (err) {
    res.status(401).json(err);
  }
};
