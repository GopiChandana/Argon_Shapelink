var span_login = document.querySelector("#login_info");
var data = JSON.parse(localStorage.getItem("username"));
span_login.innerHTML = data;
var span_logout = document.querySelector(".log_out");

span_logout.addEventListener("click", function () {
  alert("Will go to the home page and you will be log out from page");
  window.document.location = "../argon1/index.html";
});
