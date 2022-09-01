var nome = 'Lucas'

var idade = 18
// var nome, idade, genero, telefone
var genero = 'M'
var nota = 7

if (nota >= 6) {
    console.log('aprovado')
} else if (nota >= 4) {
    console.log('recuperação')
} else {
    console.log('reprovado')
}

if (idade >= 18 && genero == 'M') {
    console.log('pode alistar')
} else {
    console.log('não pode alistar')
}

if (nota >= 6 || idade >= 18) {
    console.log('vai jogar')
} else {
    console.log('não vai jogar')
}
