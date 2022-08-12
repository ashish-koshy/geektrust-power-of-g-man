import { GeekManConstraints } from './constants';
import { GeekManDirections } from './enums';

export abstract class GeekManTurn {
    private static getNumberOfTurns(
        sourceDirection: GeekManDirections, 
        destinationDirection: GeekManDirections
    ): number {
        const sourceTurnWeight = GeekManConstraints.directionWeights[sourceDirection];
        const destinationTurnWeight = GeekManConstraints.directionWeights[destinationDirection];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    }
    
    public static getPowerNeededForTurns(
        sourceAbscissa: number, 
        sourceOrdinate: number, 
        destinationAbscissa: number, 
        destinationOrdinate: number,
        sourceDirection: GeekManDirections
    ): number {
        let totalTurns = 0;
        const horizontalDistance = destinationAbscissa - sourceAbscissa;
        const horizontalDirection = horizontalDistance < 0 ? GeekManDirections.west : GeekManDirections.east;
        const verticalDistance = destinationOrdinate - sourceOrdinate;
        const verticalDirection = verticalDistance < 0 ? GeekManDirections.south : GeekManDirections.north;
        totalTurns += GeekManTurn.getNumberOfTurns(sourceDirection, horizontalDirection);
        totalTurns += GeekManTurn.getNumberOfTurns(sourceDirection, verticalDirection);;
        return totalTurns * GeekManConstraints.powerCostPerUnitTurn;
    }
};