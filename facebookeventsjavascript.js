$(document).ready(function(){
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("calendarpagina6").innerHTML =
      this.responseText;
    }
  };
  xhttp.open("GET", "facebookevents.php", true);
  xhttp.send();
})
