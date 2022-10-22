/* // Dos variables Lógicas
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

const funtion4 = (edad : string): string => {
    return `Su edad es ${edad}`;
}
console.log(funtion4('19'));




