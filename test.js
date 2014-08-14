describe('dot', function () {
    var dot;

    beforeEach(function () {
        dot = require('./index.js');
    });

    it('should pull an objects value', function () {
        var person = {name: 'Mike'};
        var name = dot('name');
        expect(name(person)).toEqual('Mike');
    });
});