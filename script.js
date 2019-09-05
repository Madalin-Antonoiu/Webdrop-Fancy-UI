//Selects ALL ul inside sub-menu and start them as hidden by default
document.querySelectorAll(".sub-menu ul").forEach(function(el) {
  el.style.display = 'none'
});

//1. Click a to show respective list
//2. Hover a in mini state to make them hover :)


/* 
var sidemenu = document.getElementById('sidebar_menu');

sidemenu.addEventListener('click', clickMe, false);

function clickMe (e) {
  e.target.classList.display= 'block';
} */

//Mini-Drawer
function columnOne() {
  col1 = document.getElementById('column1');
  col2 = document.getElementById('column2');
  logotext = document.getElementById('logotext');

  nav1 = document.getElementById('left_part');
  nav2 = document.getElementById('rest_of_it');

  col1.classList.toggle('column1_mini');
  col2.classList.toggle('column2_expand');

  nav1.classList.toggle('column1_contract');
  nav2.classList.toggle('column2_extend');
  logotext.classList.toggle('displayNone'); //Logo text hidden

  //Opens all dropdowns
  //document.querySelectorAll(".sub-menu ul").forEach(function(el) {
    //el.style.display = 'block'
  //});

  //Hides all text
  document.querySelectorAll("#sidebar_menu li a span").forEach(function(el) {
    el.classList.toggle('displayNone'); 
   
  });


}

