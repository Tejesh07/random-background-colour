var num = Math.floor(Math.random(0,9))
 


function changeBg(){

   var x = Math.floor(Math.random() * 256);
   var y = Math.floor(Math.random() * 256);
   var z = Math.floor(Math.random() * 256);
   var bgColor = "rgb(" + x + "," + y + "," + z + ")";

   document.getElementById("bgChanger").style.backgroundColor = bgColor;
}