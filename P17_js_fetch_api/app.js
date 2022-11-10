

url1 = "https://swapi.dev/api/vehicles/";
url2 = "https://swapi.dev/api/people/";
options = {};


fetch (url1, options)
    .then((response) => {
        if (response.ok){
            return response.json();
        }else{
            console.log("error")
        }
    })
    .then(data => console.log(data));

fetch (url, options)
.then(response => {
    if (response.ok){
       return response.json();
    } else{
        console.log("incorrect url 404")
    }
    
}).then(data => console.log (data));

async function loadDataAsync(url) {  
    console.log("zingsnis 1")
    const response = await fetch(url); //fetchas sulaikomas
    console.log("zingsnis 2")
    const data = await response.json();
    console.log("zingsnis 3")
    console.log(data);
}

loadDataAsync(url1);
console.log("zingsnis 4");
loadDataAsync(url2);
console.log("zingsnis 5");



let list = document.getElementById("newList");

fetch(url2)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayCocktail(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayCocktail(data) {
    const data1 = data.results;
    const newList = document.getElementById("myList"); 
    
    const cocktailName = data1.strDrink;
  const heading = document.createElement("h1");
  heading.innerHTML = cocktailName;
  cocktailDiv.appendChild(heading);
  const cocktailImg = document.createElement("img");
  cocktailImg.src = cocktail.strDrinkThumb;
  cocktailDiv.appendChild(cocktailImg);
  document.body.style.backgroundImage = "url('" + cocktail.strDrinkThumb + "')";
  }   