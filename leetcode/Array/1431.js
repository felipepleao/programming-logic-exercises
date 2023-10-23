// 1431. Crianças com maior número de doces
// Fácil
// Tópicos
// Empresas
// Dica
// Há ncrianças com doces. Você recebe um array inteiro candies, onde cada um candies[i]representa o número de doces que a criança tem, e um inteiro , denotando o número de doces extras que você tem.ithextraCandies

// Retorna uma matriz booleana resultde comprimento n, onde result[i]é truese, depois de dar à criança todos os , ela terá o maior número de doces entre todas as crianças , ou não .ithextraCandiesfalse

// Observe que várias crianças podem ter o maior número de doces.

 

// Exemplo 1:

// Entrada: candies = [2,3,5,1,3], extraCandies = 3
//  Saída: [true,true,true,false,true] 
//  Explicação: Se você fornecer todos os extraCandies para:
// - Criança 1, eles terão 2 + 3 = 5 doces, que é o maior entre as crianças.
// - Criança 2, eles terão 3 + 3 = 6 doces, que é o maior entre as crianças.
// - Criança 3, eles terão 5 + 3 = 8 doces, que é o maior entre as crianças.
// - Criança 4, eles terão 1 + 3 = 4 doces, o que não é o maior entre as crianças.
// - Criança 5, eles terão 3 + 3 = 6 doces, que é o maior entre as crianças.
// Exemplo 2:

// Entrada: doces = [4,2,1,1,2], extraCandies = 1
//  Saída: [true,false,false,false,false] 
//  Explicação: Há apenas 1 doce extra.
// A criança 1 sempre terá o maior número de doces, mesmo que uma criança diferente receba os doces extras.
// Exemplo 3:

// Entrada: doces = [12,1,12], extraCandies = 10
//  Saída: [verdadeiro, falso, verdadeiro]

var kidsWithCandies = function(candies, extraCandies) {
    
};