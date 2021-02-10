/**
 * Currently puts the api key in the git repo,
 * will change when better solution is found
 */
const TOKEN = "854efe0ebae543d5b88fd53f03852b6b";


// Gets a list of random recipes, specify number or default is used 
export async function getFeatured(amount = 6){
    // fetchs random recipes with api token - URLSearchParams is used for the part after ? to make it more readable
    // translates to https://api.spoonacular.com/recipes/random?number=AMOUNT&limitLicense=true&apiKey=TOKEN
    let response = await fetch('https://api.spoonacular.com/recipes/random?' + new URLSearchParams({
        number: amount,
        limitLicense: true,
        apiKey: TOKEN
    }));
    // convert the response body to json
    let data = await response.json();

    return data
    
}
// Test the above function UNCOMMENT BELOW CODE - should return an array of 6 recipes
console.log("this is feature")
// getFeatured().then(console.log)


// Gets detailed info 
// ID is in recipe.id
export async function getDetailed(id){
    // fetchs detailed information about a recipe with api token - URLSearchParams is used for the part after ? to make it more readable
    // translates to https://api.spoonacular.com/recipes/ID/information?apiKey=TOKEN
    let response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?` + new URLSearchParams({
        apiKey: TOKEN
    }));

    // convert the response body to json
    let data = await response.json();

    return data
}
// test the above function - UNCOMMENT BELOW CODE - shoule return details of "Slow Cooker Poblano Corn Chowder with Chicken and Chorizo"
getDetailed(660297).then(console.log)

// Pass a search query ( as a string ) and get results
export async function searchRecipe(searchQuery){
    // fetchs recipes that are related with the search text - URLSearchParams is used for the part after ? to make it more readable
    // translates to https://api.spoonacular.com/recipes/complexSearch?query=searchQuery&apiKey=TOKEN
    let response = await fetch('https://api.spoonacular.com/recipes/complexSearch?' + new URLSearchParams({
        query: searchQuery,
        apiKey: TOKEN
    }));

    // convert the response body to json
    let data = await response.json();

    return data
}
// test the above function - UNCOMMENT BELOW CODE - shoule return recipies related to bananas
// searchRecipe("Banana").then(console.log)
