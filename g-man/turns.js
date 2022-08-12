"use strict";
exports.__esModule = true;
exports.GManTurn = void 0;
var constants_1 = require("./constants");
var enums_1 = require("./enums");
var GManTurn = /** @class */ (function () {
    function GManTurn() {
    }
    GManTurn.getNumberOfTurns = function (source, destination) {
        var sourceTurnWeight = constants_1.GManConstraints.directionWeights[source];
        var destinationTurnWeight = constants_1.GManConstraints.directionWeights[destination];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    };
    GManTurn.getPowerNeededForTurns = function (sourceX, sourceY, destinationX, destinationY, sourceDirection) {
        var totalTurns = 0;
        var horizontalDistance = destinationX - sourceX;
        var horizontalDirection = horizontalDistance < 0 ? enums_1.GManDirections.west : enums_1.GManDirections.east;
        var verticalDistance = destinationY - sourceY;
        var verticalDirection = verticalDistance < 0 ? enums_1.GManDirections.south : enums_1.GManDirections.north;
        totalTurns += GManTurn.getNumberOfTurns(sourceDirection, horizontalDirection);
        totalTurns += GManTurn.getNumberOfTurns(sourceDirection, verticalDirection);
        ;
        return totalTurns * constants_1.GManConstraints.powerCostPerUnitTurn;
    };
    return GManTurn;
}());
exports.GManTurn = GManTurn;
;
