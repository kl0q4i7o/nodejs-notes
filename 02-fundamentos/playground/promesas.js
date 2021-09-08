const userContainer = document.querySelector('#user-container');
const userLoader = document.querySelector("#user-loader");

const renderingUser = ( tagname, attributes = {}, text, image ) => {
    const element = document.createElement(tagname);
    const avatar = document.createElement('img');
    console.log(Object.assign( element, attributes));
    if ( image )
        avatar.src = image;
        avatar.style.width = "90%"
        element.appendChild( avatar );
    if ( text )
        element.appendChild(document.createTextNode( text ));
        userContainer.appendChild( element );
}

const getUser = () => {
    return new Promise( ( resolve, reject ) => {
        fetch('https://reqres.in/api/users?page=1')
            .then( ( res ) => {
                return res.json();
            })
            .then( ( userJson ) => {
                resolve(userJson.data);
            })
            .catch( ( err ) => {
                reject(alert( err ));
            })
    }) 
}

const handleUser = async () => {
    const userInfo = await getUser();
    userLoader.style.display = "none";
    userInfo.map( ( singleUser ) => {
        renderingUser( "div", {className: "singleUserDiv"}, `${singleUser.first_name} ${singleUser.last_name}`, singleUser.avatar);
    });
}

handleUser();