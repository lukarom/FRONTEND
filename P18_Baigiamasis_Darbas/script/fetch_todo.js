const todoList = document.querySelector("#animal-form");
const crtTskSbmBtn = document.querySelector("#animal-form-submit");

function sendData() {
    let data = new FormData(todoList);
    for (var pair of data.entries()) {
        console.log(pair[0] + ', ' + pair[1]);
    }
  let obj = {};

  //console.log(data);

  // #1 iteracija -> obj {name: 'asd'}
  // #2 iteracija -> obj {type: 'asd'}
  data.forEach((value, key) => {
    // console.log(`${key}(Key): ${value}(Value)`);
      obj[key] = value;
      console.log(obj);
  });
    

  fetch('https://testapi.io/api/lukarom/resource/animals', {
    method: "post",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    // Naudojame JSON.stringify, nes objekte neturim .json() metodo
    body: JSON.stringify(obj),
  })
    .then((obj) => console.log(obj.json()))
    .catch((klaida) => console.log(klaida));
}

crtTskSbmBtn.addEventListener("click", (e) => {
  e.preventDefault(); // Breaks manual refresh after submit
  sendData();
});
