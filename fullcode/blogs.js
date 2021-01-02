const init = function (e) {
  var span_login = document.querySelector("#login_info");
  var data = JSON.parse(localStorage.getItem("username"));
  span_login.innerHTML = data;
  var span_logout = document.querySelector(".log_out");
  var newblog = document.querySelector("#newblog");
  var showblog = document.querySelector("#showblog");
  span_logout.addEventListener("click", function () {
    alert("Will go to the home page and you will be log out from page");
    window.document.location = "./index.html";
  });
  var myblogs_data = JSON.parse(localStorage.getItem("myBlogs"));
  console.log(myblogs_data);
  var data = JSON.parse(localStorage.getItem("username"));
  var hours = new Date();
  var hr = hours.getHours();
  var min = hours.getMinutes();
  // var min = Date.now().getMinutes();
  var output = "";
  for (var i in myblogs_data) {
    output += `<div class="container_myblogs">
        <div class="container_myblogs_img">
          <img src=${"myblogs.png"} alt="blogs_img" />
        </div>
        <div class="container_myblogs_head">
          <p class="myblogs_heading">${myblogs_data[i].sub}</p>
          <div class="myblogs_heading_wriiten">
            <p>
              <a href="">${data}'s Blog</a>
            </p>
            <p class="p"> by</p>
            <p>
              <a href="">${data},</a>
            </p>
            <p class="time">
             Today ${hr}:${min}
            </p>
          </div>
          <div class="myblogs__innerdata">${myblogs_data[i].datas}</div>
          <div class="likes">
            <span><img src=${"star.png"} alt="star_img"/><a href="">0 Likes</a></span>
            <span><img src=${"messg.gif"} alt="star_img"/><a href="">0 comments</a></span>
            <span><img src=${"mfiles.gif"} alt="star_img"/><a href="">0 images</a></span>
          </div>
        </div>
      </div>`;
  }
  document.querySelector(".container_left__inner__info").innerHTML = output;
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
