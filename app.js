var input1 = ""; //Will be the first input
var b; //Will set this to input once and operation is pressed
var userOperation = "";

const nums = document.querySelectorAll(".num");
const opers = document.querySelectorAll(".oper");
const equal = document.querySelector(".equal");

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






nums.forEach(num => {
    num.addEventListener("click", function() {
        input1 = input1 + num.textContent;
    }, false);
});

opers.forEach(oper => {
    oper.addEventListener("click", function() {
        b = input1;
        input1 = "";
        userOperation = oper.textContent;
        
    });
});

equal.addEventListener("click", operation, false);


function operation()  {
    switch (userOperation) {
        case '+': 
        console.log(add(b, input1));
        break;
        case '-':
        console.log(subtract(b, input1));
        break;
        case '*':
        console.log(multiply(b, input1));
        break;
        case '/':
        console.log(divide(b, input1));
        break;

    }

}


