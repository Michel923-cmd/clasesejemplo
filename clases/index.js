//una veterinaria necesita desarrolar un sistema para la atencion d mascotas
//animal, propietario, atencion 

class Animal{
    nombre
    raza
    especie
    edad
    constructor (nombre,raza,especie,edad){
        this.nombre=nombre
        this.raza=raza
        this.especie=especie
        this.edad=edad
    }
    registrarNombre(nuevoNombre){
        this.nombre=nuevoNombre
    }
    
    registrarRaza(nuevaRaza){
        this.raza=nuevaRaza
    }
    registrarEspecie(nuevaEspecie){
        this.especie=nuevaEspecie
    }
    registrarEdad(nuevaEdad){
        this.edad=nuevaEdad
    }
    mostrarInformacion(){
        console.log(this.nombre+" "+this.raza)
    }
}

class Propietario{
    nombrePropietario
    Direccion
    telefono
    constructor(nombrePropietario,direccion,telefono){
    this.nombrePropietario=nombrePropietario
    this.direccion=direccion
    this.telefono=telefono
    this.mascota=[]
    }
    registrarNombre(nuevoNombre){
        this.nombrePropietario=nuevoNombre
    }
    registrarDireccion(nuevaDireccion){
        this.direccion=nuevaDireccion
    }
    registarTelefono(nuevoTelefono){
        this.telefono=nuevoTelefono
    }
    registrarMascota(nuevamascota){
        //pop,unshift,shift,push
        this.mascota.push(nuevamascota)
    }
    mostrarInformacion(){
        console.log("Mascota:"+this.mascota[0].nombre+ " Propietario:"+this.nombrePropietario)
    }
}

let colmillo=new Animal("colmillo","pitbull","perro",12)
colmillo.mostrarInformacion()
let alexa=new Propietario("Alexa","123","1111")
alexa.registrarMascota(colmillo)
alexa.mostrarInformacion()