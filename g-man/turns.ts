import { GManConstraints } from './constants';
import { GManDirections } from './enums';

export abstract class GManTurn {
    private static getNumberOfTurns(source: GManDirections, destination: GManDirections): number {
        const sourceTurnWeight = GManConstraints.directionWeights[source];
        const destinationTurnWeight = GManConstraints.directionWeights[destination];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    }
    public static getPowerNeededForTurns(
        sourceX: number, 
        sourceY: number, 
        destinationX: number, 
        destinationY: number,
        sourceDirection: GManDirections
    ): number {
        let totalTurns = 0;
        const horizontalDistance = destinationX - sourceX;
        const horizontalDirection = horizontalDistance < 0 ? GManDirections.west : GManDirections.east;
        const verticalDistance = destinationY - sourceY;
        const verticalDirection = verticalDistance < 0 ? GManDirections.south : GManDirections.north;
        totalTurns += GManTurn.getNumberOfTurns(sourceDirection, horizontalDirection);
        totalTurns += GManTurn.getNumberOfTurns(sourceDirection, verticalDirection);;
        return totalTurns * GManConstraints.powerCostPerUnitTurn;
    }
};