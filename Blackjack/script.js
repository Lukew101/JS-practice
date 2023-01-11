const values = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const suits = ['♠', '♥', '♣', '♦'];

let allDecks = [];
let dealerHand = [];
let playerHand = [];

const cardModel = document.createElement('div');
cardModel.classList.add('card');

const dealer = document.getElementById("dealer");
const player = document.getElementById("player");
const hit = document.getElementById("hit");
const pass = document.getElementById("pass");
const buttonContainer = document.getElementById("button-container");
const notice = document.getElementById("notice");
const nextHand = document.getElementById("next-hand");

// Deck of cards - 52 cards 13*4
// Shuffle several decks
// Select random card
// Deal hands to dealer and player
//Hide one of dealers cards
//Option to hit or pass
//If hit, add cards
//If pass, let dealer play
//Determine winner
//Deal next hand

const createDeck = ()=>{
    const deck = [];
    suits.forEach((value)=>{
        values.forEach((suit)=>{
            const card = value + suit;
            deck.push(card);
        })
    })
    return deck;
};

const shuffleDecks = (num)=>{
    for(let i=0; i< num; i++){
        const newDeck = createDeck();
        allDecks = [...allDecks, ...newDeck];
    }
};

const selectRandomCard = ()=>{
    const randomIndex = Math.floor(Math.random() * allDecks.length);
    const card = allDecks[randomIndex];
    allDecks.splice(randomIndex, 1);
    return card;
};

shuffleDecks(5);
const randomCard = selectRandomCard();
console.log(randomCard);
console.log(allDecks);