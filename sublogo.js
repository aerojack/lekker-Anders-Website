$(document).ready(function(){


      document.getElementById("object").style.transform = "translate(750%,0) rotate(381deg)";


      var current= new Date()
      var day_night=current.getHours()
      var Month = current.getMonth();

      if (Month=12)
        document.getElementById("object").src = "images/sublogo cg.png";

      if (Month=11)
        document.getElementById("object").src = "images/sublogo black.png";




});
