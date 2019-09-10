col1 = document.getElementById('column1');
col2 = document.getElementById('column2');
logotext = document.getElementById('logotext');
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
function hide_minimenu() {
  nav1.style.display = 'none';
  nav2.style.width = '100%';

  col1.style.display = 'none';
  col2.style.width = '87%';

}

/* 
var sidemenu = document.getElementById('sidebar_menu');

sidemenu.addEventListener('click', clickMe, false);

function clickMe (e) {
  e.target.classList.display= 'block';
} */

//Mini-Drawer
function columnOne() {
  col1.classList.toggle('column1_mini');
  col2.classList.toggle('column2_expand');

  nav1.classList.toggle('column1_mini');
  nav2.classList.toggle('column2_extend');
  logotext.classList.toggle('displayNone'); //Logo text hidden

  //Opens all dropdowns
  //document.querySelectorAll(".sub-menu ul").forEach(function(el) {
  //el.style.display = 'block'
  //});

  //Hides all text
  document.querySelectorAll("#sidebar_menu li .dd-button span").forEach(function (el) {
    el.classList.toggle('displayNone');
  });


  col1.style.display = 'inline-block';

  //Hide mini-menus on click - need to write this

  //Center all icons
  document.querySelectorAll(".centerme").forEach(function (el) {
    el.classList.toggle('textCenter');
  });

  //From big menu to mini-hover menu

  //Get the primary stylesheet
  var sheet = document.styleSheets[0];


  //Adds hover rule - works
  sheet.insertRule('.dd-input:hover + .dd-menu {display: block}', 0);

  //Searches trough whole list and removes it - works
  for (i = 0; i < sheet.rules.length; i++) {
    if (sheet.rules[i].selectorText == ".dd-input:checked + .dd-menu") { //spaces and everything sensitive
      sheet.deleteRule(i);
    }
  }

  //Like a confirmation
  console.log(sheet);


  

}