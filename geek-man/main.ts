import { GeekManDirections } from './enums';
import { GeekManTurn } from './turns';
import { GeekManDistance } from './distance';
import { GeekManConstraints } from './constants';

export class GeekManPower {
    private sourceAbscissa = 0; 
    private sourceOrdinate = 0; 
    private destinationAbscissa = 0; 
    private destinationOrdinate = 0;
    private sourceDirection!: GeekManDirections;

    public setSourceParameters(
        sourceAbscissa: number, 
        sourceOrdinate: number, 
        direction: GeekManDirections
    ): void {
        this.sourceAbscissa = sourceAbscissa;
        this.sourceOrdinate = sourceOrdinate;
        this.sourceDirection = direction;
    }

    public setDestinationParameters(
        destinationAbscissa: number, 
        destinationOrdinate: number
    ): void {
        this.destinationAbscissa = destinationAbscissa;
        this.destinationOrdinate = destinationOrdinate;
    }

    public getAvailablePowerUnits(): number {
        const powerNeededForDistance 
            = GeekManDistance.getPowerNeededForDistance(
                this.sourceAbscissa,
                this.sourceOrdinate,
                this.destinationAbscissa,
                this.destinationOrdinate
            );
        const powerNeededForTurns 
            = GeekManTurn.getPowerNeededForTurns(
                this.sourceAbscissa,
                this.sourceOrdinate,
                this.destinationAbscissa,
                this.destinationOrdinate,
                this.sourceDirection
            );
        const totalPowerNeeded = powerNeededForDistance + powerNeededForTurns;
        return GeekManConstraints.totalPowerUnits - totalPowerNeeded;
    }
};