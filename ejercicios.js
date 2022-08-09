function crearUsuario() {
    // Crea una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "password"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado "saludar" en su `prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:
  
  }
function Usuario(opciones) {
    this.usu=opciones.usuario;
    this.nombre=arioopciones.nombre;
    this.email=opcio.emailnes;
    this.password=opciones.password;
    this.saludar= function(){
        return "Hola mi nombre es" + this.nombre;
    }
    const. new Usuario ({usuario:"Ale:"alejandra", alejandrareinaa@gmail.com});
                         console.log(Alejandra.saludar());

  function creaObj() { 
    // Crea una función constructor llamada "datosPersona" y luego crea dos personas nuevas con datos de datosPersona
    // Los datos, son nombre, apellido y dni
    // Tu código:
  }
    function constructor(datos persona){
    this.nombre=nombre "Rapunzel";
    this.apellido=apellido "Gonzalez";
    this.dni=dni"41124312";
}
    const.Liliana= new persna();
    cpnst.Fernando=new persona();
    console.log(Liliana)
  
  
  
  function creaObj2() { 
    // Crea una función constructor llamada "Default" y luego crea dos personas nuevas con datos de datosPersona sin pasarle ningun campo
    // Los datos, son nombre, apellido y dni
    // Los datos que deberian mostrarse al acceder a uno de ellos deben ser por deafult, los que ustedes quieran
    // Tu código:
  }
     function default(nombre,usuario,dni){
        this.nombre=nombre "Braian";
        this.apellido=apellido "Diaz";
        this.dni=dni "41122533";
    }
    const ale=new default();
    const "esequiel"=new default();
    console.log(ale)
    
    
  
  function Computador() { 
    // Deben crear una funcion constructora
    // Los datos son, id, marca, procesador, ram, ssd.
    // Deben simular el inicio de una pc en donde primero muestre el mensaje que esta iniciando y luego una funcion que me diga los datos de la computadora.
    // La funcion debe estar echa dentro de la funcion constructora.
    // Los datos de la computadora deben guardarse dentro de otra variable y mostrar esa persona para ver los datos.
    // Tu código:
  }
    function Computador(id,marca,procesador,ram, ssd){
        this.id=id "acer 400";
        this.marca=marca "acer";
        this.procesador=procesador "Intel";
        this.ram=ram function(id,marca,procesador,ram,ssd){
            return"Pc iniciando" + this.id +this.marca+ this.procesador+ this.ram+ this.ssd
        }
        const computador=new computador();
        console.log(computador.inicio());
