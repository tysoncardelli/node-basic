let empleados = [
    {
        id: 1,
        nombre: 'Tyson'
    },
    {
        id: 2,
        nombre: 'Melissa'
    },
    {
        id: 3,
        nombre: 'Juan'
    },
];

let salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 2,
        salario: 2000
    }
]

let getEmpleado = (id) =>{

    return new Promise ((resolve,reject)=>{

        let empleadoDB = empleados.find(empleado => {
            return empleado.id === id;
        })
    
        if(!empleadoDB){
            reject(`No existe un empleado con el ID ${id}`)
        }
        else{
            resolve(empleadoDB)
        }
    })  
 }



 let getSalario = (empleado)=>{


    return new Promise((resolve,reject)=>{

        let salarioDB = salarios.find(salario =>{
            return salario.id == empleado.id
        })

        
        if(!salarioDB){
            reject(`No se encontro salario para el empleado ${empleado.nombre}`)
        }
        else{
            resolve({nombre: empleado.nombre, salario: salarioDB.salario})
        }

    })

 }

 let getInformacion = async (id) => {

    let empleado = await getEmpleado(id);
    
    let salario = await getSalario(empleado);
    
    return salario;
 }

 getInformacion(29).then(mensaje=> console.log(mensaje))
 .catch(err => console.log(err));