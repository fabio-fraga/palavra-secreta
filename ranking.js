const tabela = document.createElement('table')

document.getElementById('ranking').appendChild(tabela)

const linhaTitulos = document.createElement('thead')

const posicao = document.createElement('th')
posicao.innerHTML = '#'

const nome = document.createElement('th')
nome.innerHTML = 'Nome'

const pontuacao = document.createElement('th')
pontuacao.innerHTML = 'Pontuação'

linhaTitulos.append(posicao, nome, pontuacao)

tabela.appendChild(linhaTitulos)

const jogadores = [
    {
        nome: 'Rhaudney',
        pontuacao: 130
    },
    {
        nome: 'Fábio',
        pontuacao: 120
    },
    {
        nome: 'Sérgio',
        pontuacao: 120
    },
]

jogadores.sort((a, b) => b.pontuacao - a.pontuacao)

let ultimaPosicao = 0

for (let i = 0; i < jogadores.length; i++) {
    const linha = document.createElement('tr')

    const posicao = document.createElement('td')

    if (jogadores[i - 1]?.pontuacao != jogadores[i].pontuacao) {
        ultimaPosicao++
    }

    posicao.innerHTML = ultimaPosicao

    const nome = document.createElement('td')
    nome.innerHTML = jogadores[i].nome

    const pontuacao = document.createElement('td')
    pontuacao.innerHTML = jogadores[i].pontuacao

    linha.append(posicao, nome, pontuacao)

    tabela.appendChild(linha)
}

if ('SharedStorage' in window) {
    console.log('entrou')
    // Obtém a instância do SharedStorage
    const sharedStorage = window.sharedStorage;

    // Armazenar dados
    sharedStorage.setItem('key', 'value');

    // Recuperar dados
    const value = sharedStorage.getItem('key');
    console.log(value); // 'value'

    // Remover dados
    // sharedStorage.removeItem('key');
} else {
    console.log('SharedStorage não está disponível neste navegador.');
}
