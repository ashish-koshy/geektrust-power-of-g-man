const assert = require('assert');
const GMan = require('./g-man/main.js');

describe('GManPower', function () {
    it(`should return 155 as available power`, function () {
        const gManPower = new GMan.GManPower();
        gManPower.setSourceParameters(2, 1, 'E');
        gManPower.setDestinationParameters(4, 3);
        assert.equal(gManPower.getAvailablePowerUnits(), 155);
    });
    it(`should return 110 as available power`, function () {
        const gManPower = new GMan.GManPower();
        gManPower.setSourceParameters(3, 6, 'N');
        gManPower.setDestinationParameters(1, 0);
        assert.equal(gManPower.getAvailablePowerUnits(), 110);
    });
    it(`should return 90 as available power`, function () {
        const gManPower = new GMan.GManPower();
        gManPower.setSourceParameters(0, 5, 'W');
        gManPower.setDestinationParameters(6, 1);
        assert.equal(gManPower.getAvailablePowerUnits(), 90);
    });
});
