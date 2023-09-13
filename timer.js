let hr = document.getElementById("hour");
let mins = document.getElementById("min");
let secs = document.getElementById("sec");
let str = document.getElementById("start-but");

// let second = 0;
// let minute = 0;
// let hours = 0;
// var isPaused = true;
// let handle = false;

// function handleTime(){

//      if(isPaused==true){
//         second = second+1;
//         secs.innerHTML=second;
//         // console.log(timeId);

//         if(second==59){
//             second = 0;
//             minute = minute+1;
//             mins.innerHTML=minute;
//         }
//         if(minute == 59){
//             minute = 0;
//             second = 0;
//             hours = hours+1;
//             hr.innerHTML = hours;
//         }
//      }
        
        
//     }
//     const timeId=setInterval(function handleTime(){

//         if(isPaused==true && handle==true){
//            second = second+1;
//            secs.innerHTML=second;
//            // console.log(timeId);
   
//            if(second==59){
//                second = 0;
//                minute = minute+1;
//                mins.innerHTML=minute;
//            }
//            if(minute == 59){
//                minute = 0;
//                second = 0;
//                hours = hours+1;
//                hr.innerHTML = hours;
//            }
//         }
           
           
//        },100);
 
// function handleStart(){
//     handle = true;

//     handleTime();
// }
 

// function handleStop(){
//     handle = true;
//      second = 0;
//      minute = 0;
//      hours = 0;
//     secs.innerHTML=second;
//     mins.innerHTML=minute;
//     hr.innerHTML = hours;
//     clearInterval(timeId);
// }

// function handlePause(){
//     isPaused = false;
// }

// function handleResume(){
//     isPaused=true;
// }

let seconds = 0;
let minutes = 0;
let hours = 0;
let stop = false;
let isPaused = false;

function main(){
    if(isPaused == false && stop==false){
        
        seconds = seconds +1;
        if(seconds == 59){
            seconds = 0;
            minutes = minutes + 1;
        }
        if(minutes == 59){
            minutes = 0;
            hours = hours + 1;
        }
    }
    secs.innerHTML = seconds;
    mins.innerHTML = minutes;
    hr.innerHTML = hours;

    
}


const handleStart=()=>{
    str.innerText = "Resume";
   if(stop == true){
    isPaused = false;
   }
   if(isPaused == true){
    isPaused=false
   }
    const tId = setInterval("main()",100);
    console.log(tId);
}

function handleStop(){
    str.innerText = "Start";
    if(stop == false){
        isPaused = true;
       }
    seconds = 0;
    minutes = 0;
    hours = 0;
    secs.innerHTML = seconds;
    mins.innerHTML = minutes;
    hr.innerHTML = hours;
    // clearInterval(tId);
   
    
} 

function handlePause(){
   if(isPaused == false){
      isPaused = true;
   }
}

// function handleResume(){
//     if(isPaused == true){
//         isPaused=false
//     }
// }

