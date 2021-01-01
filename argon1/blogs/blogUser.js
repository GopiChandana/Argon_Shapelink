const init = function (e) {
  var span_login = document.querySelector("#login_info");
  var data = JSON.parse(localStorage.getItem("username"));
  span_login.innerHTML = data;
  //   for the userProfile in blog_part
  var userProfile = document.querySelector(".userProfiles");
  userProfile.innerHTML = data;
  var userProfile = document.querySelector("#userId");
  userProfile.innerHTML = data;
  var userProfile = document.querySelector("#container_right_inner_two_userP");
  userProfile.innerHTML = data;
  var span_logout = document.querySelector(".log_out");
  span_logout.addEventListener("click", function () {
    alert("Will go to the home page and you will be log out from page");
    window.document.location = "../index.html";
  });
  // for the adding the divs to the  blog_User_Profle
  var myblogs_data = JSON.parse(localStorage.getItem("myBlogs"));
  var hours = new Date();
  var hr = hours.getHours();
  var min = hours.getMinutes();
  // var min = Date.now().getMinutes();
  console.log(myblogs_data);
  var output = "";
  for (var i in myblogs_data) {
    output += `<div class="myblogs_container">
        <div class="myblogs_container_heading">
          <p>${myblogs_data[i].sub}</p>
        </div>
        <div class="myblogs_container_likes">
          <div class="myblogs_container_likes_times">
              Today ${hr}:${min}  &nbsp;&nbsp;&nbsp;&nbsp;  
            <span><img src=${"star.png"} alt="star_img"/><a href="">0 Likes</a></span>
            <span><img src=${"messg.gif"} alt="star_img"/><a href="">0 comments</a></span>
          </div>
          <div class="myblogs_container_edit">
              <img src=${"pencil.png"} alt="pencil"/>
                <p><a href="">Edit</a></p>
                <img src=${"delete.png"} alt="delete" />
                <p id="deleteId"><a href="#">Delete</a></p>
                <img src=${"share.png"} alt="share"/>
                <p><a href="">Share</a></p>
          </div>
        </div>
        <div class="myblogs_container_data">
            <p id="datasOfPost">${myblogs_data[i].datas}</p>
        </div>
      </div>`;
  }
  document.querySelector("#updatesBlog").innerHTML = output;

  //   for deleting the localStorage item by id
  var deleteId = document.querySelector("#deleteId");
  var myblogs_data = JSON.parse(localStorage.getItem("myBlogs"));
  function deleteData() {
    var id1 = myblogs_data[0].id;
    console.log(id1);
    const filtered = myblogs_data.filter((item) => item.id !== id1);
    localStorage.setItem("myBlogs", JSON.stringify(filtered));
    window.location.reload();
  }
  deleteId.addEventListener("click", deleteData);
};

document.addEventListener("DOMContentLoaded", function () {
  init();
});
