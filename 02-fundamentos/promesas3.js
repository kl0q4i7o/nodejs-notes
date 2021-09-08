// Operaciones asíncronas = No afectan la operatividad de la aplicación, se ejecutan en segundo plano
// Promesas = Representa un valor que puede estar disponible ahora, en el futuro o nunca.

// -> Pendiente (pending): Estado inicial, no compleado o rechazado.
// -> Completado (Resolve = .then): Operación se completó con éxito.
// -> Rechazado (Rejected = .catch): Operación falló.

const promesa = new Promise( (resolve, reject) => {
    setTimeout( () => {
        resolve("Datos conseguidos correctamente del servidor.")
    }, 4000);

    setTimeout( () => {
        reject("Error. No se pudo conseguir los datos del servidor.");
    }, 3000);
})

promesa
    .then( ( response ) => console.log( response ))
    .catch( ( err ) => console.log( err ));
