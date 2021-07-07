function counterClock(){
   var now= new Date();
   var counterDate= new Date(2021,12, 11);


   var timeOfDate= now.getTime();
   var timeOfcounterDate= counterDate.getTime();

   var remTime= timeOfcounterDate - timeOfDate;

   var s= Math.floor(remTime/1000);
   var m= Math.floor(s/60);
   var h= Math.floor(m/60);
   var d= Math.floor(h/24)-30;

   h= h% 24;
   m= m% 60;
   s= s% 60;

   d= (d< 10)? "0" + d : d;
   h= (h< 10)? "0" + h : h;
   m= (m< 10)? "0" + m : m;
   s= (s< 10)? "0" + s : s;

   document.getElementById("days").textContent= d;
   //document.getElementById("days").innerText= d;

   document.getElementById("hours").textContent= h;
   document.getElementById("hours").innerText= h;


   document.getElementById("minutes").textContent= m;
   document.getElementById("minutes").innerText= m;


   document.getElementById("seconds").textContent= s;
   document.getElementById("seconds").innerText= s;

   setTimeout(counterClock, 1000);

}
counterClock();