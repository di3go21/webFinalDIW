 //Cogemos El Boton
var miBoton
miBoton = document.getElementById("botonSubir");
 

 // cuando baja un 20% lo hacemos aparecer
 window.onscroll = function () { controlScroll() };

 function controlScroll() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     miBoton.style.display = "block";
   } else {
     miBoton.style.display = "none";
   }
 }
