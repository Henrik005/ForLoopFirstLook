//Model
let num = 1
let num2 = 20
let app = document.getElementById('App').innerHTML






//View
updateView();
function updateView(){
app.innerHTML = /*HTML*/` <div></div> <button onclick="printNumbers()">Print Numbers</button>
`
}







//Controller
function increaseNumber(){
for(num = 1; num < num2; num++){
    num++
}
updateView();
}

printNumber(){
    
}







