var p1 =document.querySelector('#p1');
var p2 =document.querySelector('#p2');
var p1Display=document.querySelector("#p1Display");
var p2Display=document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector('p span');
var h1 = document.querySelector('h1');

var p1Score = 0;
var p2Score = 0;
var gameOver= false;
var winningScore;

p1.addEventListener("click", function(){
    if(!gameOver){
        p1Score++;
        if(p1Score === winningScore){
            gameOver = true;
            p1Display.style.color = "green";
            h1.style.backgroundColor = "lightpink";
        }
        p1Display.textContent = p1Score;
    }
    
});

p2.addEventListener("click", function(){
    if(!gameOver){
        p2Score++;
        if(p2Score === winningScore){
            gameOver = true;
            p2Display.style.color = "green";
            h1.style.backgroundColor = "lightpink";
        }
        p2Display.textContent = p2Score;
    }
    
});

reset.addEventListener("click", resetfun );

function resetfun(){
    p1Score=0;
    p2Score=0;
    p2Display.textContent = p2Score;
    p1Display.textContent = p1Score;
    gameOver = false;
    p1Display.style.color = "black";
    p2Display.style.color = "black";
    h1.style.backgroundColor = null;

}

numInput.addEventListener("change", function(){
    winningScoreDisplay.textContent = this.value;
    winningScore = parseInt(this.value);
    resetfun();
});
