let deadpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneración',
    getNombre: function(){
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};

console.log(deadpool.getNombre());

let { nombre: primerNombre, apellido, poder} = deadpool;

console.log({primerNombre, apellido, poder})