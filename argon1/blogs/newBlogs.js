const init = function (e) {
  var span_login = document.querySelector("#login_info");
  var data = JSON.parse(localStorage.getItem("username"));
  span_login.innerHTML = data;
  var span_logout = document.querySelector(".log_out");
  span_logout.addEventListener("click", function () {
    alert("Will go to the home page and you will be log out from page");
    window.document.location = "../index.html";
  });
  // for the textarea part storing the value
  var sumit_button = document.querySelector("#textarea_btn");

  const addData = () => {
    var mytextarea = document.querySelector("#mytextarea").value;
    var subject = document.querySelector("#subject").value;

    var textareaData = {
      id: Date.now(),
      datas: mytextarea,
      sub: subject,
    };
    var getData = localStorage.getItem("myBlogs");
    if (getData == null) {
      mytextarea_datas = [];
    } else {
      mytextarea_datas = JSON.parse(getData);
      //   mytextarea_datas.push(textareaData);
      console.log(JSON.parse(getData).length);
    }

    mytextarea_datas.push(textareaData);
    document.querySelector("#mytextarea").value = "";
    document.querySelector("#subject").value = "";
    console.log("data", mytextarea_datas);
    localStorage.setItem("myBlogs", JSON.stringify(mytextarea_datas));
  };
  sumit_button.addEventListener("click", addData);
};
var myBlogsl = JSON.parse(localStorage.getItem("myBlogs"));
if (myBlogsl.length > 2) {
  window.localStorage.removeItem("myBlogs");
}

document.addEventListener("DOMContentLoaded", function () {
  init();
});
