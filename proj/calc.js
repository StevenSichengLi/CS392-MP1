let numOne=document.getElementById("one");
let numTwo=document.getElementById("two");
let outputPositive = document.getElementById("output-positive");
let outputNegative = document.getElementById("output-negative");


function doAdd() {
    outputPositive.innerHTML = "";
    outputNegative.innerHTML = "";

    if (numOne.value === "" || numTwo.value === "") {
        outputPositive.innerHTML = "Please enter two numbers";
        return;
    }

    let result = Number(numOne.value) + Number(numTwo.value);

    if (result < 0) {
        outputNegative.innerHTML = `${result}`;
    } else {
        outputPositive.innerHTML = `${result}`;
    }
}

function doSub() {
    outputPositive.innerHTML = "";
    outputNegative.innerHTML = "";

    if (numOne.value === "" || numTwo.value === "") {
        outputPositive.innerHTML = "Please enter two numbers";
        return;
    }

    let result = Number(numOne.value) - Number(numTwo.value);

    if (result < 0) {
        outputNegative.innerHTML = `${result}`;
    } else {
        outputPositive.innerHTML = `${result}`;
    }
}

function doMul() {
    outputPositive.innerHTML = "";
    outputNegative.innerHTML = "";

    if (numOne.value === "" || numTwo.value === "") {
        outputPositive.innerHTML = "Please enter two numbers";
        return;
    }

    let result = Number(numOne.value) * Number(numTwo.value);

    if (result < 0) {
        outputNegative.innerHTML = `${result}`;
    } else {
        outputPositive.innerHTML = `${result}`;
    }
}

function doDiv() {
    outputPositive.innerHTML = "";
    outputNegative.innerHTML = "";

    if (numOne.value === "" || numTwo.value === "") {
        outputPositive.innerHTML = "Please enter two numbers";
        return;
    }
    if (Number(numTwo.value) === 0) {
        outputPositive.innerHTML = "Cannot divide by zero";
        return;
    }

    let result = Number(numOne.value) / Number(numTwo.value);

    if (result < 0) {
        outputNegative.innerHTML = `${result}`;
    } else {
        outputPositive.innerHTML = `${result}`;
    }
}

function doPow() {
    outputPositive.innerHTML = "";
    outputNegative.innerHTML = "";

    if (numOne.value === "" || numTwo.value === "") {
        outputPositive.innerHTML = "Please enter two numbers";
        return;
    }


    let result = 1;
    for(let i = 0;  i < numTwo.value; i++){
        result *= numOne.value;
    }

    if (Number(numTwo.value) < 0) {
        result = 1 / result;
    }
    outputPositive.innerHTML = `${result}`;
}


function doClear(){
    console.log("I am working");
    numOne.value = "";
    numTwo.value = "";
    outputNegative.innerHTML = "";
    outputPositive.innerHTML = "";
}
