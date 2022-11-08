

url1 = "https://swapi.dev/api/vehicles/";
url2 = "https://swapi.dev/api/people/";
options = {};


/*function vehicleList (url){
return fetch (url, options)
.then(response => {
    if (response.ok){
        return response.json();
    }else{
        console.log("error")
    }
}).then(data => console.log(data.results))}


newdata = vehicleList(url);

console.log(newdata);*/


//

/*fetch (url, options)
.then(response => {
    if (response.ok){
       return response.json();
    } else{
        console.log("incorrect url 404")
    }
    
}).then(data => console.log (data));*/

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