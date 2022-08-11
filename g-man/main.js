"use strict";
exports.__esModule = true;
exports.GManPower = void 0;
var constants_1 = require("./constants");
var enums_1 = require("./enums");
var GManPower = /** @class */ (function () {
    function GManPower() {
        this.sourceXCoordinate = 0;
        this.sourceYCoordinate = 0;
        this.destinationXCoordinate = 0;
        this.destinationYCoordinate = 0;
    }
    GManPower.prototype.getTurn = function (destinationDirection) {
        var sourceTurnWeight = constants_1.GMan.directionWeights[this.sourceDirection];
        var destinationTurnWeight = constants_1.GMan.directionWeights[destinationDirection];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    };
    GManPower.prototype.getPowerUnitsRequiredForTurns = function () {
        var totalTurns = 0;
        var horizontalDistance = this.destinationXCoordinate - this.sourceXCoordinate;
        var horizontalDirection = horizontalDistance < 0 ? enums_1.GManDirections.west : enums_1.GManDirections.east;
        var verticalDistance = this.destinationYCoordinate - this.sourceYCoordinate;
        var verticalDirection = verticalDistance < 0 ? enums_1.GManDirections.south : enums_1.GManDirections.north;
        totalTurns += this.getTurn(horizontalDirection);
        totalTurns += this.getTurn(verticalDirection);
        return totalTurns * constants_1.GMan.costPerUnitTurn;
    };
    GManPower.prototype.getPowerUnitsRequiredForDistance = function () {
        var absoluteHorizontalDistance = Math.abs(this.destinationXCoordinate - this.sourceXCoordinate);
        var absoluteVerticalDistance = Math.abs(this.destinationYCoordinate - this.sourceYCoordinate);
        var totalDistance = (absoluteHorizontalDistance + absoluteVerticalDistance);
        return totalDistance * constants_1.GMan.costPerUnitDistance;
    };
    GManPower.prototype.setSourceParameters = function (xCoordinate, yCoordinate, direction) {
        this.sourceXCoordinate = xCoordinate;
        this.sourceYCoordinate = yCoordinate;
        this.sourceDirection = direction;
    };
    GManPower.prototype.setDestinationParameters = function (xCoordinate, yCoordinate) {
        this.destinationXCoordinate = xCoordinate;
        this.destinationYCoordinate = yCoordinate;
    };
    GManPower.prototype.getAvailablePowerUnits = function () {
        var totalPowerUnitsRequired = (this.getPowerUnitsRequiredForTurns() + this.getPowerUnitsRequiredForDistance());
        return constants_1.GMan.totalPowerUnits - totalPowerUnitsRequired;
    };
    return GManPower;
}());
exports.GManPower = GManPower;
;
