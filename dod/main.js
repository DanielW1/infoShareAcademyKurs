function Pojazd(sound, number) {
    this.wheel = number;
    this.sound = sound;
    this.move = function () {
        console.log(this.sound);
    }
    this.getWheelNumber = function () {
        return this.wheel;
    }
}

function setRower(sound) {
    this.wheel = 2;
    this.sound = sound;
}

function setCar(sound) {
    this.wheel = 4;
    this.sound = sound;
}

function fcactory(number) {
    let obj;
    if (number == 4) {
        obj = Object.create(this);
        setCar.call(obj, "brrrr");
    } else if (number === 2)
        setRower.call(obj, "dzyn");
    return obj;
}

let pojazd = new Pojazd("brr", 4);

let rower = Object.create(pojazd);
let car = Object.create(pojazd);

setRower.call(rower,"dzyn");
setCar.call(car,"wrrr");

let result = fcactory.call(pojazd,4);



