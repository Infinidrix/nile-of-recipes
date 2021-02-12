import { getDetailed, getImageURL } from "./api.js"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

document.addEventListener("DOMContentLoaded", async () => {
    const data = await getDetailed(id);

    const section = document.querySelector("section");
    
    // Header
    const header = section.firstElementChild;
    console.log(header);
    // change image
    header.querySelector("img").src = data.image;
    // change title
    header.querySelector("h1").innerText = data.title;
    // change summary
    header.querySelector("p").innerHTML = data.summary;

    // About
    const about = header.nextElementSibling
                        .nextElementSibling
                        .querySelector("#pills-about")
    about.querySelector("p").innerHTML = data.summary;


    // Ingredients
    const ingredients = about.nextElementSibling;

    let ingredientList = data.extendedIngredients;
    
    const cardFragment = document.querySelector('#ingredient-card');

    ingredientList.forEach(ingredient => {
        // Create an instance of the template content
        const instance = document.importNode(cardFragment.content, true);
        // Add relevant content to the template
        instance.querySelector('h1').innerHTML = ingredient.name;
        instance.querySelector('p').innerHTML = ingredient.originalString;
        instance.querySelector('img').src = getImageURL(ingredient.image);
        // Append the instance ot the DOM
        ingredients.appendChild(instance);
    });

    // Instruction

    const instructions = ingredients.nextElementSibling;
    instructions.querySelector('p').innerHTML = data.instructions;

    // Features
    const features = instructions.nextElementSibling;
    let featureData = {
        Healthy: data.veryHealthy,
        vegan: data.vegan,
        "Gluten Free": data.glutenFree,
        "Health Score": data.healthScore,
        "Price per Serving": data.pricePerServing,
        cheap: data.cheap,
    }
    console.log(featureData);
    features.querySelectorAll("tr").forEach((row) => {
        const children =  Array.from(row.children);
        console.log(children);
        const featureName = children[1].textContent;
        console.log(featureName);
        if (featureData[featureName] !== null){
            children[2].textContent = featureData[featureName];
        }
    })
})