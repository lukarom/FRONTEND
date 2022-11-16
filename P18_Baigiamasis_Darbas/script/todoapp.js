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
const todoTaskType = document.querySelector("#type");
const todoContent = document.querySelector("#content");
const todoEndDate = document.querySelector("#enddate");

const todoItemsList = document.querySelector(".todo-items");

let todos = [];

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
    //todoTaskType.value = "";
    //todoContent.textContent = "";
    //todoEndDate.value = "";
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
        <button id="editButton" class="edit-button">Edit</button>
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
    let editButton = document.getElementById("createTask");
    editButton.innerHTML = "Edit";
    editButton.id = "editButton";
    editButton.name = "editButton";
    document.getElementById("taskForm").style.display = "none";
    editButton.onclick = editTask();
    
    
  
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



//#region sendData() fetch to API  
const todotasks = document.querySelector("#taskForm");
const crtTskSbmBtn = document.querySelector("#createTask");
console.log(todotasks);

function sendData() {

    const data = new FormData();
    data.append("fname", currentUser.fname);
    data.append("lname", currentUser.lname);
    data.append("id", Date.now());
    data.append("type", todoTaskType.options[todoTaskType.selectedIndex].value );
    data.append("content", todoContent.textContent);
    data.append("endtime", todoEndDate.value);
    data.append("completed", "false" )

    
  for (var pair of data.entries()) {
      console.log(pair[0] + ', ' + pair[1]);
  }
  let obj = {};

   data.forEach((value, key) => {
      obj[key] = value;
     console.log(obj);
   });
    
    
    fetch('https://testapi.io/api/lukarom/resource/todolist', {
    method: 'post',
    headers: {
      Accept: 'application/json, text/plain, */*',
      'Content-Type': 'application/json',
    },
    // Naudojame JSON.stringify, nes objekte neturim .json() metodo
    body: JSON.stringify(obj),
  })
    .then((obj) => console.log(obj.json()))
    .catch((klaida) => console.log(klaida));
}

crtTskSbmBtn.addEventListener("click", (e) => {
    e.preventDefault();
   // Breaks manual refresh after submit
    sendData();
});
//#endregion

//#region updateData() when the Task is edited or a different user logged in tasks should be downloaded from API
const todolistupdbtn = document.querySelector("#createTask");

function updateData() {
    let data = new FormData();
    data.append("fname", currentUser.fname);
    data.append("lname", currentUser.lname);
    data.append("id", Date.now());
    data.append("type", todoTaskType.options[todoTaskType.selectedIndex].value );
    data.append("content", todoContent.textContent);
    data.append("endtime", todoEndDate.value);
    data.append("completed", "false")
    
    let obj = {};

    // #1 iteracija -> obj {name: 'asd'}
    // #2 iteracija -> obj {type: 'asd'}
    data.forEach((value, key) => {
        // console.log(`${key}(Key): ${value}(Value)`);
        obj[key] = value
    });

    const url = 'https://testapi.io/api/lukarom/resource/todolist' + obj.id;

    fetch(url, {
        method: 'put',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        // Naudojame JSON.stringify, nes objekte neturim .json() metodo
        body: JSON.stringify(obj) 
    })
    .then(obj => {
        const res = obj.json()
        console.log(res);
        return res;
    })
    .catch((klaida) => console.log(klaida));
}

todolistupdbtn.addEventListener('click', (e) => {
    e.preventDefault(); // Breaks manual refresh after submit
    updateData();
})





//#endregion