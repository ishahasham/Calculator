var input= document.getElementById("input")
var totalNumber='';
var operator=null;
var previousNumber='';

function getValue(number){
    totalNumber += number;
    input.value=totalNumber;
}

function getDecimal(){
    if(!totalNumber.includes(".")){
        totalNumber +=".";
        input.value= totalNumber;
    }
}

function square(){
    input.value= input.value*input.value;
}

function clearOne(){
    input.value=input.value.slice(0, -1);
    totalNumber=""
}

function clearAll(){
    input.value= "";
    totalNumber="";
    
}

// calculations


function calculate(){
    let result;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(totalNumber);
    if (isNaN(num1) || isNaN(num2)) return;
    switch(operator){
        case '+':
        result= num1+num2;
        break;
        case '-':
            result= num1-num2;
            break;
        case 'x':
            result= num1*num2;
            break;
        case '/':
            if(totalNumber===0){
                alert("Cannot divide by zero")
                return
            }
            result= num1/num2;
            break;
        case '%':
            result=num1%num2;
            break;
        default:
            return;
    }

    input.value=result;
    totalNumber=result.toString();
    operator = null;
    previousNumber = '';
}




// function calculate(){
//     if(totalNumber==="+"){
//         totalNumber +=input.value+input.value
//         totalNumber= input.value
//     }
//     else if(totalNumber==="-"){
//         totalNumber +=input.value-input.value
//         totalNumber= input.value
//     }
//     else  if(totalNumber==="x"){
//         totalNumber +=input.value*input.value
//         totalNumber= input.value
//     }
//     else  if(totalNumber==="/"){
//         totalNumber +=input.value/input.value
//         totalNumber= input.value
//     }
//     else  if(totalNumber==="%"){
//         totalNumber +=input.value%input.value
//         totalNumber= input.value
        
//     }
//     else{
//         alert("calculate guys!")
//     }
// }

