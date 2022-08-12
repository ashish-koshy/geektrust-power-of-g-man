import { GeekManConstraints } from './constants';

export abstract class GeekManDistance {
    public static getPowerNeededForDistance(
        sourceAbscissa: number, 
        sourceOrdinate: number, 
        destinationAbscissa: number, 
        destinationOrdinate: number
    ): number {
        const horizontalDistance = Math.abs(destinationAbscissa - sourceAbscissa);
        const verticalDistance = Math.abs(destinationOrdinate - sourceOrdinate);
        const totalDistance = (horizontalDistance + verticalDistance);
        return totalDistance * GeekManConstraints.powerCostPerUnitDistance;
    }
};