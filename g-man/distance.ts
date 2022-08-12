import { GManConstraints } from './constants';

export abstract class GManDistance {
    public static getPowerNeededForDistance(
        sourceX: number, 
        sourceY: number, 
        destinationX: number, 
        destinationY: number
    ): number {
        const horizontalDistance = Math.abs(destinationX - sourceX);
        const verticalDistance = Math.abs(destinationY - sourceY);
        const totalDistance = (horizontalDistance + verticalDistance);
        return totalDistance * GManConstraints.powerCostPerUnitDistance;
    }
};