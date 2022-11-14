
document.getElementById("back").onclick = function(){window.location.href = "mainpage.html"}


var fname = document.getElementById("fname");
var lname = document.getElementById("lname");
var email = document.getElementById("email");
var user2 = document.getElementById("user2");
var pass2 = document.getElementById("pass2");
var user = {
fname:fname,
lname:lname,
email:email}


function saveData() {
    localStorage.setItem('fname', JSON.stringify(fname.value));
    localStorage.setItem('lname', JSON.stringify(lname.value));
    localStorage.setItem('email', JSON.stringify(email.value));
    localStorage.setItem('user', JSON.stringify(user));   
}