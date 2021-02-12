import { getFeatured } from "./api.js"

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
        instance.querySelector('#detail-link').href = `/detail.html?id=${recipe.id}`
        // Append the instance ot the DOM
        document.getElementById((index < 3) ? 'content-view':'random-recipes').appendChild(instance);
    });

})