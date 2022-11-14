
document.getElementById("back").onclick = function(){window.location.href = "mainpage.html"}




function login() {
    var checkuser = localStorage.getItem("username");
    var checkpass = localStorage.getItem("password");
    if (checkuser === user2.value && checkpass === pass2.value) {
        document.getElementById("demo").innerHTML = "You are now logged in.";
    } else {
        document.getElementById("demo").innerHTML = "Incorrect username and password";
    }
}