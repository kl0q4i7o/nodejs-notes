// Import argv of yargs module.
const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: "Elegir la base de la tabla de multiplicar.",
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        demandOption: false,
        describe: "Mostrar en consola.",
    })
    // Verificamos
    .check( (argv, options) => {
        if (isNaN( argv.b )) {
            throw "Tiene que ser un numero."
        }
        return true;
    })
    .argv;

module.exports = argv;