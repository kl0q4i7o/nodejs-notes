const id = 3;

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

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( (e) => e.id === id )?.nombre;
    if (empleado) {
        // Si null existe, entonces no hay error.
        callback(null, empleado);
    } else {
        callback(`Empleado con id: ${ id } no se encuentra registrado`);
    }
}

const getSalario = (id, callback) => {
    const salario = salarios.find( (s) => s.id === id)?.salario;
    if (salario) {
        callback(null, salario);
    } else {
        callback(`El id: ${id} no tiene un salario asociado.`);
    }
}

getEmpleado( id, ( err, empleado ) => {
    // Si tenemos un error podemos evaluar que hacer.
    if (err) {
        console.log("ERROR");
        return console.log(err);
    }

    getSalario( id, (err, salario) => {
        if ( err ) {
            return console.log(err);
        }
        console.log(`El empleado: ${empleado.nombre} tiene un salario de: ${salario}`)
    });
})