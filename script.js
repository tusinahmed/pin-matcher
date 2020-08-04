// Pin Generator
document.getElementById("generatePin").addEventListener("click", function(){
    var generatePin = Math.round(1000+Math.random()*9000);
    document.getElementById("generatorDisplay").value = generatePin;
})


// Number pad
function number(num){
    var input = document.getElementById("inputPinDisplay");
    switch(num){
        case 1:
            input.value += "1";
            break;
        case 2:
            input.value += "2";
            break;
        case 3:
            input.value += "3";
            break;
        case 4:
            input.value += "4";
            break;
        case 5:
            input.value += "5";
            break;
        case 6:
            input.value += "6";
            break;
        case 7:
            input.value += "7";
            break;
        case 8:
            input.value += "8";
            break;
        case 9:
            input.value += "9";
            break;
         case 0:
            input.value += "0";
            break;
    }
}


// Display function for dry coding
function display(id, property){
    document.getElementById(id).style.display = property;
}

//Clear Full Display
document.getElementById("clear").addEventListener("click", function(){
    document.getElementById("inputPinDisplay").value = "";
})

//Backspace Button
document.getElementById("backspaceBtn").addEventListener("click", function(){
    var input = document.getElementById("inputPinDisplay");
    var x = input.value;
    if(x.length > 0){
        x = x.substring(0, x.length-1)
        input.value = x;
    }
})


//Pin Matching functionality
document.getElementById("submit").addEventListener("click", function(){
    var input = document.getElementById("inputPinDisplay").value;
    var generatorDisplay = document.getElementById("generatorDisplay").value;
    if(input == '' || generatorDisplay == ''){
        alert("Please generate the pin or enter your pin");
    }
    else if(input == generatorDisplay){
        display("pinSuccess","block")
        display("pinFailed","none")
        document.getElementById("inputPinDisplay").value = "";
        document.getElementById("generatorDisplay").value = "";
    }
    else if(input != generatorDisplay){   
        display("pinSuccess","none")
        display("pinFailed","block")
        document.getElementById("inputPinDisplay").value = "";
        var tryLeft = document.getElementById("tryLeft").innerText;
        var num = parseInt(tryLeft);
        var tryCount = num - 1;
        document.getElementById("tryLeft").innerText = tryCount;
        if(tryCount <= -1){
            document.getElementById("tryLeft").innerText = 0;
        }
        else if(tryCount == 0){
            document.getElementById("submit").style.display = "none";
            var notify = document.getElementById("notify");
            notify.style.display = "block";
        }
    }
})



// Basic Settings
document.getElementById("generatePin").addEventListener("click", function(){
    display("submit","block")
    document.getElementById("submit").style.margin = "auto";
    document.getElementById("submit").style.marginTop = "20px";
    display("notify","none")
    document.getElementById("tryLeft").innerText = 3;
    display("pinFailed","none")
    display("pinSuccess","none")
    document.getElementById("inputPinDisplay").value = "";
})