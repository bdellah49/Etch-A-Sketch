// Nodes
const container=document.querySelector('.container');
const clearBtn=document.querySelector('#clear');
const retryBtn=document.querySelector('#retry');
const startBtn=document.querySelector('#start');
// clear button function
clearBtn.addEventListener('click',function(){
    const content=document.querySelectorAll('.squares');
    Array.from(content).forEach((item)=>item.style.backgroundColor='grey')
});
// reload button function
retryBtn.addEventListener('click',()=>location.reload());

//setting up the try again node
const tryAgain=document.createElement('div');
tryAgain.classList.add('tryAgain');
tryAgain.textContent="try Again ! enter a NUMBER this time";

// function for creating the elements inside the grid 
function createElements(){
    let squaresPerSide = Number(window.prompt("Enter the number of squares in side"));
    console.log(squaresPerSide);
    if (isNaN(squaresPerSide)){
        container.appendChild(tryAgain);
        setTimeout(() => location.reload(), 2000);
    }else{
        
        console.log(squaresPerSide**2);
        console.log(squaresPerSide*22);
        for (let i=0;i<squaresPerSide**2;i++){
            const div = document.createElement("div");
            div.style.width=`${500/(squaresPerSide)}px`;
            div.style.height=`${500/(squaresPerSide)}px`;
            div.classList.add("squares");
            container.appendChild(div);
            console.log();
        }
        const divs = document.querySelectorAll('.squares');
        Array.from(divs).forEach(function(item){
            item.onmouseover=()=>item.style.backgroundColor='red';
        })
    }

}
// start the game
startBtn.addEventListener('click',()=>createElements());

