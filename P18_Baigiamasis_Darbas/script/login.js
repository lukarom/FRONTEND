
document.getElementById("back").onclick = function(){window.location.href = "mainpage.html"}


loginmain.addEventListener("click", function (event) {
    
    if (document.getElementById('fname').value !== "" && document.getElementById('lname').value !== ""){
        login();
    }
    else {
        event.preventDefault();
        alert('Please enter all fields');
        }
    }
);

function login() {
    if (JSON.parse(localStorage.getItem('users')) !== null) {
        let exist = JSON.parse(localStorage.getItem('users')).some(data => data.fname.toLowerCase() == document.getElementById("fname").value.toLowerCase() &&
            data.lname.toLowerCase() == document.getElementById("lname").value.toLowerCase())
        if (exist) {
            let currentUser = {
                fname: document.getElementById("fname").value,
                lname: document.getElementById("lname").value,
            };
            localStorage.setItem("currentUser", JSON.stringify(currentUser));

            setTimeout(function () {
                window.location.href = "todoapp.html";
            }, 500);
            alert("Welcome to the TODO app");

        }
        else {
            setTimeout(function () {
                window.location.href = "register.html";
            }, 500);
            alert("User not found. Please register");
         
        }
    }
    else {
        setTimeout(function () {
           window.location.href = "register.html";
        }, 500);
        alert("User not found. Please register");
    }
}