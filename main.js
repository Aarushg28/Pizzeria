menu_list_array = ["Veg Margherita Pizza","Chicken Tandoori Pizza","Cheese Burst Pizza","Paneer Tikka Pizza","Mexican Barbecue Pizza","Non Veg Supreme Pizza"];

function getmenu(){
var htmldata;
htmldata="<ol class='menulist'>";
menu_list_array.sort();
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+ '<li>'+ menu_list_array[i] +'</li>' ;
        }
        htmldata=htmldata+"</ol>";
        document.getElementById("display_menu").innerHTML = htmldata;
        //give the appropriate id name as display_menu  
}

function add_item(){
var htmldata;
var item=document.getElementById("add_item").value;
        menu_list_array.sort();
        htmldata="<section class='cards'>"
        for(var i=0;i<menu_list_array.length;i++){
            htmldata=htmldata+'<div class="cards">'+'<img src="images/pizzaImg.png" style="width:100; height:90;"/>'+ menu_list_array[i]+'</div>';
        }
         document.getElementById("display_addedmenu").innerHTML = htmldata;		
      }

function add_top(){
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
	add_item();
}
