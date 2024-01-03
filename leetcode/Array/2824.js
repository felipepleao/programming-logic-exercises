// 2824. Contar pares cuja soma é menor que o alvo

// Dada uma matriz inteira indexada em 0nums de comprimento ne um número inteiro target, retorne o número de pares (i, j) onde 0 <= i < j < n e nums[i] + nums[j] < target .

// Exemplo 1:

// Entrada: nums = [-1,1,2,3,1], alvo = 2
//  Saída: 3
//  Explicação: Existem 3 pares de índices que satisfazem as condições da instrução:
// - (0, 1) desde 0 < 1 e nums[0] + nums[1] = 0 < alvo
// - (0, 2) desde 0 < 2 e nums[0] + nums[2] = 1 < alvo
// - (0, 4) desde 0 < 4 e nums[0] + nums[4] = 0 < alvo
// Observe que (0, 3) não é contado, pois nums[0] + nums[3] não é estritamente menor que o alvo.
// Exemplo 2:

// Entrada: nums = [-6,2,5,-2,-7,-1,3], alvo = -2
//  Saída: 10
//  Explicação: Existem 10 pares de índices que satisfazem as condições da instrução:
// - (0, 1) desde 0 < 1 e nums[0] + nums[1] = -4 < alvo
// - (0, 3) desde 0 <3 e nums[0] + nums[3] = -8 <alvo
// - (0, 4) desde 0 < 4 e nums[0] + nums[4] = -13 < alvo
// - (0, 5) desde 0 < 5 e nums[0] + nums[5] = -7 < alvo
// - (0, 6) desde 0 < 6 e nums[0] + nums[6] = -3 < alvo
// - (1, 4) desde 1 < 4 e nums[1] + nums[4] = -5 < alvo
// - (3, 4) desde 3 < 4 e nums[3] + nums[4] = -9 < alvo
// - (3, 5) desde 3 < 5 e nums[3] + nums[5] = -3 < alvo
// - (4, 5) desde 4 < 5 e nums[4] + nums[5] = -8 < alvo
// - (4, 6) desde 4 <6 e nums[4] + nums[6] = -4 <alvo

var countPairs = function (nums, target) {
  
};
