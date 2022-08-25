// LOOPINGS 
// ESTRUTURAS DE REPETIÇÕES

const frutas = ["banana","maça", "pera" ];

/*  1
for(var i=0; i<frutas.lenght; i++){
console.log(frutas[i])
} */ 

/* 2
for(var i of frutas){
console.log(i)
} */

// 3
// frutas.forEach((fruta)=>console.log(fruta))

frutas.map(fruta => console.log(fruta))