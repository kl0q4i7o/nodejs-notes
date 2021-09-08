const userArray = [{
        id: 1,
        name: "Kalos"
    },
    {
        id: 2,
        name: "Mezora"
    },
    {
        id: 3,
        name: "Chester"
    }
];

const getEmpleado = async( id ) => {
    return new Promise ( ( res, rej ) => {
        let singleUser = userArray.filter( ( user ) => user.id === id);
        if ( singleUser ) {
            return res(singleUser);
        } else {
            return rej(`No existe empleado con el id ${ id }`);
        }
    })
}
