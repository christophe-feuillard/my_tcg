"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Hand = function () {
    function Hand(config) {
        _classCallCheck(this, Hand);

        this.cards = config.cards;
        this.limit = config.limit;
    }

    _createClass(Hand, [{
        key: "addCard",
        value: function addCard(card, allCard) {
            if (allCard.length > 7) {
                return false;
            } else {
                allCard.push(card);
                return true;
            }
        }
    }, {
        key: "removeCard",
        value: function removeCard(position) {
            if (this.cards.length === 0) {
                return false;
            } else {
                var cardSuppr = this.cards.splice(position, 1);
                return cardSuppr;
            }
        }
    }, {
        key: "getAllCards",
        value: function getAllCards() {
            return this.cards;
        }
    }, {
        key: "getCardsCount",
        value: function getCardsCount() {
            return this.cards.length;
        }
    }]);

    return Hand;
}();

exports.default = Hand;