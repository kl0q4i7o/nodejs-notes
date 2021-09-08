const empleados = [
    {
        id: 1,
        nombre: "Kalos"
    },
    {
        id: 2,
        nombre: "Luis"
    },
    {
        id: 3,
        nombre: "Juan"
    },
]

const salarios = [
    {
        id: 1,
        salario: 2000
    },
    {
        id: 2,
        salario: 3000
    },
]

const id = 4;

const getEmpleado = ( id ) => {
    // Resolve => Todo bien
    // Reject => Error
    return new Promise( (resolve, reject) => {
        const empleado = empleados.find( (e) => e.id === id )?.nombre;
        (empleado)
            ? resolve(empleado)
            : reject(`No existe empleado con id: ${ id }`);
    });
}

const getSalario = () => {
    return new Promise( (resolve, reject) => {
        const salario = salarios.find( (salario) => salario.id === id)?.salario;
        (salario)
            ? resolve(salario)
            : reject(`No existe salario asociado al empleado con id ${ id }`);
    });
}

// Async - Await
// Await = Esperar hasta recibir la respuesta de la promesa. Tiene que estar dentro de una funcion o metodo asíncrono. Función devuelve una promesa 

const getInfoUsuario = async ( id ) => {
    try {
        const empleado = await getEmpleado( id );
        const salario = await getSalario( id );
        return `El salario del empleado ${ empleado } es de ${ salario }`;
    } catch (err) {
        // Throw llama el reject de la función asíncrona.
        throw err;
    }
}

getInfoUsuario( id )
    .then( ( msg ) => console.log( msg ))
    .catch( (err) => console.log( err ));