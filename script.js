col1 = document.getElementById('column1');
col2 = document.getElementById('column2');
col3 = document.getElementById('column3');


nav1 = document.getElementById('left_part');
nav2 = document.getElementById('rest_of_it');

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

//don't need any css :)
for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", clickToShow);

  function clickToShow() {
    this.classList.toggle("active"); //shows diff. bg color
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  }

};

// w3school - https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_sidenav_dropdown



/* Selects ALL ul inside sub-menu and start them as hidden by default -- DONE IN CSS NOW
document.querySelectorAll(".sub-menu ul").forEach(function(el) {
  el.style.display = 'none'
}); */

//1. Click a to show respective list
//2. Hover a in mini state to make them hover :)


function dropDown(e) {
  e.target.classList.toggle("show");
}

//Doesn't work when in mini-state, needs some tweaking, in normal, works!
function hide_leftmenu() {
  //burger = document.getElementById('burger');
  //burger.classList.toggle('displayNone');

  col1.classList.toggle('displayNone');
  col2.classList.toggle('column2_expand');

  nav1.classList.toggle('displayNone');
  nav2.classList.toggle('column2_full');



}

function hide_rightmenu() {

  col3.classList.toggle('displayNone')
  col2.classList.toggle('column2_expand')
}

/* 
var sidemenu = document.getElementById('sidebar_menu');

sidemenu.addEventListener('click', clickMe, false);

function clickMe (e) {
  e.target.classList.display= 'block';
} */

//Mini-Drawer
function columnOne() {
  logotext = document.getElementById('logotext');
  //Extend-contract
  col1.classList.toggle('column1_mini');
  col2.classList.toggle('column2_expand');
  nav1.classList.toggle('column1_mini');
  nav2.classList.toggle('column2_extend');

  //For when hide left panel button is used and want to show again from burger
  col1.classList.remove('displayNone');
  nav1.classList.remove('displayNone');

  //Hide Logo text
  logotext.classList.toggle('displayNone'); //Logo text hidden



  //Hides all text
  document.querySelectorAll("#sidebar_menu li .dd-button span").forEach(function (el) {
    el.classList.toggle('displayNoneB');
  });

  //Opens all dropdowns
  //document.querySelectorAll(".sub-menu ul").forEach(function(el) {
  //el.style.display = 'block'
  //});
  //col1.style.display = 'inline-block';

  //Hide mini-menus on click - need to write this

  //Center all icons
  document.querySelectorAll(".centerme").forEach(function (el) {
    el.classList.toggle('textCenter');
  });

  //From big menu to mini-hover menu - need the two stylesheet - working! 

  //Known bug- need to add tooltip on this stating hovered element :)
  var el = document.getElementById("style1");
  if (el.href.match("empty.css")) {
    el.href = "minime.css";
  } else {
    el.href = "empty.css";
  }
}

function themator() {

}

function preview() {
  nav = document.getElementById('myNav');

  col1.classList.toggle('displayNone');
  col3.classList.toggle('displayNone');
  col2.classList.toggle('fullheight');
  nav.classList.toggle('displayNone');
}