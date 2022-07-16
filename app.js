var curr = ""; //Will be the first input
var stored; //Will set this to input once and operation is pressed
var userOperation = "";

const nums = document.querySelectorAll(".num");
const opers = document.querySelectorAll(".oper");
const equal = document.querySelector(".equal");

var ans;

//Display
const screen = document.querySelector(".screen");

const subDisplay = document.createElement("div");
subDisplay.classList.add("subDisplay");
subDisplay.textContent = "";
subDisplay.style.fontSize = "24px";
// subDisplay.style.minHeight = "30px";
subDisplay.style.marginRight = "5px";
screen.appendChild(subDisplay);

const display = document.createElement("div");
display.classList.add("display");
display.style.fontSize = "50px";
// display.style.minHeight = "70px";
display.style.maxWidth = "350px";
display.style.marginRight = "5px";
display.style.overflowWrap = "break-word";

display.textContent = "0";
screen.appendChild(display);
function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}
function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}
function multiply(a, b){
    return parseFloat(a) * parseFloat(b);
}
function divide (a, b) {
    return parseFloat(a) / parseFloat(b);
}
var check = false;
var dynamicSub = "";
//Pressing Numbers
var arrayTracker = [];
nums.forEach(num => {
    num.addEventListener("click", function() {
            arrayTracker.push(num.textContent);
            curr += num.textContent;
            display.textContent = curr;
        
    }, false);
});

const decimal = document.querySelector(".decimal");
    decimal.addEventListener("click", function() {
        if (!display.textContent.includes(".")) {
            arrayTracker.push("progress");
            curr += decimal.textContent;
            display.textContent = curr;
        }

    });
var first = true;
//Pressing an operation button
//Stored is the number that gets shifted
var previousOper = "";

opers.forEach(oper => {
    oper.addEventListener("click", function() {
    
        if (arrayTracker[arrayTracker.length - 1] !== "progress") {

            arrayTracker.push("progress");
             if (first && previousOper === "") {
                stored = curr;
                curr = "";
                userOperation = oper.textContent;
                dynamicSub = stored + " " + userOperation
                subDisplay.textContent = dynamicSub;
                previousOper = userOperation;
                
            } else {
                switch (previousOper) {
                    case '+': 
                    ans = add(stored, curr);
                    break;
                    case '-':
                    ans = subtract(stored, curr);
                    break;
                    case '*':
                    ans = multiply(stored, curr);
                    break;
                    case '/':
                    ans = divide(stored, curr);
                    break;
            
                }
                previousOper = oper.textContent;
                dynamicSub = ans + " " + previousOper;
                display.textContent = ans;
                temp = ans;
                stored = temp;
                userOperation = oper.textContent;
                subDisplay.textContent = dynamicSub;
                curr = "";

                
            }

        }

    });
});



//Pressing =
equal.addEventListener("click", operation, false);
function operation()  {
    if (arrayTracker[arrayTracker.length - 1] !== "progress" && arrayTracker[arrayTracker.length - 1] !== "equal") {
        arrayTracker.push("equal");
        first = true;
        previousOper = "";

        switch (userOperation) {
            case '+': 
            ans = add(stored, curr);
            break;
            case '-':
            ans = subtract(stored, curr);
            break;
            case '*':
            ans = multiply(stored, curr);
            break;
            case '/':
            ans = divide(stored, curr);
            break;

        }

        dynamicSub += " " + curr + " =";
        subDisplay.textContent = dynamicSub;
        temp = ans;
        curr = ans;
        display.textContent = ans;
    }

}


const clear = document.querySelector(".clear");
clear.addEventListener("click", function() {
    subDisplay.textContent ="";
    display.textContent = "0";
    dynamicSub = "";
    curr = ""; 
    stored; 
    userOperation = "";
    ans;
    check = false;
    dynamicSub = "";
    arrayTracker = [];
    first = true;
    previousOper = "";
});
