
export default class Deck {
    
    constructor (config) {
        this.config = config
        this.cards = this.config.cards
        // this.cards = deck
    }
    insertAt(card, position) {
        if (position === 0) {
            this.cards.push(card);
            return false
        } else {
            this.cards.splice(position, 0, card);
            return true
        }
    }
    shuffle () {
        if (this.cards.length == 0) { 
            return false
        } else {
            for (var i = this.cards.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = this.cards[i];
                this.cards[i] = this.cards[j];
                this.cards[j] = temp;
            }
            return true;
        }
    }
    draw () {
        if (this.cards.length == 0) { // NaN == not a number
            return false
        } else {
            let firstCard = this.cards.shift();
            return firstCard;
        }
    }
    getCardsCount () {
        const deckCardLength = this.cards.length;
        return deckCardLength;
    }
}
