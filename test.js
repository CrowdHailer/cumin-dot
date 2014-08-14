describe('dot', function () {
    'use strict';

    var dot, person;

    beforeEach(function () {
        dot = require('./index.js');
        person = {name: 'Mike'};
    });

    it('should pull an objects value, curried', function () {
        var name = dot('name');
        expect(name(person)).toEqual('Mike');
    });
});