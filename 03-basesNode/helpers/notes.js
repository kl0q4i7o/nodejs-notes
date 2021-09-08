/* 
Hacemos destructuración creado una variable. Asignamos un valor default
const [, , arg3 = 'base=11'] = process.argv
const [, base = 11] = arg3.split('=');
console.log(arg3);
console.log(base);
*/


// Process.argv nos muestra los argumentos que vienen de consola.
// Responde siempre con dos parámetros [ path donde se graba node, path donde se ejecuta] los demás son los que ingresamos
// console.log(process.argv)

// console.log(argv);

// console.log('base: yargs', argv.base)