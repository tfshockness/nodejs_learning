//First Classes
const Greet = require('./greet');  //it will automatic call the index.js file! Awesome!
const Person = require('./modules');
Greet.English();
Greet.Portuguese();

let timoteo = new Person("Timoteo", 28);
console.log(timoteo.displayInfo());

timoteo.age = 29;

console.log(timoteo.displayInfo());

//module, exports, require, __dirname, filename
console.log(__dirname); //available through nodejs function
console.log(__filename); //available through nodejs function


//Second Class

//const Emitter = require('./modules/Emitter') //Usinb my Class emiiter
const Emitter = require('events'); //using the Nodejs Emitter

let emt = new Emitter();

emt.on('greet', () => {
    console.log("Hello, I am the first function!!")
})

emt.on('greet', () => {
    console.log("Sup, I am the second functions of greet")
})

emt.on('flws', () => {
    console.log("Flws boe, vou pra casa jogar um lol");
})

emt.emit('greet');

emt.emit('flws');



//2/5 - 2 is numerator, 5 is denominator
class Fract
{
    constructor(numerator, denominator){
        this.numerator = numerator;
        this.denominator = denominator;
    }

    gdc(x, y)
    {
        let greatest = 1;
        for ( let i = 2; i <= ( ( x < y ) ? x: y ); i++ )
        {
           // if current i divides both x and y
           if ( x % i == 0 && y % i == 0 )
           {
              greatest = i; // update greatest common divisor
           }
        } // end for
     
        return greatest;

    }

    sum(other){
       
        let numerator = (this.numerator * other.denominator) + (other.numerator * this.denominator)
        let denominator = this.denominator * other.denominator;

        const n = numerator/this.gdc(numerator, denominator);
        const d = denominator/this.gdc(numerator, denominator);
        
        return new Fract(n, d);
    }

    div(){

    }

    mult(){

    }
}

const a = new Fract(5,6);
const b = new Fract(9,10);
const c = a.sum(b);
console.log(c); 