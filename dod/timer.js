var count = 0;

function Timer() {
    this.minutes = 0;
    this.seconds = 0;
    this.milisecons = 0;
    this.idIterval = null;
    this.number = new Number(count++);

    this.changeTime = changeTime;
    this.draw = draw;
    this.start = start;
    this.stop = stop;
    this.reset = reset;
}

Timer.prototype.prepareDom = function () {
    let container = document.getElementById("timer");
    let elem = document.getElementById("cont"+this.number);
    if(elem){
    elem.parentNode.removeChild(elem);
    }

    let timer = document.createElement('div');
    timer.setAttribute("id", "cont"+this.number)
    timer.classList.add("wraper");
    let buttonStart = document.createElement('div');
    buttonStart.setAttribute("id", "start"+this.number);
    buttonStart.innerHTML = "Start"+this.number;
    buttonStart.classList.add("button");
    buttonStart.addEventListener("click", ()=>{
        this.start();
    })
    let buttonStop = document.createElement('div');
    buttonStop.setAttribute("id", "stop"+this.number);
    buttonStop.innerHTML = "Stop";
    buttonStop.classList.add("button");
    buttonStop.addEventListener("click", ()=>{
        this.stop();
    })
    let buttonReset = document.createElement('div');
    buttonReset.setAttribute("id", "reset"+this.number);
    buttonReset.innerHTML = "Reset";
    buttonReset.classList.add("button");
    buttonReset.addEventListener("click", ()=>{
        this.reset();
    })
    let timerContent = document.createElement('div');
    timerContent.classList.add("content");

    timerContent.innerHTML = this.draw();
    timer.appendChild(buttonStart);
    timer.appendChild(buttonStop);
    timer.appendChild(buttonReset);
    timer.appendChild(timerContent);

    this.changeTime();

    container.appendChild(timer);
}

Timer.prototype.render = function () {
    this.prepareDom();
}

function changeTime() {
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

function draw() {

    const tmpMiliseconds = this.milisecons < 10 ? "0" + this.milisecons : this.milisecons;
    const tmpSeconds = this.seconds < 10 ? "0" + this.seconds : this.seconds;
    const tmpMinutes = this.minutes < 10 ? "0" + this.minutes : this.minutes;

    return `${tmpMinutes}:${tmpSeconds}:${tmpMiliseconds}`;
}

function start() {
    if(!this.idIterval){
    this.idIterval = setInterval(this.render.bind(this), 10);
    }
}

function stop() {
    clearInterval(this.idIterval);
    this.idIterval = null;
}

function reset() {
    clearInterval(this.idIterval);
    this.idIterval = null;
    this.milisecons = 0;
    this.seconds = 0;
    this.minutes = 0;
    this.render();
}

const myTimer = new Timer();

myTimer.render();

