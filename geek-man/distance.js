"use strict";
exports.__esModule = true;
exports.GeekManDistance = void 0;
var constants_1 = require("./constants");
var GeekManDistance = /** @class */ (function () {
    function GeekManDistance() {
    }
    GeekManDistance.getPowerNeededForDistance = function (sourceAbscissa, sourceOrdinate, destinationAbscissa, destinationOrdinate) {
        var horizontalDistance = Math.abs(destinationAbscissa - sourceAbscissa);
        var verticalDistance = Math.abs(destinationOrdinate - sourceOrdinate);
        var totalDistance = (horizontalDistance + verticalDistance);
        return totalDistance * constants_1.GeekManConstraints.powerCostPerUnitDistance;
    };
    return GeekManDistance;
}());
exports.GeekManDistance = GeekManDistance;
;
