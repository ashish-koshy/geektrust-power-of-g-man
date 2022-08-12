import { GManDirections } from './enums';
import { GManDistance } from './distance';
import { GManConstraints } from './constants';
import { GManTurn } from './turns';

export class GManPower {
    private sourceX = 0; 
    private sourceY = 0; 
    private destinationX = 0; 
    private destinationY = 0;
    private sourceDirection!: GManDirections;

    public setSourceParameters(
        xCoordinate: number, 
        yCoordinate: number, 
        direction: GManDirections
    ): void {
        this.sourceX = xCoordinate;
        this.sourceY = yCoordinate;
        this.sourceDirection = direction;
    }

    public setDestinationParameters(
        xCoordinate: number, 
        yCoordinate: number
    ): void {
        this.destinationX = xCoordinate;
        this.destinationY = yCoordinate;
    }

    public getAvailablePowerUnits(): number {
        const powerNeededForDistance 
            = GManDistance.getPowerNeededForDistance(
                this.sourceX,
                this.sourceY,
                this.destinationX,
                this.destinationY
            );
        const powerNeededForTurns 
            = GManTurn.getPowerNeededForTurns(
                this.sourceX,
                this.sourceY,
                this.destinationX,
                this.destinationY,
                this.sourceDirection
            );
        const totalPowerNeeded = powerNeededForDistance + powerNeededForTurns;
        return GManConstraints.totalPowerUnits - totalPowerNeeded;
    }
};