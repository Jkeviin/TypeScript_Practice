
//! Para que funcione instalar:
//! npm install --save-dev @types/node (para que funcione el require)
//! para inicializar el proyecto npm init -y
//! para compilar tsc --init
//! para que no salga error en el require de node, en el tsconfig.json agregar:
//! "esModuleInterop": true



/*
//* ______++++ TALLER 1 
// Dos variables Lógicas
let logica1: boolean  = true;
let logica2: boolean = false;
// Dos variables numéricas
let numerica1: number = 1;
let numerica2: number = 2;
// Dos variables any
let any1: any = 1;
let any2: any = "a";
// Dos variables string
let string1: string = "Kevin";
let string2: string = "Ortega";
// Crear plantilla de string
let nombre: string = `Bienvenido ${string1} ${string2} a nuestro sitio web, gracias por registrarse`;
//______________
// Array Numerico
let arrayNumerico: number[] = [1, 2, 3, 4, 5];
console.log(arrayNumerico[0])
arrayNumerico.forEach((element : number) => {
    console.log(element);
});

// Array String
let arrayString: string[] = ["a", "b", "c", "d", "e"]
console.log(arrayString[0])
arrayString.forEach((element : string) => {
    console.log(element);
});

// Eliminar elementos de un array
arrayString.splice(0,1);
// Agregar elementos a un array
arrayString.push("f");
// Actualizar elementos de un array
arrayString[0] = "a";
// Copiar elementos de un array a otro array
let nuevoArray: string[] = [...arrayString];

// Crear variable tipo objeto dia semana
let diaSemana = {
    lunes: "Lunes", 
    martes: "Martes", 
    miercoles: "Miercoles", 
    jueves: "Jueves", 
    viernes: "Viernes", 
    sabado: "Sabado", 
    domingo: "Domingo"
};
for (const key in diaSemana) {
    console.log(key)
    console.log(diaSemana[key])
}

// Crear variable tipo objeto numeros
let numeros = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
}
for (const key in numeros) {
    console.log(key)
    console.log(numeros[key])
}

// Eliminar elemento de un objeto
delete diaSemana["lunes"];

// Editar elemento de un objeto
diaSemana["sabado"] = "SABADO";

// Agregar elemento a un objeto
diaSemana["festivo"] = "FESTIVO";

//Leer elemento de un objeto
console.log(diaSemana.lunes)
console.log(numeros[3])

for (let index: number = 0; index < arrayNumerico.length; index++) {
    arrayNumerico[index];
}

let i : number = 0;
while(i> 5){
    console.log(i);
    i++;
}
 */

/* //* ______++++ TALLER 2 

const funtion1 = (numeroF: number, validacion?: boolean, nombre: string = "Kevin"):string => {
    if(validacion){
        let texto: string = `Hola ${nombre}, su numero es: ${numeroF}`
        return texto;
    }
    return "Debe ser valido";
}

console.log(funtion1(12, true));

const funtion2 = (n1: number, n2: number) :number =>{
    return n1 + n2;
}

console.log(funtion2(1,2))

setTimeout(() => console.log("HOLA ADSI"), 5000);

const funtion3 = () => console.log("Hola ADSI");

const funtion4 = (edad : string) => console.log(`Su edad es ${edad}`);

funtion4('19');

const funtion5 = (n1: number, n2: number) => console.log(n1+n2);

funtion5(4,5);


const funtion6 = (n1: number, n2: number) : any => {
    let modulo: number = 0;
    let dividendo: number = n1;
    let divisor: number = n2;

    if(divisor == 0)
        return 'Error'

    modulo = dividendo / divisor;

    return(modulo);
}
console.log(`La division es: ${funtion6(5,2)}`)

//* Destructuración Array
let destructArray : string[] = ['uno','dos','tres','cuatro','cinco'];
let [v1, v2, ...resto] = destructArray;
let [,,v3,,v5] = destructArray
console.log(`v1: ${v1}, v2: ${v2}, resto: ${resto}`);
console.log(`v3: ${v3}, v5: ${v5}`)

//* Destructuración Objeto
let destructObjecto : any = {
    nombre: 'Kevin',
    edad: 19,
    pais: 'Colombia',
    activo: true
}
let {nombre, edad, pais, activo} = destructObjecto;

console.log(`
    Nombre: ${nombre}
    Edad: ${edad}
    Pais: ${pais}
    Activo ${activo}
`); */
/*
//* ______++++ TALLER 3

const promesa: Promise<string>  = new Promise((resolve, reject) : void => {
    let a : boolean = true;
    return a ? resolve("Somos programadores, hacemos mover el mundo") : reject("Ha ocurrido un error desconocido.");
});

promesa.then((res) : void => console.log(res)).catch((err) : void => console.log(err));

const rechazar: Promise<string>  = new Promise((resolve, reject) : void => {
    let a : boolean = false;
    return a ? resolve("Somos programadores, hacemos mover el mundo") : reject("Ha ocurrido un error desconocido.");
});

rechazar.then((res) : void => console.log(res)).catch((err) : void => console.log(err));


function subsidio(estrato: number) : Promise<string> {
    return new Promise((resolve, reject) : void => {
        if(estrato >= 1 && estrato <= 6){
            return estrato <= 2 ? resolve("Tiene derecho a subsidio") : resolve("No tiene derecho a subsidio");
        }
        return reject(new Error("Estrato no valido"));
    });
}

subsidio(1).then((res) : void => console.log(res)).catch((err) : void => console.log('Ha ocurrido un error: ', err.message));

const elevado: Promise<number>  = new Promise((resolve, reject) : void => {
    let a : boolean = true;
    return a ? resolve(2) : reject("Ha ocurrido un error desconocido.");
});

elevado
    .then((res) : number => res ** 2)
    .then((res) : number => res ** 2)
    .then((res) : number => res ** 2)
    .then((res) : number => res ** 2)
    .then((res) : void => console.log(`El valor final es: ${res}`))
    .catch((err) : void => console.log(err));


const promesa1: Promise<string>  = new Promise((resolve, reject) : void => {
    let a : boolean = true;
    return a ? resolve("Somos ADSI") : reject(new Error("Promesa 1 no cumplida"));
});

const promesa2: Promise<string>  = new Promise((resolve, reject) : void => {
    let a : boolean = true;
    return a ? resolve("Somos programadores") : reject(new Error ("Promesa 2 no cumplida"));
});

const promesa3: Promise<string>  = new Promise((resolve, reject) : void => {
    let a : boolean = true;
    return a ? resolve("Hacemos mover el mundo") : reject(new Error("Promesa 3 no cumplida"));
});

promesa1
    .then((res) : void => console.log(res))
    .then(() : Promise<string> => promesa2)
    .then((res) : void => console.log(res))
    .then(() : Promise<string> => promesa3)
    .then((res) : void => console.log(res))
    .catch((err) : void => console.log('Ha ocurrido un error: ', err.message)); 



const promesa4: Promise<string>  = new Promise((resolve, reject) : void => {
    setTimeout(() => {
        let a : boolean = false;
        return a ? resolve("Promesa resuelta") : reject(new Error("Info error"));
    }, 2000);
});

promesa4
    .then((res) : void => console.log(res))
    .catch((err) : void => console.log(err.stack));  // stack es algo como un historial de errores



const prom1: Promise<string>  = new Promise((resolve, reject) : void => {
    setTimeout(() => {
        let a : boolean = true;
        return a ? resolve("Promesa 1 resuelta") : reject(new Error("Info error 1"));
    }, 2000);
});

const prom2: Promise<string>  = new Promise((resolve, reject) : void => {
    setTimeout(() => {
        let a : boolean = true;
        return a ? resolve("Promesa 2 resuelta") : reject(new Error("Info error 2"));
    }, 3000);
});

const prom3: Promise<string>  = new Promise((resolve, reject) : void => {
    setTimeout(() => {
        let a : boolean = true;
        return a ? resolve("Promesa 3 resuelta") : reject(new Error("Info error 3"));
    }, 4000);
});

const prom4: Promise<string>  = new Promise((resolve, reject) : void => {
    setTimeout(() => {
        let a : boolean = true;
        return a ? resolve("Promesa 4 resuelta") : reject(new Error("Info error 4"));
    }, 5000);
});

Promise.all([prom1, prom2, prom3, prom4])
    .then((res) : void => console.log(res))
    .catch((err) : void => console.log(err.stack));

Promise.race([prom4, prom2])
    .then((res) : void => console.log(res))
    .catch((err) : void => console.log(err.stack));
*/

