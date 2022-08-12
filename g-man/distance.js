"use strict";
exports.__esModule = true;
exports.GManDistance = void 0;
var constants_1 = require("./constants");
var GManDistance = /** @class */ (function () {
    function GManDistance() {
    }
    GManDistance.getPowerNeededForDistance = function (sourceX, sourceY, destinationX, destinationY) {
        var horizontalDistance = Math.abs(destinationX - sourceX);
        var verticalDistance = Math.abs(destinationY - sourceY);
        var totalDistance = (horizontalDistance + verticalDistance);
        return totalDistance * constants_1.GManConstraints.powerCostPerUnitDistance;
    };
    return GManDistance;
}());
exports.GManDistance = GManDistance;
;
