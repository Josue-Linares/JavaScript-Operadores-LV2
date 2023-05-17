//OPERADORES INTERMEDIOS y Camale Case
//LOGICOS Y COMPARACION
//Camel Case
//esto es facil ya que la primer letra va minuscula y la segunda de la palabra va mayuscula
//ejemplo:
//buenosDias
//palabra1Palabra2
//decimeAlgoPorFavor


//OPERADORES DE COMPARACION
//los operadores de comparacion como su nombre dice comparan dos expresiones y devuelven un valor BOOLEAN que representa la relacion de sus valores



/********************************************************************/
//compracion de igualdad ==
let numero = 2;
let numero2 = 3;
console.log(numero == numero2); //en este caso devuelve un FALSE por que compara si la primer var es igual a la segunda

let t = 4;
let t1 = 4;
console.log(t == t1); // en este caso devuelve un TRUE por que las dos vareables son iguales



/********************************************************************/
//comparacion de inigualdad !=
let txt = "texto";
let txt1 = "texto1"
console.log(txt != txt1); //En este caso nos devuelve un TRUE ya que este pregunta si son diferentes, este es el caso contrario del anterior

let cp = "cp1"
let cpd = "cp1"
console.log(cp != cpd); //Aqui nos deve devolver FALSE ya que los 2 son iguales



/********************************************************************/
//igualdad estricta ===
//este se encarga de comparar la informacion pero tambien de que sean del mismo tipo de datos

let nu = 3;
let nu1 = "3";
console.log(nu === nu1); //esto devuelve un FALSE por que aun que tengan la misma informacion no son del mismo tipo de dato

let v1 = "hola";
let v2 = "hola";
console.log(v1 === v2); //Nos devuelve un TRUE ya que son de la misma informacion y del mismo tipo de datos en este caso fue con un string



/********************************************************************/
//desigualdad estricta !==
let d1 = "dia"
let d2 = "dia"
console.log(d1 !== d2); //Me devuelve FALSE por que me dice que si estrictamente son diferentes y como no lo son me da un FALSE

let b1 = 3;
let b2 = "3";
console.log(b1 !== b2); //Me devuelve un TRUE por que me pregunta si son estrictamente desiguales y como si son desiguales me manda un TRUE



/********************************************************************/
//comparadores de mayoridad o minoridad
//Mayor que >
let r1 = 20;
let r2 = 10;
console.log(r1 > r2); //devuelve TRUE por que si es mayor el 20 que el 10

//Menor que <
let p1 = 15;
let p2 = 10;
console.log(p1 < p2); //Devuelve un FALSE por que 15 no es menor a 10

//mayor o igual que
let s1 =20;
let s2 =10;
console.log(s1 >=s2); //Devuelve un TRUE por que si es mayor o igual que 20

//menor o igual que
let g1 = 30;
let g2 = 20;
console.log(g1 <= g2); //Devuelve un FALSE por que no es menor ni es igual que 20




//OPERADORES LOGICOS
//los operadores logicos nos devuelven un resultado a partir de que se cumpla o no una condicion su resultado es boolean y sus operandos son valores logicos o asimilables a ellos



/********************************************************************/
//operador AND (&&)
//si las 2 condiciones se cumplen sera TRUE
//y si solo una es FALSE me dara FALSE 
//el AND solo acepta valores BOOLEAN
//ejemplo

 let y1 = 12;
 let y2 = 24;
 let afirmacion = y1 < y2;
 let afirmacion1 = y1 != y2;
 consoles.log(afirmacion && afirmacion1); //Esto nos devuelve un TRUE por que las 2 afirmaciones son verdaderas

 //caso de false
 let f1 = 12;
 let f2 = 24;
 let afirmacion2 = f1 > f2;
 let afirmacion3 = f1 != f2;
 consoles.log(afirmacion2 && afirmacion3); //Este nos devuelve un FALSE por que la afirmacion de que 12 sea mayor que 24 es falsa por ende todo sera falso

 
 /********************************************************************/


 // OR ||
 //en este caso si solo hay 1 TRUE todo sera TRUE
 let e1 = 12;
 let e2 = 24;
 let afirmacion4 = e1 > e2;
 let afirmacion5 = e1 != e2;
 consoles.log(afirmacion4 || afirmacion5);  //Me devuelve TRU por que la afirmacion5 es verdadera y eso hace que todo sea verdadero

  let q1 = 12;
  let q2 = 24;
  let afirmacion6 = q1 > q2;
  let afirmacion7 = q1 == q2;
  consoles.log(afirmacion6 || afirmacion7); //nos devuelve un FALSE por que las 2 son falsas

   /********************************************************************/

   //NOT logico !
   //este lo que hace es que niega o hace FALSE algo que es true o viceversa
   //igual que el && solo funciona con BOOLEAN
   //ejemplo

   let a1 =12;
   let a2 =20;
   let verificar = a1 > a2; //esto es False por que 12 no es mayor que 20
   console.log(!verificar); //esto me devuelve TRUE ya que le dice si la verificacion fue FALSE el dara una respuesta en TRUE