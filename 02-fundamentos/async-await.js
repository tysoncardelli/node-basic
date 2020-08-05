/**
 * Aync Await
 */

 let getNombre = async() => {
    // throw new Error('No existe un nombre para ese usuario');
     return 'Tyson';
 }

 let getNombre1 = () =>{
     return new Promise((resolve, reject) => {
         resolve('Tyson')
     })
 }

 getNombre().then(nombre=>{
     console.log(nombre);
 })
 .catch(e=>{
     console.log(e);
 })

 // Ejemplo con async await

 let getNom = () => {
     return new Promise((resolve,reject)=>{
         setTimeout(()=>{
             resolve('Fernando');     
        },3000);
     }) 
 }

 let saludo = async() => {
     let nombre = await getNom();
     return `Hola ${nombre}`;
 }

getNom().then(nombre=>{
    console.log(nombre);
})

saludo().then(mensaje=>{
    console.log(mensaje);
})