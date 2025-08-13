const num1 = Math.floor(Math.random()*10);
const num2 = Math.floor(Math.random()*10);

const queEle = document.getElementById("que")
const inputEle = document.getElementById("input")
const formEle = document.getElementById("form")
const scoreEle = document.getElementById("score")

let score = JSON.parse(localStorage.getItem("score"));

if(!score){
    score = 0;
}

scoreEle.innerText = `Score: ${score}`;
queEle.innerText = `What is ${num1} Multiply by ${num2}?`

const correctAns = num1 * num2;

const updateBtn = ()=>{
    const userAns = +inputEle.value;
    if(userAns===correctAns){
        score++;
        updateLocalStorage()
    }
    else{
        score--;
        updateLocalStorage()
    }
}

formEle.addEventListener("submit", updateBtn);

function updateLocalStorage(){
    localStorage.setItem("score",JSON.stringify(score))
}
