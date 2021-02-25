var scores, roundScore, activePlayer, dice, gamePlaying, winningScore;

init();

// nouveau jeu
document.querySelector('.button_new').addEventListener('click', init);

function init() {
    scores = [0, 0]
    activePlayer = 0;
    roundScore = 0;
    winningScore = 100;
    gamePlaying = true;

    document.getElementById('round_score0').textContent = '0';
    document.getElementById('round_score1').textContent = '0';
    document.getElementById('current0').textContent = '0';
    document.getElementById('current1').textContent = '0';
    document.querySelector('#name0').textContent = 'Player 1';
    document.querySelector('#name1').textContent = 'Player 2';

}

// evenement clic sur bouton roll
document.querySelector('.button_roll').addEventListener('click', function() {
    if (gamePlaying) {
        var dice = Math.floor(Math.random() * 6) + 1;

        document.getElementById('dice').style.display = 'block';
        document.getElementById('dice').src = 'Images/dice' + dice + '.png';
 
        if (dice !== 1) {
            roundScore += dice;
            document.querySelector('#current' + activePlayer).textContent = roundScore;
        } else {
            nextPlayer();
        }
    }

});

// evenement clic sur hold
document.querySelector('.button_hold').addEventListener('click', function() {
    if (gamePlaying) {
        scores[activePlayer] += roundScore;

        document.querySelector('#round_score' + activePlayer).textContent = scores[activePlayer];

        if (scores[activePlayer] >= winningScore) {
            document.querySelector('#name' + activePlayer).textContent = 'Gagné !';
            
            gamePlaying = false;
        } else {
            nextPlayer();
        }
    }
})

// joueur suivant
function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;

    document.getElementById('current0').textContent = '0';
    document.getElementById('current1').textContent = '0';
}

