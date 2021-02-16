import { getDetailed, getImageURL } from "./api.js"

const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

document.addEventListener("DOMContentLoaded", async () => {
    // get detailed information from api
    const data = await getDetailed(id);

    // find the main section to iterate over
    const section = document.querySelector("section");
    
    // Get the Header content
    const header = section.firstElementChild;
    // change image
    header.querySelector("img").src = data.image;
    // change title
    header.querySelector("h1").innerText = data.title;
    // change summary
    header.querySelector("p").innerHTML = data.summary;

    // About section - navigating to it was a bit long because of how it was structured 
    const about = header.nextElementSibling
                        .nextElementSibling
                        .querySelector("#pills-about")
    // change about page
    about.querySelector("p").innerHTML = data.summary;


    // Ingredients Section
    const ingredients = about.nextElementSibling;
    
    // the list of ingredients from the api 
    let ingredientList = data.extendedIngredients;
    
    // iterate through all the ingredients from the list and create nodes
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

    // Features Section
    const features = instructions.nextElementSibling;
    // puts the main features to an object to access them in the for loop
    let featureData = {
        Healthy: data.veryHealthy,
        vegan: data.vegan,
        "Gluten Free": data.glutenFree,
        "Health Score": data.healthScore,
        "Price per Serving": data.pricePerServing,
        cheap: data.cheap,
    }
    // Iterates through each row and puts the value from featureData to the table
    features.querySelectorAll("tr").forEach((row) => {
        const children =  Array.from(row.children);
        const featureName = children[1].textContent;
        if (featureData[featureName] !== null){
            children[2].textContent = featureData[featureName];
        }
    })
})