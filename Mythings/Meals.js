var count = 0;
var span_login = document.querySelector("#login_info");
var data = JSON.parse(localStorage.getItem("username"));
span_login.innerHTML = data;
var span_logout = document.querySelector(".log_out");
span_logout.addEventListener("click", function () {
  alert("Will go to the home page and you will be log out from page");
  window.document.location = "../argon1/index.html";
});
function check() {
  if (!this.per_portion.checked) {
    alert("hiii");
  } else if (this.per_portion.checked) {
    alert("Aiiiii");
  }
}

function add_meal() {}
var mm = localStorage.getItem("Meals");
var mm_1 = JSON.parse(mm);
console.log(mm_1.length);
console.log(mm_1[0]);
console.log(mm_1[0][0]);
if (mm_1[0][0] != "") {
  for (var j = 0; j < mm_1.length; j++) {
    var tabval = document.getElementById("cardiolist_table");
    var out = `<tr id="${mm_1[j][0]}" >
            <td width="20%"><b id="amt_name">${mm_1[j][0]}</b></td>
            <td width="15%"><b id="amt_amt">${mm_1[j][1]}</b></td>
            <td width="18%"><b id="amt_cal">${Math.ceil(
              Number(mm_1[j][2]) * Number(mm_1[j][1])
            )}</b></td>
            <td width="15%"><b id="amt_pro">${Math.ceil(
              Number(mm_1[j][3]) * Number(mm_1[j][1])
            )}</b></td>
            <td width="15%"><b id="amt_fat">${Math.ceil(
              Number(mm_1[j][4]) * Number(mm_1[j][1])
            )}</b></td>
            <td width="20%"><b id="amt_carbo">${Math.ceil(
              Number(mm_1[j][5]) * Number(mm_1[j][1])
            )}</b></td>
            <td width="20%"><img class="trash" onClick="dell('${
              mm_1[j][0]
            }')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/1024px-Trash_font_awesome.svg.png"/></td>
              </tr>`;
    console.log(tabval);
    tabval.innerHTML += out;
  }
}

function dell(c) {
  var ab = document.getElementById(c);
  ab.style.display = "none";
}
