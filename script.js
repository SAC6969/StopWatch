let hour = document.querySelector('.hour');  //hour span display
let min = document.querySelector('.min');      //minute span display
let sec = document.querySelector('.sec');   //second span display

let start = document.querySelector('.start'); //start button 
let stop = document.querySelector('.stop'); //stop button
let reset = document.querySelector('.reset'); //reset button

var clear;
let seconds = 0;
let minutes = 0;
let hours  = 0;

let toggle = false;

// On click start Button 
start.addEventListener('click',function(){
        if(toggle == false){
            toggle = true;
            clear = setInterval(function(){
                seconds++;
                seconds < 10 ? sec.innerHTML = '0' + seconds : sec.innerHTML = seconds;
                minutes < 10 ? min.innerHTML = '0' + minutes : min.innerHTML = minutes;
                hours < 10 ? hour.innerHTML = '0' + hours : hour.innerHTML = hours;
        
                if(seconds == 59){
                    seconds = -1;
                    minutes++;
                }
        
                if(minutes == 60){
                    minutes = 0;
                    hours++;
                }
        
            },1000)
        }
    })


// On click stop Button 
stop.addEventListener('click',function(){  
    toggle = false;
    clearInterval(clear);
})

// On click reset Button 
reset.addEventListener('click',function(){
    toggle = false;
    clearInterval(clear);
    seconds = 0;
    minutes = 0;
    hours = 0;
    
    hour.innerHTML = '00';
    min.innerHTML = '00';
    sec.innerHTML = '00';
})
