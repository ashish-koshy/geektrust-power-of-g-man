"use strict";
var _a;
exports.__esModule = true;
exports.GeekManConstraints = void 0;
var enums_1 = require("./enums");
exports.GeekManConstraints = {
    totalPowerUnits: 200,
    directionWeights: (_a = {},
        _a[enums_1.GeekManDirections.north] = 1,
        _a[enums_1.GeekManDirections.east] = 2,
        _a[enums_1.GeekManDirections.south] = 3,
        _a[enums_1.GeekManDirections.west] = 4,
        _a),
    powerCostPerUnitDistance: 10,
    powerCostPerUnitTurn: 5
};
