var count = 0;

var timers = [];

class Timer {
    constructor(){
    this.minutes = 0;
    this.seconds = 0;
    this.milisecons = 0;
    this.number = new Number(count++);
    this.isStarted = false;

    }

    start = () => {
        this.isStarted = true;
    }
    
    stop = () => {
       this.isStarted = false;
    }
    
    reset = () => {
    
        this.isStarted = false;
        this.idIterval = null;
        this.milisecons = 0;
        this.seconds = 0;
        this.minutes = 0;
    
    }

    draw = () => {

        const tmpMiliseconds = this.milisecons < 10 ? "0" + this.milisecons : this.milisecons;
        const tmpSeconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
        const tmpMinutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;
    
        return `${tmpMinutes}:${tmpSeconds}:${tmpMiliseconds}`;
    }

    changeTime = () => {
        this.milisecons += 1;
    
        if (this.milisecons === 100) {
            this.seconds += 1;
            this.milisecons = 0;
        }
    
        if (this.seconds == 60) {
            this.minutes += 1;
            this.seconds = 0;
        }
    }

    createElemTimer = (text, classElem, functionName) => {
        const elem = document.createElement('div');
        elem.innerHTML = text;
        elem.classList.add(classElem);
        elem.addEventListener("click", ()=>{
            if(functionName === 'start'){
            this.start();
            }else if(functionName === 'stop'){
                this.stop();
            }else if(functionName === 'reset'){
                this.reset();
            }
    
        })
    
        return elem;
    }
    
    createContainerInTimer = ( attribute ,className) => {
        const elem = document.createElement('div');
        elem.setAttribute("id", attribute);
        elem.classList.add(className);
        return elem;
    }

    prepareDom(){
        let container = document.getElementById("timer");

        let timer = this.createContainerInTimer("cont"+this.number, "wraper");
    
        let buttonStart = this.createElemTimer("Start"+this.number,"button", "start");
        let buttonStop = this.createElemTimer("Stop","button", "stop");
        let buttonReset = this.createElemTimer("Reset","button", "reset");
        
        let timerContent = this.createContainerInTimer("content"+this.number, "content");
        timerContent.innerHTML = this.draw();
    
        timer.appendChild(buttonStart);
        timer.appendChild(buttonStop);
        timer.appendChild(buttonReset);
        timer.appendChild(timerContent);
      
        container.appendChild(timer);
    }

    render(){
        const removeElem = document.querySelector("#content"+this.number);
    const timer = removeElem.parentNode;
    removeElem.parentNode.removeChild(removeElem);

    let timerContent = this.createContainerInTimer("content"+this.number, "content");
    timerContent.innerHTML = this.draw();

    timer.appendChild(timerContent);

    if(this.isStarted === true){
    this.changeTime();
    }
    }
}


function renderTimers(){
    timers.forEach((element) => {
        element.render();
    })
}

const myTimer = new Timer();
myTimer.prepareDom();
timers.push(myTimer);
const myTimer2 = new Timer();
myTimer2.prepareDom();
timers.push(myTimer2);

setInterval(renderTimers,10);



