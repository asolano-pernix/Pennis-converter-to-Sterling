'use strict';

describe('Convert service testing', function() {

    beforeEach(module('myApp'));

    describe('Service function', function(){

        it('Test calculate function.Show the value of the pennis introduce', inject(function(convertService) {
            console.log(convertService.calculate('123'));
        }));

        it('Test checkInput function.Show the transformation of the input that the user',inject(function (convertService) {
            expect(convertService.checkInput('4')).toBe(4);
            expect(convertService.checkInput('85')).toBe(85);
            expect(convertService.checkInput('197p')).toBe(197);
            expect(convertService.checkInput('2p')).toBe(2);
            expect(convertService.checkInput('1.87')).toBe(187);
            expect(convertService.checkInput('£1.23')).toBe(123);
            expect(convertService.checkInput('£2')).toBe(200);
            expect(convertService.checkInput('£10')).toBe(1000);
            expect(convertService.checkInput('£1.87p')).toBe(187);
            expect(convertService.checkInput('£1.p')).toBe(100);
            expect(convertService.checkInput('001.41p')).toBe(141);
            expect(convertService.checkInput('4.235p')).toBe(424);
            expect(convertService.checkInput('£1.257422457p')).toBe(126);
        }));



    });
});
