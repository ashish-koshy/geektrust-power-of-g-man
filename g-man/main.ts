import { GMan } from './constants';
import { GManDirections } from './enums';

export class GManPower {
    private sourceXCoordinate = 0; 
    private sourceYCoordinate = 0; 
    private destinationXCoordinate = 0; 
    private destinationYCoordinate = 0;
    private sourceDirection!: GManDirections;

    private getTurn(destinationDirection: GManDirections): number {
        const sourceTurnWeight = GMan.directionWeights[this.sourceDirection];
        const destinationTurnWeight = GMan.directionWeights[destinationDirection];
        return Math.abs(sourceTurnWeight - destinationTurnWeight) == 0 ? 0 : 1;
    }

    private getPowerUnitsRequiredForTurns(): number {
        let totalTurns = 0;
        const horizontalDistance = this.destinationXCoordinate - this.sourceXCoordinate;
        const horizontalDirection = horizontalDistance < 0 ? GManDirections.west : GManDirections.east;
        const verticalDistance = this.destinationYCoordinate - this.sourceYCoordinate;
        const verticalDirection = verticalDistance < 0 ? GManDirections.south : GManDirections.north;
        totalTurns += this.getTurn(horizontalDirection);
        totalTurns += this.getTurn(verticalDirection);
        return totalTurns * GMan.costPerUnitTurn;
    }    
    private getPowerUnitsRequiredForDistance(): number {
        const absoluteHorizontalDistance = Math.abs(this.destinationXCoordinate - this.sourceXCoordinate);
        const absoluteVerticalDistance = Math.abs(this.destinationYCoordinate - this.sourceYCoordinate);
        const totalDistance = (absoluteHorizontalDistance + absoluteVerticalDistance);
        return totalDistance * GMan.costPerUnitDistance;
    }

    public setSourceParameters(
        xCoordinate: number, 
        yCoordinate: number, 
        direction: GManDirections
    ): void {
        this.sourceXCoordinate = xCoordinate;
        this.sourceYCoordinate = yCoordinate;
        this.sourceDirection = direction;
    }
    public setDestinationParameters(
        xCoordinate: number, 
        yCoordinate: number
    ): void {
        this.destinationXCoordinate = xCoordinate;
        this.destinationYCoordinate = yCoordinate;
    }
    public getAvailablePowerUnits(): number {
        const totalPowerUnitsRequired 
            = (this.getPowerUnitsRequiredForTurns() + this.getPowerUnitsRequiredForDistance());
        return GMan.totalPowerUnits - totalPowerUnitsRequired;
    }
};