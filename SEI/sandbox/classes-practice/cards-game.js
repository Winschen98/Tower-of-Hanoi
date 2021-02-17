class Card {
    constructor (suits, rank, score){
    this.suits = suits;
    this.rank = rank;
    this.score = score;
    }
};



//  ========== 

class Deck {
    constructor(length=52){
        this.length = length; 
        this.cards = []; 
        const suits = ['Diamonds', 'Clubs', 'Hearts', 'Spades'];
        const ranks = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king'];
        const scores = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]; 

        // createDeck(){
            for(let i=0; i < suits.length; i++){
                for(let j=0; j < ranks.length; j++){
                    this.cards.push(new Card(suits[i], ranks[j], scores[j]));
                }
            }
        
    }
    
    draw(){
        const randNum = Math.floor((Math.random()*this.length)+1);
        return this.cards[randNum];
    }
}

let myDeck = new Deck(); 
console.log(myDeck);