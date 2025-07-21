let userscore = 0;
let compscore = 0;
const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userscorepara = document.querySelector("#user-score");

const compscorepara = document.querySelector("#comp-score");
const gencompchoice = () => {
    const options = ["rock","paper","scissor"];
  const randIdx = Math.floor(Math.random()* 3);
  return options[randIdx];
// rock,papaer ,scissor
};
const drawgame = () => {
    msg.innerText = "Game was draw!.Play Again"
    
    msg.style.backgroundColor = "green";
};

const showwinner = (userwin,userchoice,compchoice) =>{
if(userwin){
    userscore++;
    userscorepara.innerText = userscore;

    msg.innerText = `You Win! Your ${userchoice} beats ${compchoice}`;
    msg.style.backgroundColor = "blue";
}else{
    compscore++;
    compscorepara.innerText = compscore;


    
    msg.innerText = `You Lost! ${compchoice} beats Your ${userchoice}`
    
    msg.style.backgroundColor = "red";
}
}


const playgame = (userchoice) => {
console.log("user choice= ",userchoice);
//generate computer choice
const compchoice = gencompchoice();
console.log(("comp choice =",compchoice));

if(userchoice === compchoice){
//draw game
drawgame();
}else{
    userwin = true;
    if(userchoice ==="rock"){
     userwin =   compchoice ==="paper"? false: true;
    }else if(userchoice ==="paper"){
      userwin = compchoice ==="scissor"?false: true;
    }else{
         userwin = compchoice ==="rock"? false: true;
    }
    showwinner(userwin,userchoice,compchoice)
}
};



choices.forEach((choice) => {

    choice.addEventListener("click",() => {
        const userchoice = choice.getAttribute("id");

        playgame(userchoice);
    });

});