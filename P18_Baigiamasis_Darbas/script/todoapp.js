//#region page functionality
document.getElementById("logout").onclick = function () {
  window.location.href = "mainpage.html";
};

var currentUser = JSON.parse(localStorage.getItem("currentUser"));
document
  .getElementById("currentuser")
  .append(currentUser.fname + " " + currentUser.lname);

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};
//#endregion

//#region addTodo()

const todoForm = document.querySelector(".todo-form");
const todoTaskType = document.querySelector("#type");
const todoContent = document.querySelector("#content");
const todoEndDate = document.querySelector("#enddate");

const todoItemsList = document.querySelector(".todo-items");

let todos = [];

createTask.addEventListener("click", function (event) {
  event.preventDefault();
  addTodo(todoTaskType.value, todoContent.value, todoEndDate.value);
});

function addTodo(type, content, endDate) {
  // if item is not empty
  if (type != "" && content != "" && endDate != "") {
    currentUser;
    const todo = {
      fname: currentUser.fname,
      lname: currentUser.lname,
      id: Date.now(),
      type: todoTaskType.options[todoTaskType.selectedIndex].value,
      content: todoContent.textContent,
      endDate: todoEndDate.value,
      completed: false,
    };
    todos.push(todo);
    addToLocalStorage(todos);
    //todoTaskType.value = "";
    //todoContent.textContent = "";
    //todoEndDate.value = "";
  }
}

//#endregion

//#region renderTodo()

function renderTodos(todos) {
  todoItemsList.innerHTML = "";
  todos.forEach(function (item) {
    const checked = item.completed ? "checked" : null;
    const li = document.createElement("li");
    li.setAttribute("class", "content");
    li.setAttribute("data-key", item.id);
    if (item.completed === true) {
      li.classList.add("checked");
    }
    if (item.fname == currentUser.fname && item.lname == currentUser.lname) {
      li.innerHTML = `
        <input type="checkbox" class="checkbox" ${checked}>
        ${item.type}
        ${item.content}
        ${item.endDate}
        <button id="editButton" class="edit-button" onclick = newTask()>Edit</button>
        <button class="delete-button">X</button>
      `;
      todoItemsList.append(li);
    }
  });
}
//#endregion

//#region localStorage functions
function addToLocalStorage(todos) {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
}

function getFromLocalStorage() {
  const reference = localStorage.getItem("todos");
  if (reference) {
    todos = JSON.parse(reference);
    renderTodos(todos);
  }
}
function toggle(id) {
  todos.forEach(function (item) {
    if (item.id == id) {
      item.completed = !item.completed;
    }
  });
  addToLocalStorage(todos);
}
//#endregion

//#region deleteTodo()

function deleteTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });

  addToLocalStorage(todos);
}

getFromLocalStorage();

todoItemsList.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.parentElement.getAttribute("data-key"));
  }
  if (event.target.classList.contains("delete-button")) {
    deleteTodo(event.target.parentElement.getAttribute("data-key"));
  }
});

//#endregion

//#region editTodo()
function editTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });
 let editButton = document.getElementById("createTask");
    editButton.innerHTML = "Edit";
    editButton.id = "editButtons";
    editButton.name = "editButton";
    //editButton.onclick = newTask();

  type = todos.type;
  content = todos.content;
  endDate = todos.endDate;
}

getFromLocalStorage();


todoItemsList.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.getAttribute("data-key"));
  }
  if (event.target.classList.contains("edit-button")) {
    editTodo(event.target.parentElement.getAttribute("data-key"));
  }
});
//#endregion

//////////////////////////////////////////////FETCH/////////////////////////////////////

//#region sendData() fetch to API
const todotasks = document.querySelector("#taskForm");
const crtTskSbmBtn = document.querySelector("#createTask");
console.log(todotasks);
console.log(crtTskSbmBtn);
function sendData() {
  const data = new FormData();
  data.append("fname", currentUser.fname);
  data.append("lname", currentUser.lname);
  data.append("id", Date.now());
  data.append("type", todoTaskType.options[todoTaskType.selectedIndex].value);
  data.append("content", todoContent.textContent);
  data.append("endtime", todoEndDate.value);
  data.append("completed", "false");

  let obj = {};

  data.forEach((value, key) => {
    obj[key] = value;
  });

  fetch("https://testapi.io/api/lukarom/resource/todolist", {
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
    console.log("fetchdata")
  e.preventDefault();
  // Breaks manual refresh after submit
  sendData();
});
//#endregion
