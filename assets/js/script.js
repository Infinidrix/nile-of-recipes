// import api functions
import { searchRecipe, getDetailed, getFeatured } from "./api.js"

// make the serach button go to the seach page with query variable set to the input text
const navbarSearch = document.querySelector("#navbar-search");
navbarSearch.querySelector("button").onclick = (e) => {
    e.preventDefault()
    console.log(`/search?query=${navbarSearch.querySelector("input").value}`);
    window.location.href = `./search.html?query=${navbarSearch.querySelector("input").value}`
};