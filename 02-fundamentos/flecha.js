function sumar (a, b){
    return a + b;
}

let sumar2  = (a, b) =>{
    return a + b;
}

let sumar3 = (a,b) => a + b;

let saludar = () => "Hola mundo";

console.log(sumar(10,20));
console.log(sumar2(10,24));
console.log(sumar3(20,20));
console.log(saludar());

let deadpool = {
    nombre: 'Wade',
    apellido: 'Windston',
    poder: 'Regeneracion',
    getNombre() {
        return `${this.nombre} ${this.apellido} - poder ${this.poder}`
    }
};

console.log(deadpool.getNombre());