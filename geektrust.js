const fs = require('fs');
const filename = process.argv[2] || '';

const GeekMan = require('./geek-man/main.js');

filename &&
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) throw err
    const geekManPower = new GeekMan.GeekManPower();
    const lines = data.split('\n');
    for (const line of lines) {
        const inputs = line.split(' ');
        switch (inputs[0]) {
            case 'SOURCE':
                const sourceAbscissa = parseInt(inputs[1]);
                const sourceOrdinate = parseInt(inputs[2]);
                const sourceDirection = inputs[3].charAt(0);
                geekManPower.setSourceParameters(sourceAbscissa, sourceOrdinate, sourceDirection);
                break;
            case 'DESTINATION':
                const destinationAbscissa = parseInt(inputs[1]);
                const destinationOrdinate = parseInt(inputs[2]);
                geekManPower.setDestinationParameters(destinationAbscissa, destinationOrdinate);
                break;
            case 'PRINT_POWER':
                console.log(`POWER ${geekManPower.getAvailablePowerUnits()}`);
                return;
            default:
                return;
        }
    }
});
