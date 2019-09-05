//Selects ALL ul inside sub-menu and start them as hidden by default
document.querySelectorAll(".sub-menu ul").forEach(function(el) {
  el.style.display = 'none'
});


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

  //For ul
  


}