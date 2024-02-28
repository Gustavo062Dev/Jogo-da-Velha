let jogador = 'X';
let vencedor = 'sem vencedor';
const jogadorSelecionado = document.getElementById('jogador-selecionado');
const vencedorSelecionado = document.getElementById('vencedor-selecionado');
const quadrados = Array.from({length: 9}, (_, index) => document.getElementById(index + 1))

vencedorSelecionado.innerHTML = vencedor

function escolherQuadrado(id) {
    const quadrado = document.getElementById(id);
    
    if (vencedor !== 'sem vencedor' || quadrado.innerHTML !== '-' ) {
        return;
    }

    quadrado.innerHTML = jogador;
    quadrado.style.color = '#000';

    jogador = (jogador === 'X') ? 'O' : 'X'

    mudarJogador(jogador);
    checaVencedor();
}

function mudarJogador(proximoJogador) {
    jogador = proximoJogador;
    jogadorSelecionado.innerHTML = jogador;
}

function checaVencedor(){
    const sequenciasVencedoras = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9],
        [1, 4, 7], [2, 5, 8], [3, 6, 9],
        [1, 5, 9], [3, 5, 7]
    ]
   
    sequenciasVencedoras.forEach(sequencia => {
        const [a, b, c] = sequencia.map(num => quadrados[num - 1])

        if (checaSequencia(a, b, c)) {
            mudaCorQuadrado(a, b, c)
            mudarVencedor(a)
        }
    })
   
}

function mudarVencedor(quadrado) {
    vencedor = quadrado.innerHTML;
    vencedorSelecionado.innerHTML = vencedor;
}

function mudaCorQuadrado(...quadrados) {
    quadrados.forEach(quadrado => {
        quadrado.style.background = '#0fe';
    })
}

function checaSequencia(quadrado1, quadrado2, quadrado3) {
    return quadrado1.innerHTML !== '-' && quadrado1.innerHTML === quadrado2.innerHTML && quadrado2.innerHTML === quadrado3.innerHTML;
}

function reiniciar() {
    vencedor = 'sem vencedor';
    vencedorSelecionado.innerHTML= vencedor

    quadrados.forEach(quadrado => {
        quadrado.style.background = 'hsla(0, 0%, 93%, 0.397)'
        quadrado.innerHTML = '-'
    })

    mudarJogador('X');
}
