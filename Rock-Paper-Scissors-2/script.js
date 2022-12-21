const gameOptions = [
    {name:'Rock',beats:'Scissors',icon: '<i class="far fa-hand-rock"></i>'},
    {name:'Paper',beats:'Rock',icon: '<i class="far fa-hand-paper"></i>'},
    {name:'Scissors',beats:'Paper',icon: '<i class="far fa-hand-scissors"></i>'},
];
const gameContainer = document.querySelector('.game');
const playButton = document.querySelector('.play');

gameOptions.forEach(function(option){
    gameContainer.innerHTML += `<input type="radio" name="option" class="option" data-beats=${option.beats} id="${option.name}"><label for="${option.name}">${option.icon}</label>`;
});

playButton.onclick = function() {
    gameContainer.style.display = 'block';
};