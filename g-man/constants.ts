import { GManDirections } from './enums';

export const GManConstraints = {
    totalPowerUnits: 200,
    directionWeights: {
        [GManDirections.north]: 1, 
        [GManDirections.east]: 2, 
        [GManDirections.south]: 3, 
        [GManDirections.west]: 4 
    },
    powerCostPerUnitDistance: 10,
    powerCostPerUnitTurn: 5
}


