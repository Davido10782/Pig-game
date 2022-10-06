var scores, roundScore, activePlayer;

init();

// var lastDice;

document.querySelector('.btn--roll').addEventListener('click', function() {
    var dice1 = Math.floor(Math.random() * 6) + 1;
    var dice2 = Math.floor(Math.random() * 6) + 1;

    document.getElementById('dice-1').style.display = 'block';
    document.getElementById('dice-2').style.display = 'block';
    document.getElementById('dice-1').src = 'dice-' + dice1 + ".png";
    document.getElementById('dice-2').src = 'dice-' + dice2 + ".png";



    
// updating the roundscore if the rolled number was Not a 1
// if (dice === 6 && lastDice === 6 ){
//     scores[activePlayer] = 0;
//     ocument.querySelector('#score--' + activePlayer).textContent = '0';
//     nextPlayer();
// }


 if (dice1 !== 1 && dice2 !== 1){
    roundScore += dice1 + dice2;
    // roundScore = roundScore + dice;
    document.querySelector('#current--' + activePlayer).textContent = roundScore;
}
else {
    nextPlayer(); 
}


// lastDice = dice;


}); 


document.querySelector('.btn--hold').addEventListener('click', function() {
scores[activePlayer] += roundScore;
// scores[activePlayer] = scores[activePlayer] + roundScore; 

document.querySelector('#score--' + activePlayer).textContent = scores[activePlayer];


if (scores[activePlayer] >= 100) {
    document.querySelector('#name--' + activePlayer).textcontent = 'winner!';
    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
    document.querySelector('.player player--' + activePlayer).classList.add('winner');
    document.querySelector('.player player--' + activePlayer).classList.remove('active');
}
else {
    nextPlayer();
}

});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    // if(activePlayer === 0){
    //     activePlayer = 1;
    // } else{
    //     activePlayer = 0; 
    // }
    roundScore = 0 ;

    document.getElementById('current--0').textContent ='0';
    document.getElementById('current--1').textContent ='0';

    // document.querySelector(".player--active").classList.toggle('active');
    // document.querySelector(".player--1").classList.toggle('active');

    
    document.getElementById('dice-1').style.display = 'none';
    document.getElementById('dice-2').style.display = 'none';
}


document.querySelector('.btn--new').addEventListener('click', init);

function init() {
scores = [0, 0];
roundScore = 0;
activePlayer = 0;




// dice = Math.floor(Math.random() * 6) + 1;

// document.querySelector('#current--' + activePlayer).textContent = dice;
// we use query selector to manipulates and chaangrs value in our webpage
// document.querySelector('#current--' + activePlayer).innerHTML ='<em>' + dice + '</em>';
// document.getElementById can be used instead of usind query selector

document.getElementById('dice-1').style.display = 'none';
document.getElementById('dice-2').style.display = 'none';

 document.getElementById("score--0").textContent = '0';
 document.getElementById("score--1").textContent = '0';
 document.getElementById("current--0").textContent = '0';
 document.getElementById("current--1").textContent = '0';
 document.getElementById("name--0").textContent = 'player 1';
 document.getElementById("name--1").textContent = 'player 2';


}


// A state variable simply tells us the condition of a system

