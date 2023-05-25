function clearScreen() {
    document.getElementById("result").value = "";
    }

function append(value){
    let result = document.getElementById('result');
    result.value += value;
    
}

function evaluateExpression(){
    let result = document.getElementById('result');
    result.value = eval(result.value);
}











//  the below line of code creates div element in body of html 
//after that we append the created html element to the body using appendchild.
//  let containerDiv= document.createElement('div');
// // setAttribute is used to set attrivutes or value to the tag 
//  containerDiv.setAttribute('class','container');
// containerDiv.classList.add('text-center');
// for(let i=1;i<=6;i++){
//     let rowDiv
// }
//  document.body.appendChild(containerDiv);




