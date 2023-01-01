'use strict';

let secretNumber = Math.trunc(Math.random()*20)+1;


let score = 20;
let highscore = 0;
// trunc removes the decimal part
// we addded 1 to make the range from 1 to 20, (trunc gives us the floor value)

document.querySelector('.check').addEventListener('click', function(){

    const guess = Number (document.querySelector('.guess').value);
    // The value that we get from the queryselector is a string, so we convert it to a number using the NUMBER method, as we need to compare this to othe r values.

    // guess=0 will be obtained when the input field is left blank. So the below command will conver to true if guess=0. (0 is falsy value)

    if(!guess) {
        document.querySelector('.message').textContent = '⛔ No value';
    }
      

    // when the player wins
    else if (guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number 🎉'

        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem'; 
        document.querySelector('.number').textContent = secretNumber; 

        if(score > highscore){
            
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

        
    }

    else if(guess!==secretNumber){
        if(score > 1 ){
            document.querySelector('.message').textContent = guess >secretNumber?'Too High !': 'Too Low !';
            score--;
            document.querySelector('.score').textContent = score;
            }
    
            else {
                document.querySelector('.message').textContent = 'You lost.😢'
                document.querySelector('.score').textContent = 0;
            }
    }

   

});

document.querySelector('.again').addEventListener('click', function() {
    document.querySelector('.guess').value = ' ';
    score = 20;  
     document.querySelector('.score').textContent = score;
    secretNumber = Math.trunc(Math.random()*20)
    
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem'; 


})


