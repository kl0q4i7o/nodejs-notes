// Imprimir la tabla de 5 en la consola.
const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');

crearArchivo( argv.b, argv.l )
    .then( nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch( err => console.log( err ));