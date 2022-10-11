import Hand from '../src/models/hand';


describe('hand', function () {

    describe('addCard', function () {
        it('tout est bon', function () {
            const config = ['test1', 'test2', 'test3'];
            let hand = new Hand(config);
            expect(hand.addCard('test', config)).toBe(true);
        });
        it('return false si la main est full', function () {
            const config = ['a', 'a', 'a', 'a', 'a', 'a', 'a', 'a'];
            let hand = new Hand(config);
            expect(hand.addCard('test', config)).toBe(false);
        });
    });


});