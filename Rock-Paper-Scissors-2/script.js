const gameOptions = [
    {name:'Rock',beats:'Scissors',icon: '<i class="far fa-hand-rock"></i>'},
    {name:'Paper',beats:'Rock',icon: '<i class="far fa-hand-paper"></i>'},
    {name:'Scissors',beats:'Paper',icon: '<i class="far fa-hand-scissors"></i>'},
];
const gameContainer = document.querySelector('.game');
const playButton = document.querySelector('.play');
const counter = document.querySelector('.counter');
const result = document.querySelector('.result');

gameOptions.forEach(function(option){
    gameContainer.innerHTML += `<input type="radio" name="option" class="option" data-beats=${option.beats} id="${option.name}"><label for="${option.name}">${option.icon}</label>`;
});

playButton.onclick = function() {
    if(document.querySelector("input[name='option']:checked")){
        document.querySelector("input[name='option']:checked").checked
    };
    result.innerHTML = "";
    gameContainer.style.display = 'block';
    let arrayItem = 0;
    const timer = setInterval(function(){
        counter.innerHTML = `"${gameOptions[arrayItem].name}"`
        if(arrayItem === gameOptions.length -1){
            clearInterval(timer);
        }
        arrayItem++;
    }, 1000);

    setTimeout(function(){
        counter.innerHTML="";
        const randomNumber = Math.floor(Math.random() * 3);
        const computerChoice = gameOptions[randomNumber].name

        if(document.querySelector("input[name='option']:checked")){
            const selection = document.querySelector("input[name='option']:checked");
            result.innerHTML = `<p>You chose ${selection.id}. The computer chose ${computerChoice}.</p>`;
        if(selection.id === computerChoice){
            result.innerHTML += `<p class="tie">It was a tie. you both played ${selection.id}</p>`;
        }
        else if(selection.dataset.beats === computerChoice){
            result.innerHTML += `<p class="won">You won! ${selection.id} beats ${computerChoice}.</p>`;
        }
        else{
            result.innerHTML += `<p class="lost">You lost.... ${computerChoice} beats ${selection.id}.</p>`;
        }
        }
        else{
            result.innerHTML = "<p>Please choose an option.</p>";
        }
    }, 4000);
}