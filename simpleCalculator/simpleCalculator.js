
let form = document.querySelector("form");
let inputs = document.querySelectorAll(".input");
// let buttons = document.querySelectorAll("input[type = 'submit']");
let result = document.querySelector('span');
let num1, num2, number = [];


form.addEventListener('submit',(e) => {
    e.preventDefault();
});


//Addition

let add = function () {
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    sum = num1 + num2;
    result.textContent = sum;
}

//Subtraction

let sub = function () {
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    minus = num1 - num2;
    result.textContent = minus;
}

//Multiplication

let mul = function () {
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    multy = num1 * num2;
    result.textContent = multy;
}

//Division

let div = function () {
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    divide = (num1 / num2).toFixed(2);
    result.textContent = divide;
}

//Percentage(%)

let findPercent = function () {
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    percent = (num1 * num2)/100;
    result.textContent = num2 + "% of "+ num1 + " is: " + percent;
}

// Divisor numbers

let divisor = function (num1, num2) {

    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    let divisor1 = [], divisor2 = [];
    let j = 0;
    for (let i = 2; i <= num1 / 2; i++){
        if (num1 % i == 0) {
            divisor1[j] = i;
            j += 1;
        }
    }
    divisor1[j] = num1;
   
    j = 0;
    for (let i = 2; i <= num2 / 2; i++){
        if (num2 % i == 0) {
            divisor2[j] = i;
            j += 1;
        }
    }
    divisor2[j] = num2;

    result.textContent = "Num1= " + divisor1 + " & Num2= " + divisor2;

    
    
    if (Number(num1) == num1 && Number(num2) == num2  ) {
        if (num1 == 0 || num2 == 0) {
        return "Take input another number except Zero in both fields.. ";
        }
        // else if ((typeof(num1) != number)  && (typeof(num2) != number) ) {
        //     return "Take input numbers in both fields not string or others..";
        // }
        else if (divisor1.length == 1 && divisor2.length == 1) {
            return "First and Second Number: Prime!";
        }
        else if (divisor1.length == 1 && divisor2.length != 1) {
            return "First Number: Prime but Second Number: Not Prime.";
        }
        else if (divisor1.length != 1 && divisor2.length == 1) {
            return "First Number: not Prime but Second Number: Prime.";
        }
        else return "Both numbers aren't prime.";
    }
    else return "Take input numbers in both fields not string or others..";
    
}

// Least Common Multiple(LCM):

let lcm = (num1, num2) => {
    
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    for (let i = 1; i < 100; i++){
        if ((num1 * i) % num2 == 0) {
            result.textContent = "LCM = " + num1 * i;
            return num1 * i;
            // break;
        }
    }
}

// Greatest Common Divisor(GCD): 

let gcd = (num1, num2) => {
    
    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    let LCM = lcm(num1, num2);
    result.textContent = "GCD= " + (num1 * num2) / LCM;
}

//is Prime number?

let isPrime = (num1, num2) => {

    num1 = Number(inputs[0].value);
    num2 = Number(inputs[1].value); 
    let returnText = divisor(num1, num2);
    result.textContent = returnText;
}