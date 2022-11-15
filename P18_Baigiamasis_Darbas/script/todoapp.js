document.getElementById("logout").onclick = function () {
  window.location.href = "mainpage.html";
};

var currentUser = JSON.parse(localStorage.getItem("currentUser"));
console.log(currentUser);
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

const todoForm = document.querySelector(".todo-form");

const todoTaskType = document.querySelector(".todo-task-type");
const todoContent = document.querySelector(".todo-content");
const todoEndDate = document.querySelector(".todo-end-date");

const todoItemsList = document.querySelector(".todo-items");

let todos = [];

createTask = document.getElementById("createTask");

createTask.addEventListener("click", function (event) {
  event.preventDefault();
  addTodo(todoTaskType.value, todoContent.value, todoEndDate.value);
});

// function to add todo
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
    todoTaskType.value = "";
    todoContent.textContent = "";
    todoEndDate.value = "";
  }
}

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

        <button class="edit-button">Edit</button>
        <button class="delete-button">X</button>
      `;
      todoItemsList.append(li);
    }
  });
}

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

function editTodo(id) {
  todos = todos.filter(function (item) {
    return item.id != id;
  });

  editTask();
  type = todos.type;
  content = todos.content;
  endDate = todos.endDate;
}

var sortedtodos = todos.sort(function (a, b) {
  return b.endDate - a.endDate;
});
addToLocalStorage(sortedtodos);

getFromLocalStorage();

todoItemsList.addEventListener("click", function (event) {
  if (event.target.type === "checkbox") {
    toggle(event.target.getAttribute("data-key"));
  }
  if (event.target.classList.contains("edit-button")) {
    editTodo(event.target.parentElement.getAttribute("data-key"));
  }
});

//////////////////////////////////////////////FETCH/////////////////////////////////////

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
