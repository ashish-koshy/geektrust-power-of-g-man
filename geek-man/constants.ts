import { GeekManDirections } from './enums';

export const GeekManConstraints = {
    totalPowerUnits: 200,
    directionWeights: {
        [GeekManDirections.north]: 1, 
        [GeekManDirections.east]: 2, 
        [GeekManDirections.south]: 3, 
        [GeekManDirections.west]: 4 
    },
    powerCostPerUnitDistance: 10,
    powerCostPerUnitTurn: 5
};