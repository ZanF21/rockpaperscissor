let playerSelection;
let computerSelection;
let playerScore=0;
let computerScore=0;

const choice=[`Rock`,`Paper`,`Scissor`];

function computerPlay()
{
    return choice[((Math.floor(Math.random()*30))%3)];
}
function singleround(playerSelection,computerSelection)
{
    //randome game
    let ps=computerPlay();
    let cs=computerPlay();
    //let ps=playerSelection.toLowercase();
    //let cs=computerSelection.toLowercase();
    if(ps===cs)
        return `Draw`;
    else if((ps==`Rock`&&cs==`Scissor`)||
            (ps==`Paper`&&cs==`Rock`)||
            (ps==`Scissor`&&cs==`Paper`))
    {
        playerScore=playerScore+1;        
        return `You Win! ${ps} beats ${cs}`;
    }
    else if((cs==`Rock`&&ps==`Scissor`)||
            (cs==`Paper`&&ps==`Rock`)||
            (cs==`Scissor`&&ps==`Paper`))
    {
        computerScore=computerScore+1;
        return `You Lose! ${cs} beats ${ps}`;
    }
}



for(let i=0;i<36;i++)
    console.log(`Round ${i+1} : `+singleround(playerSelection,computerSelection));
console.log(`Computer Score : ${computerScore} \t Player Score : ${playerScore}`);
if(playerScore>computerScore)
    console.log(`Player wins by ${playerScore-computerScore} rounds`);
else if(computerScore>playerScore)
    console.log(`Computer wins by ${computerScore-playerScore} rounds`);
else
    console.log(`A draw -_-`)