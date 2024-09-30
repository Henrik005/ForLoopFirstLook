//Model
let num = 2
let num2 = 20
let app = document.getElementById('App')







//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/`<button onclick="increaseNumber()">Print Numbers</button>
`
}







//Controller
function increaseNumber(){
    
for(num; num <= num2; num++){
    app.innerHTML+=/*HTML*/ `<div> ${num}</div>`;
}

} 


function numberCheck(){
if(num == 3){
    increaseNumber() = false;
}
}

    








