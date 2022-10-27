function changeFirstLi(){
    const ul = document.getElementsByTagName('ul')[0];
    const kavos_li = ul.getElementsByTagName('li')[0];
    kavos_li.innerHTML += ' Kitas gerimas';
}

//------------------------------
function addMilkLi(){
    const ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML += `<li>Milk</li>`;

}

function changeCoffee(){
    const li = document.getElementsByClassName('coffee')[0];
    li.innerHTML = `karstas sokoladas`;
}

function changeMilkToAlmondDrink(){
    const list_of_li = document.getElementsByClassName('milk');
    for(const li of list_of_li){
        li.innerHTML = 'Migdolu gerimas';
    }
}