$(document).ready(function(){


      document.getElementById("object").style.transform = "translate(750%,0) rotate(381deg)";


      Date.prototype.getWeek = function() {
          var determinedate = new Date();
          determinedate.setFullYear(this.getFullYear(), this.getMonth(), this.getDate());
          var D = determinedate.getDay();
          if(D == 0) D = 7;
          determinedate.setDate(determinedate.getDate() + (4 - D));
          var YN = determinedate.getFullYear();
          var ZBDoCY = Math.floor((determinedate.getTime() - new Date(YN, 0, 1, -6)) / 86400000);
          var WN = 1 + Math.floor(ZBDoCY / 7);
          return WN;
      }

      var mydate = new Date();
      var maand = mydate.getWeek();


      if (maand==1){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==2){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==3){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==4){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==5){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==6){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==7){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==8){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==9){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==10){
        document.getElementById("object").src = "images/sublogo black.png";
      }
      if (maand==11) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==12) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==13) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==14) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==15) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==16) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==17) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==18) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==19) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==20) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==21) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==22) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==23) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==24) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==25) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==26) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==27) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==28) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==29) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==30) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==31) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==32) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==33) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==34) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==35) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==36) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==37) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==38) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==39) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==40) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==41) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==42) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==43) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==44) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==45) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==46) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==47) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==48) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==49) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==50) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==51) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }
      if (maand==52) {
        document.getElementById("object").src = "images/sublogo cg.png";
      }

});
