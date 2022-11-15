const todoList = document.querySelector(".todo-form");
const crtTskSbmBtn = document.querySelector(".btncreate");

function sendData() {
  let data = new FormData(todoList);
  let obj = {};

  obj["15612"] = "timeValue";

  console.log(data);

  // #1 iteracija -> obj {name: 'asd'}
  // #2 iteracija -> obj {type: 'asd'}
  data.forEach((value, key) => {
    // console.log(`${key}(Key): ${value}(Value)`);
    obj[key] = value;
  });

  fetch("https://testapi.io/api/lukarom/resource/TodoList", {
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
