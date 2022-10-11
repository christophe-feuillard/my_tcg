import Deck from '../src/models/deck';

describe('Deck', () => { 

    describe('shuffle', function () {
        it("check if deck empty", function () {
            const config = { cards: [] }
            let deck = new Deck(config);
            expect(deck.shuffle()).toBe(false);
        });
        it("check if deck shuffle", function () {
            const config2 = { cards: [1, 2, 3, 4] };
            let deck = new Deck(config2);
            expect(deck.shuffle()).toBe(true);
        });
    })
    describe("draw", function () {
        it("return false if deck empty", function () {
            const config = { cards: [] }
            let deck = new Deck(config);
            expect(deck.draw()).toBe(false);
        });
        it("everything is good", function () {
            const config2 = { cards: [1, 2, 3, 4] }
            const resultat = 1;
            let deck = new Deck(config2);
            expect(deck.draw()).toBe(resultat);
        });
    });
    describe("insertAt", function () {
        it("doit retourner false comme la position est de 0", function () {
            const config = { cards: [1, 2, 3, 4] }
            let deck = new Deck(config);
            expect(deck.insertAt(667, 0)).toBe(false);
        });
        it("doit s'executer normalement", function () {
            const config = { cards: [1, 2, 3, 4] }
            let deck = new Deck(config);
            expect(deck.insertAt(667, 2)).toBe(true);
        });
    });
    describe("getCardCount", function () {
        it("everything is good", function () {
            const config = { cards: [1, 2, 3, 4] }
            const resultat = 4;
            let deck = new Deck(config);
            expect(deck.getCardsCount()).toBe(resultat);
        });
    });
    
})
