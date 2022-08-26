/*
        Conteúdo relacionado a mudança de texto e de manipulação dos elementos
*/

// element.innerText - muda o conteúdo do elemento selecionado no HTML (texto interno) - apenas no text

// element.textContent - https://developer.mozilla.org/pt-BR/docs/Web/API/Node/textContent (melhor explicado)

// element.innerHTML = "Olá Devs <strong>Birrl</strong>" - adiciona HTML diretamente no meu elemento, com uso de JS

// element.value - atribui um valor a um "input" (html), de maneira que seja pelo JavaScript






// NAVEGANDO PELOS ELEMENTOS
// parentNode e parentElement

// const body =  document.querySelector('body')

// console.log(body.parentNode) // mostra a estrutura parente do body, aqui nesse caso seria o HTML, parente do pai
// console.log(body.parentElement) // também faz do mesmo uso e ideia, parente do elemento





// NAVEGANDO PELOS ELEMENTOS FILHOS (CHILDRENS)
// childNodes - NODE LIST 
// children - HTML COLLECTION
 //       const el = document.querySelector('body')

// firstChild - seleciona o primeiro elemento junto com o texto adjacente ao caminho até o primeiro filho
// firstElementChild - seleciona de imediato o primeiro elemento filho, seja do body, header e outros...

// lastChild - seleciona o ultimo elemento junto com o texto adjacente ao caminho até o ultimo filho
// lastElementChild - seleciona de imediato o ultimo elemento filho, seja do body, header e outros...



// NAVEGANDO PELOS ELEMENTOS - BUSCANDO IRMÃOES (SIBLINGS)
// nextSibling - busca um elemento próximo e dá o resultado, mas esse passa linha por linha
// nextElementSibling - esse já vai direto para o elemento irmão mais próximo 

// previousSibling  - volta no elemento irmão anterior, lido por linha
// previousElementSibling - volta no elemento irmão mais próximo 



// Criando e adicionando Elementos 

// createElement
   const div = document.createElement('div'); 
   div.innerText = 'Hello world'

// append prepend


