var score, roundScore, activePlayer, gamePlaying;

init();

//Roll Button

document.querySelector('.btn-roll').addEventListener('click', function () {

    if (gamePlaying) {
        //Generate Random number

        var dice1 = Math.floor(Math.random() * 6) + 1;
        var dice2 = Math.floor(Math.random() * 6) + 1;


        //Display the result
        var diceDom1 = document.querySelector('#dice-1');
        var diceDom2 = document.querySelector('#dice-2');
        diceDom1.src = 'dice-' + dice1 + '.png';
        diceDom2.src = 'dice-' + dice2 + '.png';

        //Add to roundscore if dice rolled is not 1
        if (dice1 === 1 || dice2 === 1) {
            nextPlayer();
        }
        else {
            roundScore += dice1 + dice2;
            document.querySelector('#current-' + activePlayer).textContent = roundScore;
            //next player

        }
    }
})


//Hold Button

document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamePlaying) {
        //Add current score to global score
        score[activePlayer] += roundScore;

        //Update UI
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];

        //Check if player won the game
        var input = document.querySelector('.final-score').value;
        //Undefined, 0, null are coerced to false
        var winningScore;
        if (input) {
            winningScore = input;
        }
        else {
            winningScore = 50;
        }
        if (score[activePlayer] >= winningScore) {
            gamePlaying = false;
            document.querySelector('#name-' + activePlayer).textContent = 'Winner!';

            document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
            document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');

        } else {
            //NextPlayer
            nextPlayer();
        }

    }
})

//New Button

document.querySelector('.btn-new').addEventListener('click', init);

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.querySelector('#current-1').textContent = '0';
    document.querySelector('#current-0').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
}

function init() {
    gamePlaying = true;
    score = [0, 0];
    roundScore = 0;
    activePlayer = 0;


    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.querySelector('#name-0').textContent = 'PLAYER 1';
    document.querySelector('#name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');

}