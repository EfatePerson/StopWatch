function addZero(number){
  if (number < 10){
    return `0${number}`
  }else
  return number
}

function reset(){
  document.querySelector('.js-reset').addEventListener('click', () => {
    clearInterval(intervalId)
    milliseconds = 0, seconds = 0, minutes = 0, hours = 0; 
    document.querySelector('.js-time').innerHTML = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}.${addZero(milliseconds)}`
    timerOff = true;  
    stopElement.classList.remove('stop-color')
    document.querySelector('.js-stop').innerHTML = 'Start';
  })
}
reset()

let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;

timerOff = true;
stopElement = document.querySelector('.js-stop');



document.querySelector('.js-stop').addEventListener('click', () =>{
  if(timerOff){
    timerOff = false;
    stopElement.innerHTML = 'Stop'
    stopElement.classList.add('stop-color')
    tTime();
  }else{
    timerOff = true
    stopElement.classList.remove('stop-color')
    stopElement.innerHTML = 'Start'
    clearInterval(intervalId)
    // document.querySelector('.js-time').innerHTML = JSON.parse(localStorage.getItem('curentTime'));
  }
})

let intervalId;

function tTime(){
  intervalId = setInterval(() =>{

    milliseconds++ ;
    if(milliseconds > 99){
      milliseconds = 0;
      seconds++;
    }else if(seconds >= 60){
      seconds = 0;
      minutes++;
    }else if(minutes >=60){
      minutes = 0;
      hours++;
    }
    
  let curentTimer = `${addZero(hours)}:${addZero(minutes)}:${addZero(seconds)}.${addZero(milliseconds)}`;
  document.querySelector('.js-time').innerHTML = curentTimer;
  // localStorage.setItem('curentTime',JSON.stringify(curentTimer)) 
  }, 10 );
}