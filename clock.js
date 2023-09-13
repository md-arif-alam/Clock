// console.log("start");
// const timeout=setTimeout(()=>{
//     console.log("hello world!!!");
// },5000)
// console.log("end");

// clearTimeout(timeout);

// console.log("start");
// const timeInterval = setInterval(()=>{
//     console.log("Helloo Arif!!!");
// },3000);
// console.log("End");

// clearInterval(timeInterval);

function fullTime(){
   let hour = document.getElementById("hour");
   let min = document.getElementById("min");
   let sec = document.getElementById("sec");
   let am = document.getElementById("am_pm");

   var d = new Date();
   var h = d.getHours();
   var m = d.getMinutes();
   var s = d.getSeconds(); 
   var a_p = "AM";

   if(h>=12){
    h = h-12;
    a_p = "PM";
   }
   if(h == 0){
    h = 12;
   }
   h = (h<10)?'0'+h:h;
   m = (m<10)?'0'+m:m;
   s = (s<10)? '0'+s:s;
   
   hour.innerHTML=h;
   min.innerHTML=m;
   sec.innerHTML=s;
   am.innerHTML=a_p;
}

var interval = setInterval(fullTime,1000);