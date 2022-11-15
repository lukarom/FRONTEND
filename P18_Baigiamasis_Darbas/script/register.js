document.getElementById("back").onclick = function () {
  window.location.href = "mainpage.html";
};

function saveData() {
  let users = JSON.parse(localStorage.getItem("users")) || [];
  let exist =
    users.length &&
    JSON.parse(localStorage.getItem("users")).some(
      (data) =>
        data.fname.toLowerCase() ==
          document.getElementById("fname").value.toLowerCase() &&
        data.lname.toLowerCase() ==
          document.getElementById("lname").value.toLowerCase() &&
        data.email.toLowerCase() ==
          document.getElementById("email").value.toLowerCase()
    );
  if (!exist) {
    users.push({
      fname: document.getElementById("fname").value,
      lname: document.getElementById("lname").value,
      email: document.getElementById("email").value,
    });

    localStorage.setItem("users", JSON.stringify(users));
    setTimeout(function () {
      window.location.href = "login.html";
    }, 500);
    alert("User has been registered. You can login now");
  } else {
    setTimeout(function () {
      window.location.href = "login.html";
    }, 500);
    alert("User already added. Please login");
  }
}
