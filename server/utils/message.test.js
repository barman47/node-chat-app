var expect =  require('expect');

var {generateMessage, generateLocationMessage} = require('./message');
describe('generateMessage', () => {
    it('Should geberate the correct message object', () => {
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from, text});
    });

});

describe('generateLocationMessage', () => {
    it('Should generate correct location objection', () => {
        var from  = 'Admin';
        var lat = 15;
        var long = 19;
        var url = 'https://www.google.com/maps?q=15,19';
        var message = generateLocationMessage(from, lat, long);

        expect(message.createdAt).toBeA('number');
        expect(message).toInclude(from, url);
    });
});