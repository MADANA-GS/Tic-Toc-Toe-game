let boxes = document.querySelectorAll(".box");
let reset = document.querySelector(".reset");
let winer = document.querySelector(".winner");
let newGame = document.querySelector(".new-game");
let turnO = true;
const win_patterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [4, 4, 5],
    [6, 7, 8]
];
boxes.forEach(box => {
    box.addEventListener("click", () => {
        console.log('box was cliked');
        if (turnO) {
            box.innerText = "O";
            box.style.color = 'red';
            turnO = false;
        }
        else {
            box.innerText = "X";
            box.style.color = 'green';
            turnO = true;
        }
        box.disabled = true;
        check_Winner();
    })
});
const check_Winner = (() => {
    for (const i of win_patterns) {
        let val1 = boxes[i[0]].innerText;
        let val2 = boxes[i[1]].innerText;
        let val3 = boxes[i[2]].innerText;
        if(val1 != '' && val2 != '' && val3 != '')
        {
            if(val1 === val2 && val2 === val3)
            {
                show_Winner(val1);
                for (const box of boxes) {
                    box.disabled = true;
                }
                
            }

        }
    }

});

const show_Winner = ((winner)=>{
    winer.innerText = `congrajulations! winner is ${winner}`;
    winer.classList.remove("hide");
    newGame.classList.remove("hide");
});

const resetGame = (()=>
{

    boxes.forEach(element => {
        element.innerText = '';
        
    });

});

reset.addEventListener("click",()=>{
    resetGame();
    for (const box of boxes) {
        box.disabled = false;

    }
    winer.classList.add("hide");
    newGame.classList.add("hide");

});
newGame.addEventListener("click",()=>{
    resetGame();
    for (const box of boxes) {
        box.disabled = false;

    }
    winer.classList.add("hide");
    newGame.classList.add("hide");

});