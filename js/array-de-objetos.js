const produtos = [
    {
        nome: 'arroz',
        preco: 15.0,
        origem: {
            cidade: 'Goiania',
            endereco: {
                rua: 'rua x'
            }
        }
    },
    {
        nome: 'feijão',
        preco: 7.0
    },
    {
        nome: 'macarrão',
        preco: 5.0
    }
]

// console.log(produtos[0].origem.endereco.rua)

produtos.map(produto => console.log(produto.nome))
