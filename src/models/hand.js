export default class Hand {
    constructor(config) {
        this.cards = config.cards;
        this.limit = config.limit;
    }
    addCard(card, allCard) {
        if (allCard.length > 7) {
            return false;
        } else {
            allCard.push(card);
            return true;
        }
    }
    removeCard(position) {
        if (this.cards.length === 0) {
            return false
        } else {
            const cardSuppr = this.cards.splice(position, 1);
            return cardSuppr;
        }
    }
    getAllCards() {
        return this.cards;
    }
    getCardsCount() {
        return this.cards.length;
    }
}