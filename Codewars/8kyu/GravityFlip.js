// DESCRIÇÃO:
// Se você já completou este kata e quer um desafio maior, aqui está a versão 3D

// Bob fica entediado durante as aulas de física, então construiu uma caixa de brinquedos para ajudar a passar o tempo. A caixa é especial porque tem a capacidade de mudar a gravidade.

// Existem algumas colunas de cubos de brinquedo na caixa dispostos em uma linha. A i-ésima coluna contém a_i cubos. A princípio, a gravidade na caixa está puxando os cubos para baixo. Quando Bob muda a gravidade, ele começa a puxar todos os cubos para um determinado lado da caixa, d, que pode ser 'L' ou 'R' (esquerda ou direita). Abaixo está um exemplo de como uma caixa de cubos pode parecer antes e depois de mudar a gravidade.

// Dada a configuração inicial dos cubos na caixa, descubra quantos cubos há em cada uma das n colunas depois que Bob muda a gravidade.

const a = [1, 4, 55, 13, 5];

const flip = (d, a) => {
  if (d === "L") {
    return a.sort().reverse();
  } else if (d === "R") {
    return a.sort();
  }
};

console.log(flip('L', a));
