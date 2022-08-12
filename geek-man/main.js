"use strict";
exports.__esModule = true;
exports.GeekManPower = void 0;
var turns_1 = require("./turns");
var distance_1 = require("./distance");
var constants_1 = require("./constants");
var GeekManPower = /** @class */ (function () {
    function GeekManPower() {
        this.sourceAbscissa = 0;
        this.sourceOrdinate = 0;
        this.destinationAbscissa = 0;
        this.destinationOrdinate = 0;
    }
    GeekManPower.prototype.setSourceParameters = function (sourceAbscissa, sourceOrdinate, direction) {
        this.sourceAbscissa = sourceAbscissa;
        this.sourceOrdinate = sourceOrdinate;
        this.sourceDirection = direction;
    };
    GeekManPower.prototype.setDestinationParameters = function (destinationAbscissa, destinationOrdinate) {
        this.destinationAbscissa = destinationAbscissa;
        this.destinationOrdinate = destinationOrdinate;
    };
    GeekManPower.prototype.getAvailablePowerUnits = function () {
        var powerNeededForDistance = distance_1.GeekManDistance.getPowerNeededForDistance(this.sourceAbscissa, this.sourceOrdinate, this.destinationAbscissa, this.destinationOrdinate);
        var powerNeededForTurns = turns_1.GeekManTurn.getPowerNeededForTurns(this.sourceAbscissa, this.sourceOrdinate, this.destinationAbscissa, this.destinationOrdinate, this.sourceDirection);
        var totalPowerNeeded = powerNeededForDistance + powerNeededForTurns;
        return constants_1.GeekManConstraints.totalPowerUnits - totalPowerNeeded;
    };
    return GeekManPower;
}());
exports.GeekManPower = GeekManPower;
;
