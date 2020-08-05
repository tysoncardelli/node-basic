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

let getEmpleado = (id, callback) =>{

   let empleadoDB = empleados.find(empleado => {
        return empleado.id === id;
    })

    if(!empleadoDB){
        callback(`No existe un empleado con el ID ${id}`)
    }
    else{
        callback(null,empleadoDB)
    }
}

getEmpleado(6,(err,empleado)=>{
    if(err){
        console.log(err)
    }
    else {
        console.log(empleado)
    }

   
})

let getSalario = (empleado,callback) =>{

    let salarioDB = salarios.find(salario =>{
        return salario.id == empleado.id
    })


    if(!salarioDB){
        callback(`No se encontro salario para el empleado ${empleado.nombre}`)
    }
    else{
        callback(null, {nombre: empleado.nombre, salario: salarioDB.salario})
    }
    
}

getSalario(empleados[2],(err,empleado)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(empleado);
    }
});