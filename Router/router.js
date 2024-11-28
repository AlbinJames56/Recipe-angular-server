const express = require('express');
const recipeController = require('../Controllers/recipeController');
const testimonialController = require('../Controllers/testimonialController');
const router=express.Router()

// getAllRecipe 
router.get('/allRecipes',recipeController.getAllRecipes)

// add testimonials
router.post('/addTestimonials',testimonialController.addTestimonialController)

module.exports=router