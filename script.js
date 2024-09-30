//Model
let num = 1
let num2 = 10
let app = document.getElementById('App')
let res






//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/`<button onclick="increaseNumber()">Print Numbers</button>
`
}







//Controller
function increaseNumber(){
    
for(num; num <= num2; num++){
     res = 2* num;
    app.innerHTML+=/*HTML*/ `<div> ${res}</div>`;
}

} 


function numberCheck(){
if(num == 3){
    increaseNumber() = false;
}
}

    








