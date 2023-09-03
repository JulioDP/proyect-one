

function getComputerChoice(){
  const posibilidad = {
    1: 'Piedra',
    2: 'Papel',
    3: 'Tijeras'
  }
  const aleatorio =  Math.floor( Math.random()  * 3) + 1;
  const posibilidaRandon = posibilidad[aleatorio];
  return posibilidaRandon;
}

function playRound( playerSelectiony, getComputerChoice) {
    return `You Lose ! ${playerSelectiony} beats ${getComputerChoice}`;  
}


const playerSelectiony = "Piedra";
function game(){
    for(let i = 0; i < 5; i++){
        const  computerSelection = playRound(playerSelectiony, getComputerChoice());
        console.log(computerSelection);
    }
}

game();