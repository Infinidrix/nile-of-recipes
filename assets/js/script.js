// import api functions
import { searchRecipe, getDetailed, getFeatured } from "./api.js"

document.addEventListener("DOMContentLoaded", async ()=>{
    let recipes = await getFeatured(3);
    
    const featuredFragment = document.querySelector('#recipe-random');

    recipes.recipes.forEach(recipe => {
        // Create an instance of the template content
        const instance = document.importNode(featuredFragment.content, true);
        // Add relevant content to the template
        instance.querySelector('.card-title').innerHTML = recipe.title;
        instance.querySelector('.card-text').innerHTML = recipe.summary;
        instance.querySelector('.card-img-top').src = recipe.image;
        // Append the instance ot the DOM
        document.getElementById('content-view').appendChild(instance);
    });

    const recipeFragment = document.querySelector("#recipe-listing")
    recipes = await getFeatured(3);

    recipes.recipes.forEach(recipe => {
        // Create an instance of the template content
        const instance = document.importNode(recipeFragment.content, true);
        // Add relevant content to the template
        instance.querySelector('.card-title').innerHTML = recipe.title;
        instance.querySelector('.card-text').innerHTML = recipe.summary;
        instance.querySelector('.card-img-top').src = recipe.image;
        // Append the instance ot the DOM
        document.getElementById('random-recipes').appendChild(instance);
    });
})