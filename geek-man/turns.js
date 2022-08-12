"use strict";
exports.__esModule = true;
exports.GeekManTurn = void 0;
var constants_1 = require("./constants");
var enums_1 = require("./enums");
var GeekManTurn = /** @class */ (function () {
    function GeekManTurn() {
    }
    GeekManTurn.getNumberOfTurns = function (sourceDirection, destinationDirection) {
        var sourceTurnWeight = constants_1.GeekManConstraints.directionWeights[sourceDirection];
        var destinationTurnWeight = constants_1.GeekManConstraints.directionWeights[destinationDirection];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    };
    GeekManTurn.getPowerNeededForTurns = function (sourceAbscissa, sourceOrdinate, destinationAbscissa, destinationOrdinate, sourceDirection) {
        var totalTurns = 0;
        var horizontalDistance = destinationAbscissa - sourceAbscissa;
        var horizontalDirection = horizontalDistance < 0 ? enums_1.GeekManDirections.west : enums_1.GeekManDirections.east;
        var verticalDistance = destinationOrdinate - sourceOrdinate;
        var verticalDirection = verticalDistance < 0 ? enums_1.GeekManDirections.south : enums_1.GeekManDirections.north;
        totalTurns += GeekManTurn.getNumberOfTurns(sourceDirection, horizontalDirection);
        totalTurns += GeekManTurn.getNumberOfTurns(sourceDirection, verticalDirection);
        ;
        return totalTurns * constants_1.GeekManConstraints.powerCostPerUnitTurn;
    };
    return GeekManTurn;
}());
exports.GeekManTurn = GeekManTurn;
;
