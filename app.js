let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;

const choice=[`Rock`,`Paper`,`Scissor`];

function computerPlay() {
    return Math.floor(Math.random()*30)%3;
}
function singleround(ps) {
    ps=finalPick;
    let cs=computerPlay();
    resText.textContent += "| "+choice[cs]+" picked by COMP\n"
    if(ps===cs)
        return 0;
    if((ps==0 && cs==1) 
    || (ps==1 && cs==2)
    || (ps==2 && cs==0)) {
        return -1;
    } else {
        return 1;
    }
}
function updateScore(){
    sco.textContent="SCORE : "+score
}
function resetScore() {
    score=0;
    updateScore();
}

let score=0;

let sco=document.getElementById("score")
let reset = document.getElementsByClassName("reset")
reset[0].addEventListener('click',resetScore);
let resText=document.getElementById('result')
console.log(resText)
let r=document.getElementById('r')
let p=document.getElementById('p')
let s=document.getElementById('s')
let finalPick = -1
r.addEventListener('click',()=>{
    finalPick=0
})
p.addEventListener('click',()=>{
    finalPick=1
})
s.addEventListener('click',()=>{
    finalPick=2
})
let submit=document.querySelector('input');
console.log(submit)
submit.addEventListener('click', submitClicked)

function submitClicked() {
    if(finalPick == -1) {
        resText.textContent="Pick something first...";
        return;
    } else {
        resText.textContent=choice[finalPick]+ " picked by PLAYER "
    }
    let res = singleround(finalPick);
    finalPick=-1;
    score+=res;
    updateScore();
}
// for(let i=0;i<36;i++)
//     console.log(`Round ${i+1} : `+singleround(playerSelection,computerSelection));
// console.log(`Computer Score : ${computerScore} \t Player Score : ${playerScore}`);
// if(playerScore>computerScore)
//     console.log(`Player wins by ${playerScore-computerScore} rounds`);
// else if(computerScore>playerScore)
//     console.log(`Computer wins by ${computerScore-playerScore} rounds`);
// else
//     console.log(`A draw -_-`)