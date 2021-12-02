var text = 'test your luck. choose a box. win a prize';
var winText = 'Congratulations! You Win!';

// Create an Array of at least 3 losing messages
var losingMessages = [
    'Great attempt, but please try again!',
    'Not that one, try again!',
    'Let\'s\ try that again'
]

// Create variables to count wins and losses
var numOfWins = 0;
var numOfLosses = 0;

// Create variables that target elements with the following IDs: 'message', 'wins', 'losses'
var mElement = document.querySelector('#messages');
var wElement = document.querySelector('#wins');
var lElement = document.querySelector('#losses');

// target all .box elements and attach a click event listener to each one using a loop
var boxElement = document.querySelectorAll('.box');

for (var i = 0; i < boxElement.length; i++) {
    boxElements = boxElement[i];
    // within each click event...
    // determine which box was clicked with 'this.textContent' or event.target.textContent
    // convert that value to a Number and store it to a variable
    boxElements.onclick = function(event) {
        var boxClick = Number(event.target.textContent);
        console.log(parseInt(boxClick, 10))

        // create a random number between 1-3 and store it to a variable
        var randomNum = Math.floor((Math.random() * 3) + 1);
        console.log(randomNum);
        
        // This number will represent the winning box
        
        // determine if the box clicked is equal to the random number
        // if the numbers match, display a winning message by changing the text content of the div#message element
        // if the numbers match, increment wins and display the win count in div#wins
        var divMessage = document.getElementById('message');
        var wins = document.getElementById('wins');
        var losses = document.getElementById('losses');
        if (boxClick == randomNum) {
            divMessage.innerHTML = winText;
            numOfWins++;
            wins.innerHTML = 'Wins: ' + numOfWins;

        } else {
            divMessage.innerHTML = losingMessages[Math.floor((Math.random() * 3))];
            numOfLosses++;
            losses.innerHTML = 'Losses: ' + numOfLosses;
        }
    };
}


// if the numbers don't match, change the div#message element's text to a random losing message from the array above
// if the numbers don't match, increment losses and display the loss count in div#losses