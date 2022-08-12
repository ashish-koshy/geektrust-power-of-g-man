const assert = require('assert');
const GeekMan = require('./geek-man/main.js');

describe('GeekManPower', function () {
    it(`should return 155 as available power`, function () {
        const geekManPower = new GeekMan.GeekManPower();
        geekManPower.setSourceParameters(2, 1, 'E');
        geekManPower.setDestinationParameters(4, 3);
        assert.equal(geekManPower.getAvailablePowerUnits(), 155);
    });
    it(`should return 110 as available power`, function () {
        const geekManPower = new GeekMan.GeekManPower();
        geekManPower.setSourceParameters(3, 6, 'N');
        geekManPower.setDestinationParameters(1, 0);
        assert.equal(geekManPower.getAvailablePowerUnits(), 110);
    });
    it(`should return 90 as available power`, function () {
        const geekManPower = new GeekMan.GeekManPower();
        geekManPower.setSourceParameters(0, 5, 'W');
        geekManPower.setDestinationParameters(6, 1);
        assert.equal(geekManPower.getAvailablePowerUnits(), 90);
    });
});
