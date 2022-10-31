/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


function run(){
  alert("Hello World")

}

function downloadClicked(){
  document.getElementById('download-preview').style.visibility="visible";
} setTimeout(showdiv, 8000)
function downloadClicked(){
  document.getElementById('download-preview').style.visibility="visible";
 setTimeout(hidediv, 8000)
}

function showdiv()
    {
      document.getElementById('download-preview').style.visibility="hidden";
    }
function hidediv()
    {
      document.getElementById('download-preview').style.visibility="hidden";      
    }