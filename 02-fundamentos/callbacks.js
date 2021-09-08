const getUsuarioByID = (id, callback) => {
    const usuario = {
        id,
        nombre: 'Kalos'
    };

    setTimeout( () => {
        callback(usuario)
    }, 1500);
}

getUsuarioByID( 10, ( usuario ) => {
    console.log(`Hola ${usuario.nombre}`);
});