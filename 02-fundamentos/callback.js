//Un callback es una funcion que se ejecuta cuando algo sucede

setTimeout(()=>{
    console.log('Hola Mundo');
},3000);

let getUsuarioById = (id, callback) => {

    let usuario = {
        nombre: 'Tyson',
        id
    }

    if(id === 20){
        callback(`El usuario con id ${id}, no existe en la BD`);
    }
    else{
        callback(null,usuario);
    }
}

getUsuarioById(20, (err,usuario)=>{

    if(err){
        return console.log(err)
    }

    console.log('usuario de base de datos',usuario);

})