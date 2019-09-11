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


function hide_leftmenu() {
  col1.classList.toggle('displayNone');
  col2.classList.toggle('column2_expand');
  nav1.classList.toggle('displayNone');
  nav2.classList.toggle('column2_full');
}

function hide_rightmenu() {
  col3.classList.toggle('displayNone')
  col2.classList.toggle('column2_expand')
}


//Mini-Drawer
function columnOne() {
  logotext = document.getElementById('logotext');

  //Extend-minify
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

  //Center all icons
  document.querySelectorAll(".centerme").forEach(function (el) {
    el.classList.toggle('textCenter');
  });

  //From big menu to mini-hover menu - need the two stylesheet - working! 
  var el = document.getElementById("style1");
  if (el.href.match("empty.css")) {
    el.href = "minime.css";
  } else {
    el.href = "empty.css";
  }

}

//Preview Eye
function preview() {
  nav = document.getElementById('myNav');

  col1.classList.toggle('displayNoneSuper');
  col3.classList.toggle('displayNoneSuper');
  col2.classList.toggle('fullheight');
  nav.classList.toggle('displayNoneSuper');
}