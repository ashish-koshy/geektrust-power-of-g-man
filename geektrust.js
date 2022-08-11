const fs = require('fs');
const filename = process.argv[2] || '';

const GMan = require('./g-man/main.js');

filename &&
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err
    const gManPower = new GMan.GManPower();
    const lines = data.split('\n');
    for (const line of lines) {
        const inputs = line.split(' ');
        switch (inputs[0]) {
            case 'SOURCE':
                const sourceXCoordinate = parseInt(inputs[1]);
                const sourceYCoordinate = parseInt(inputs[2]);
                const sourceDirection = inputs[3].charAt(0);
                gManPower.setSourceParameters(sourceXCoordinate, sourceYCoordinate, sourceDirection);
                break;
            case 'DESTINATION':
                const destinationXCoordinate = parseInt(inputs[1]);
                const destinationYCoordinate = parseInt(inputs[2]);
                gManPower.setDestinationParameters(destinationXCoordinate, destinationYCoordinate);
                break;
            case 'PRINT_POWER':
                console.log(`POWER ${gManPower.getAvailablePowerUnits()}`);
                return;
            default:
                return;
        }
    }
});
