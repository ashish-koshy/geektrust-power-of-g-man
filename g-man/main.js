"use strict";
exports.__esModule = true;
exports.GManPower = void 0;
var distance_1 = require("./distance");
var constants_1 = require("./constants");
var turns_1 = require("./turns");
var GManPower = /** @class */ (function () {
    function GManPower() {
        this.sourceX = 0;
        this.sourceY = 0;
        this.destinationX = 0;
        this.destinationY = 0;
    }
    GManPower.prototype.setSourceParameters = function (xCoordinate, yCoordinate, direction) {
        this.sourceX = xCoordinate;
        this.sourceY = yCoordinate;
        this.sourceDirection = direction;
    };
    GManPower.prototype.setDestinationParameters = function (xCoordinate, yCoordinate) {
        this.destinationX = xCoordinate;
        this.destinationY = yCoordinate;
    };
    GManPower.prototype.getAvailablePowerUnits = function () {
        var powerNeededForDistance = distance_1.GManDistance.getPowerNeededForDistance(this.sourceX, this.sourceY, this.destinationX, this.destinationY);
        var powerNeededForTurns = turns_1.GManTurn.getPowerNeededForTurns(this.sourceX, this.sourceY, this.destinationX, this.destinationY, this.sourceDirection);
        var totalPowerNeeded = powerNeededForDistance + powerNeededForTurns;
        return constants_1.GManConstraints.totalPowerUnits - totalPowerNeeded;
    };
    return GManPower;
}());
exports.GManPower = GManPower;
;
