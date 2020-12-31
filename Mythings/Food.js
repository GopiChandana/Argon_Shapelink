function save_food()
{
   var name=document.getElementById("name").value;
    var cal=document.getElementById("calories").value;
    var pro=document.getElementById("protein").value;
   var option=document.getElementById("category_id").value
    var carbo= document.getElementById("carbohydrates").value;
    var fat= document.getElementById("fat").value;
    event.preventDefault()
    
    
    var no_provi=document.getElementById("no_provision")
    no_provi.style.display="none";
    var output=""
    output=`<tr id=${name}>
    <td class="first_td">
        <div>
           ${name}
        </div>
    </td>
    <td class="sec_td black">
       ${cal}
    </td>
    <td class="third_td black">
        ${pro}
    </td>
    <td class="third_td black">
      ${fat}
    </td>
    <td class="third_td black">
    ${carbo}
  </td>
 <td class="third_td">
 <img class="trash" onClick="dell('${name}')" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Trash_font_awesome.svg/1024px-Trash_font_awesome.svg.png"/>
 </td>
</tr>`
console.log(name)
localStorage.setItem("dell_row_trash",name)
console.log("dell_row_trash: "+name)
var data=document.getElementById("cardiolist_table")
data.innerHTML+=output;
document.getElementById("name").value=""
document.getElementById("calories").value=""
document.getElementById("protein").value=""
document.getElementById("carbohydrates").value=""
document.getElementById("fat").value=""
document.getElementById("category_id").selectedIndex = "16";


}

function dell(c_row)
{
   var del_row =document.getElementById(c_row)
   
   console.log(del_row)
    del_row.style.display="none";
}
