import { searchRecipe } from "./api.js";

const urlParams = new URLSearchParams(window.location.search);
const query = urlParams.get('query');

document.addEventListener("DOMContentLoaded", async ()=>{
    let recipes = await searchRecipe(query);
    
    const searchFragment = document.querySelector('#search-result');
    console.log(recipes)
    recipes.results.forEach(recipe => {
        // Create an instance of the template content
        const instance = document.importNode(searchFragment.content, true);
        // Add relevant content to the template
        instance.querySelector('#search-title').innerHTML = recipe.title;
        instance.querySelector('a').href = `./detail.html?id=${recipe.id}`;
        instance.querySelector('#search-image').src = recipe.image;
        // Append the instance ot the DOM
        document.getElementById('search-page').appendChild(instance);
    });

})