//* ______++++ TALLER 4

async function Asincrona (value: number) : Promise<number> {
    return value ** 2;
}
console.log(Asincrona(2));


const resultado = () : Promise<number>  => {
    return new Promise((resolve, reject) : void => {
        setTimeout(() => {
            resolve(8);
        }, 6000);
    });
}

resultado().then((res) : void => console.log(res));  


async function cuadradoAsincrono() : Promise<void> {
    const res = await resultado();  // await espera a que la promesa se resuelva, tambien se puede usar con try catch para manejar errores, await solo se puede usar dentro de una funcion async
    console.log(res ** 2);
}

cuadradoAsincrono();

/* a) ¿Qué cláusula usamos para que una función retorne una promesa sin crearla explícitamente (Explicitamente es cuando se crea una promesa con new Promise)?
dentro de la función ?
    Respuesta: async Porque con async se convierte en una funcion asincrona y retorna una promesa implicitamente

b) Si necesitamos capturar el valor de una promesa, ¿ qué cláusula usamos ?
    Respuesta: await Porque await espera a que la promesa se resuelva, tambien se puede usar con try catch para manejar errores, await solo se puede usar dentro de una funcion async

c) ¿Cuál es la condición para poder usar la cláusula await ?
    Respuesta: que la función sea async ya que await solo se puede usar dentro de una funcion async
*/



class Coche {
    private marca: string;
    public modelo: string;
    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }
    public getMarca() : string {
        return this.marca;
    }
    public static getMarcaStatic() : string { // static es para que el metodo no se pueda llamar desde una instancia de la clase
        return "Marca estática";
    }
}

const coche1 = new Coche("Toyota", "Corolla");  // instanciar una clase y le asigno un valor a la propiedad modelo y marca
console.log(coche1.getMarca());  // Toyota es el valor que se le asigno a la propiedad marca
console.log(Coche.getMarcaStatic());  // Marca estática es el valor que se le asigno a la propiedad marca


class Robot {
    private marca: string;
    public modelo: string;
    private color: string;
    public peso: number;

    constructor(marca: string, modelo: string) {  //  se pone marca y modelo porque son los parametros que voy a usar para crear una instancia de la clase
        this.marca = marca;
        this.modelo = modelo;
    }
    public getMarca() : string {
        return this.marca;
    }
    public getColor() : string {
        return this.color;
    }
    public static getMarcaStatic() : string {
        return "Marca estática";
    }
    public static getColorStatic() : string {
        return "Color estático";
    }
}


class PC {
    private marca: string;
    public modelo: string;
    private color: string;
    public peso: number;

    constructor(marca: string, modelo: string, color: string, peso: number) {  // constructor con parametros obligatorios
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
    }
    public getMarca() : string {
        return this.marca;
    }
    public getColor() : string {
        return this.color;
    }
    public static getMarcaStatic() : string {
        return "Marca estática";
    }
    public static getColorStatic() : string {
        return "Color estático";
    }
}
