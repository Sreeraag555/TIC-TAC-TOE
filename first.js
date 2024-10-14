let boxes = document.querySelectorAll(".btn");
const win = [ [0,1,2], [0,3,6], [0,4,8], [1,4,7], [2,4,6], [2,5,8], [3,4,5], [6,7,8]];
let decl = document.querySelector(".declare");
let msg = document.querySelector("#winTxt");
let newg = document.querySelector("#newGame");
let resetg =document.querySelector("#resetGame");

let winner;
turnO = true;

const clearg = () => {
    for(let box of boxes){
        box.innerText = "";
    }
}

const declareDraw = () => {
    msg.innerText = "IT'S A DRAW!";
    decl.classList.remove("hide");
}

const declareWin = () => {
    msg.innerText = `THE WINNER IS ${winner}!`;
    decl.classList.remove("hide");

}

const enableBtn = () =>{
    for(let box of boxes){
        box.disabled = false;
    }
}

const disableBtn = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const checkWinner = () => {
    let i = 0;
    for(let pattern of win){
        if(boxes[pattern[0]].innerText!="" && boxes[pattern[1]].innerText!="" && boxes[pattern[2]].innerText!=""){
            if(boxes[pattern[0]].innerText === boxes[pattern[1]].innerText && boxes[pattern[1]].innerText === boxes[pattern[2]].innerText){
                winner = boxes[pattern[0]].innerText;
                disableBtn();
                declareWin();
            }
            else{
                i++;
                    }
    }
}
    if(i === 8){
    declareDraw();
    }
}

boxes.forEach((box) => {
    box.addEventListener("click",() => {
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

newg.addEventListener("click", () => {
    turnO = true;
    enableBtn();
    clearg();
    decl.classList.add("hide");
})

resetg.addEventListener("click", () => {
    turnO = true;
    enableBtn();
    clearg();
    decl.classList.add("hide");
})
