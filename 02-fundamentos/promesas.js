// Las promesas son algo que en principio se cumplirá pero en el futuro no se sabe.
// Cuando la promesa se cumple se llama Promesa Resuelta -> resolve().
// Cuando la promesa no se cumple se llama Promesa Rechazada -> reject()
// La promesa que se queda pendiente es una Promesa Pendiente

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

const id = 3;
/* 
getEmpleado( id )
    .then( empleado => console.log( empleado ))
    .catch( err => console.log( err ));

getSalario( id )
    .then( (salario) => console.log( `Salario: ${ salario }` ))
    .catch( ( err ) => console.log( err ));

getEmpleado ( id )
    .then( (empleado) => {
        getSalario( id )
            .then( (salario ) => {
                console.log(`El empleado ${empleado} tiene un salario de: ${salario}`);
            })
            .catch( (err) => console.log(err));
    })
    .catch( (err) => console.log(err));
*/
let nombre;

getEmpleado( id )
    .then( ( empleado ) => {
        // Retornamos otra promesa. Sin el return no se puede añadir otro then.
        nombre = empleado;
        return getSalario( id );
    })
    .then( ( salario ) => console.log( `El empleado ${ nombre } tiene un salario de ${ salario }` ))
    .catch( ( err ) => console.log( err ));