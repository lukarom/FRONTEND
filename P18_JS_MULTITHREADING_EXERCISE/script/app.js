var el = document.getElementsByClassName('textbox');

console.log(el);

const addLineSync = () => {
    el[0].innerHTML += `<br> New Line 1 `;
    el[0].innerHTML += `<br> New Line 2 `;
    el[0].innerHTML += `<br> New Line 3 `;
    
}


const addLineAsync = () => {
    setTimeout(() => { el[1].innerHTML += `<br> New Line 1 `;},"1000");
    setTimeout(() => { el[1].innerHTML += `<br> New Line 2 `;}, "5000");
    setTimeout(() => { el[1].innerHTML += `<br> New Line 3 `;}, "3000");
}



//const remove = () => {
   //el[0].innerHTML == `hiu`;
  // console.log('hi');
   // };

    function remove() {
        for (let i = 0; i < el.length; i++) {
            el[i].innerHTML = "";
            
        }
       
        console.log('hi');
    }   
    




 