var modal = document.getElementById("myModal");


var btn = document.getElementById("contentbox_btn");


var span = document.getElementsByClassName("close")[0];


btn.onclick = function() {
  modal.style.display = "block";
}


span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
function save()
{
    var activity_value=document.getElementById("activity_name").value;
    console.log(activity_value)
   
  
   var x=localStorage.getItem("val")
    if(activity_value=="")
    {
        alert("Something went wrong, check that you filled in a name")
    }
    if(activity_value!="")
    {
    var tab_add_value=document.getElementById("cardiolist_table")
    var output=` <tr id=${activity_value}>
    <td class="first_td">
        <div>
           <img src="${x}"/>
        </div>
    </td>
    <td class="sec_td">
       <a href="backcountry.html">${activity_value}</a>
    </td>
    <td class="third_td">
        <a><img src="https://www.shapelink.com/images/icons/pencil.png" alt="pencil"/></a>
    </td>
    <td class="third_td">
      <a><img src="https://www.shapelink.com/images/icons/cross.png" alt="cross" onClick="del('${activity_value}')"/></a>
    </td>
</tr>`
tab_add_value.innerHTML+=output;
    }
}
function cancel()
{
    document.getElementById("activity_name").value="";
}
 function set_activity_icon(a,b)
{
    var val=""
    var img1=document.getElementById(a);
    console.log(img1.src)
    val=img1.src;
    var img2=document.getElementById("activityIcon");
    img2.src=val;
    console.log(val)
    localStorage.setItem("val",val);
}
function del(c)
{
  var delete_val =""
  var del_val1=document.getElementById(c);
  del_val1.style.display="none";
}
function edit(a)
{
    var activity_value=document.getElementById("Hiking_value").innerHTML;
    console.log(activity_value)
   
  
   var x=localStorage.getItem("val")
    if(activity_value=="")
    {
        alert("Something went wrong, check that you filled in a name")
    }
    if(activity_value!="")
    {
    var tab_add_value=document.getElementById(a)
    var output=` <tr id=${activity_value}>
    <td class="first_td">
        <div>
           <img src="${x}"/>
        </div>
    </td>
    <td class="sec_td">
       <a href="backcountry.html">${activity_value}</a>
    </td>
    <td class="third_td">
        <a><img src="https://www.shapelink.com/images/icons/pencil.png" alt="pencil"/></a>
    </td>
    <td class="third_td">
      <a><img src="https://www.shapelink.com/images/icons/cross.png" alt="cross" onClick="del('${activity_value}')"/></a>
    </td>
</tr>`
tab_add_value.innerHTML=output;
    }
}


