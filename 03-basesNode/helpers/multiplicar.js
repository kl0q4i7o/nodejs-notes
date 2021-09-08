// Import colors
const colors = require('colors');
const fs = require('fs');

const crearArchivo = async (base = 5, listar = false) => {
    try {
        let salida = '';
        for (let counter = 1; counter <= 10; counter++) {
            salida += `${ base } x ${ counter } = ${ base * counter }\n`.rainbow;
        }
        
        if ( listar === true) {
            console.clear();
            console.log('===================='.rainbow)
            console.log(`Tabla del ${ base }:`.rainbow)
            console.log('===================='.rainbow)
            console.log(salida);
        }

        // Si no pasamos path se guarda en el directorio donde se ejecuta. [ path, msg, callback]
        // Sync quiere decir que se convertirá en una tarea asíncrona (Bloqueante para las demás tareas)
        fs.writeFileSync(`tabla-${base}.txt`, salida);
        return `tabla-${base}.txt`;
    } catch( err ) {
        throw err;
    }
}

module.exports = {
    crearArchivo
}