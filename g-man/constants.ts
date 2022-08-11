import { GManDirections } from './enums';

export const GMan = {
    directionWeights: {
        [GManDirections.north]: 1, 
        [GManDirections.east]: 2, 
        [GManDirections.south]: 3, 
        [GManDirections.west]: 4 
    },
    totalPowerUnits: 200,
    costPerUnitDistance: 10,
    costPerUnitTurn: 5
}


