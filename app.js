var input1 = ""; //Will be the first input
var b; //Will set this to input once and operation is pressed
var userOperation = "";
const screen = document.querySelector(".screen");
const nums = document.querySelectorAll(".num");
const opers = document.querySelectorAll(".oper");
const equal = document.querySelector(".equal");
const calculator = document.querySelector(".calculator");


const container = document.querySelector(".container");
let tracker = [];


var subDisplay = document.createElement("div");
subDisplay.classList.add("subDisplay");
screen.appendChild(subDisplay);
subDisplay.textContent = "0"; //tbc
subDisplay.style.fontSize = "14px";

var display = document.createElement("div");
display.classList.add("display");
screen.appendChild(display);
display.textContent = "0"; //tbc
display.style.fontSize = "22px";




let repeat = false;


nums.forEach(num => {
    num.addEventListener("click", function() {
        input1 = input1 + num.textContent;
        display.textContent = input1;
    }, false);
});
let counter = 0;
let temp = 0;
let pressed = false;
let result = "";
opers.forEach(oper => {
    oper.addEventListener("click", function() {
        if (repeat) {
            subDisplay.textContent = ans;
            switch (userOperation) {
                
                case '+': 
                b = add(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '-':
                b = subtract(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '*':
                b = multiply(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '/':
                b = divide(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
        
            }
            input1 = "";
            display.textContent = ""
        } else if (!pressed) {
            userOperation = oper.textContent;
            b = input1;
            input1 = "";
            pressed = true;
            subDisplay.textContent = b + " " + oper.textContent;
        } else {
  
            switch (userOperation) {
                
                case '+': 
                b = add(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '-':
                b = subtract(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '*':
                b = multiply(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
                case '/':
                b = divide(input1, b);
                subDisplay.textContent = b + " " + userOperation;
                break;
        
            }
            input1 = "";
            display.textContent = ""
        }




        
        
        
    });
});

equal.addEventListener("click", operation, false);

let ans = 0;

function operation()  {
    repeat = true;
    pressed = false;
    switch (userOperation) {
        
        case '+': 
        ans = add(b, input1);
        display.textContent = ans;
        subDisplay.textContent += input1 + " =";
        return (ans);
        
        break;
        case '-':
        ans = subtract(b, input1);
        display.textContent = ans;
        subDisplay.textContent += input1 + " =";
        return ans;
        break;
        case '*':
        ans = multiply(b, input1);
        display.textContent = ans;
        subDisplay.textContent += input1 + " =";
        return ans;
        break;
        case '/':
        ans = divide(b, input1);
        display.textContent = ans;
        subDisplay.textContent += input1 + " =";
        return ans;
        break;

    }

}
















function add(a, b) {
    
    return parseInt(a) + parseInt(b);
}
function subtract(a, b) {
    return parseInt(a)-parseInt(b);
}
function multiply(a, b){
    return parseInt(a) * parseInt(b);
}
function divide (a, b) {
    return parseInt(a) / parseInt(b);
}

