"use strict";
var _a;
exports.__esModule = true;
exports.GMan = void 0;
var enums_1 = require("./enums");
exports.GMan = {
    directionWeights: (_a = {},
        _a[enums_1.GManDirections.north] = 1,
        _a[enums_1.GManDirections.east] = 2,
        _a[enums_1.GManDirections.south] = 3,
        _a[enums_1.GManDirections.west] = 4,
        _a),
    totalPowerUnits: 200,
    costPerUnitDistance: 10,
    costPerUnitTurn: 5
};
