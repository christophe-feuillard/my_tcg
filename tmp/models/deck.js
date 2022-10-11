"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Deck = function () {
    function Deck(config) {
        _classCallCheck(this, Deck);

        this.config = config;
        this.cards = this.config.cards;
        // this.cards = deck
    }

    _createClass(Deck, [{
        key: "insertAt",
        value: function insertAt(card, position) {
            if (position === 0) {
                this.cards.push(card);
                return false;
            } else {
                this.cards.splice(position, 0, card);
                return true;
            }
        }
    }, {
        key: "shuffle",
        value: function shuffle() {
            if (this.cards.length == 0) {
                return false;
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
    }, {
        key: "draw",
        value: function draw() {
            if (this.cards.length == 0) {
                // NaN == not a number
                return false;
            } else {
                var firstCard = this.cards.shift();
                return firstCard;
            }
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            var deckCardLength = this.cards.length;
            return deckCardLength;
        }
    }]);

    return Deck;
}();

exports.default = Deck;