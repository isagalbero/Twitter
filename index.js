var yourTextHere = document.querySelector('#tweetArea');
var displayTweet = document.querySelector('.showTweet');
var theButton = document.querySelector('#btn');


function getText() {
    var newDiv = document.createElement('div');
    var newParagraph = document.createElement('p');
    var newCalendar = document.createElement('small');
    newCalendar.classList.add('hour');
    newDiv.classList.add('text');
    newCalendar.textContent = moment().format('MMMM Do YYYY, HH:mm');;
    newParagraph.textContent = yourTextHere.value;
    displayTweet.prepend(newDiv);
    newDiv.appendChild(newParagraph);
    newDiv.appendChild(newCalendar);
    yourTextHere.value = '';
    event.preventDefault();
    document.getElementById('totalChar').textContent = '140';
    newDiv.style = 'background-color: white';
}

theButton.addEventListener('click', getText);

function countDown() {
    var char = document.getElementById('tweetArea').value;
    var charCount = 140 - char.length;
    document.getElementById('totalChar').innerHTML = charCount;
    if(char.length == 140){
        document.getElementById('totalChar').style.color = 'white';
    } 
    if(char.length >= 120){
        document.getElementById('totalChar').style.color = 'yellow';
    } 
    if(char.length >= 130){
        document.getElementById('totalChar').style.color = 'orange';
    }
    if(char.length > 140){
        document.getElementById('totalChar').style.color = 'red';
    }
}

yourTextHere.addEventListener('keyup', countDown);
yourTextHere.addEventListener('keypress', countDown);

function ableBtn() {
    if(document.getElementById('tweetArea').value == '' ||              document.getElementById('tweetArea').value.length > 140) {
        document.getElementById('btn').disabled = true;
        document.getElementById('btn').style = 'opacity: 0.5';
    } else {
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style = 'opacity: 1';
    }
}

yourTextHere.addEventListener('keydown', ableBtn);
yourTextHere.addEventListener('keyup', ableBtn);