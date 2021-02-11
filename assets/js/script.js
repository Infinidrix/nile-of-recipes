// import api functions
import { searchRecipe, getDetailed, getFeatured } from "./api.js"

// make the serach button go to the seach page with query variable set to the input text
const navbarSearch = document.querySelector("#navbar-search");
navbarSearch.querySelector("button").onclick = (e) => {
    e.preventDefault()
    console.log(`/search?query=${navbarSearch.querySelector("input").value}`);
    window.location.href = `./search.html?query=${navbarSearch.querySelector("input").value}`
};

document.addEventListener("DOMContentLoaded", async ()=>{
    let recipes = await getFeatured(6);
    
    const featuredFragment = document.querySelector('#recipe-random');

    recipes.recipes.forEach((recipe, index) => {
        // Create an instance of the template content
        const instance = document.importNode(featuredFragment.content, true);
        // Add relevant content to the template
        instance.querySelector('.card-title').innerHTML = recipe.title;
        instance.querySelector('.card-text').innerHTML = recipe.summary;
        instance.querySelector('.card-img-top').src = recipe.image;
        // Append the instance ot the DOM
        document.getElementById((index < 3) ? 'content-view':'random-recipes').appendChild(instance);
    });

})