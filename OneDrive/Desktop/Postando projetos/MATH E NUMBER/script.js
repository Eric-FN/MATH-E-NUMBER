/* let numero = prompt("digite um número:");
numero = Number(numero); converter para number
 or --->*/

//numero a ser utilizado 55.1987555
/* 
preciso da raiz quadrada
verificar se é inteiro
verificarse é NaN
Arredondar para baixo
arredondar para cima
colocar apenas duas casas decimais
 */

const numero = Number(prompt("digite um número:"));
const numeroTitulo = document.getElementById("numero-titulo");
const texto = document.getElementById("texto");

numeroTitulo.innerHTML = numero;
texto.innerHTML = ""; //para zerar o texto que estiver no destino por padrao
texto.innerHTML = `
<p>A raiz quadrada do número é: ${numero ** 0.5}.</p>
<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>
<p>É NaN: ${Number.isNaN(numero)}.</p>
<p>Arredonda para baixo: ${Math.floor(numero)}.</p>
<p>Arredonda para cima: ${Math.ceil(numero)}.</p>
<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>
`;

/* texto.innerHTML = '';//para zerar o texto que estiver no destino por padrao
texto.innerHTML += `<p>A raiz quadrada do número é: ${numero ** 0.5}.</p>`;
texto.innerHTML += `<p>${numero} é inteiro: ${Number.isInteger(numero)}.</p>`;
texto.innerHTML += `<p>É NaN: ${Number.isNaN(numero)}.</p>`;
texto.innerHTML += `<p>Arredonda para baixo: ${Math.floor(numero)}.</p>`;
texto.innerHTML += `<p>Arredonda para cima: ${Math.ceil(numero)}.</p>`;
texto.innerHTML += `<p>Com duas casas decimais: ${numero.toFixed(2)}.</p>`;       
                                                                                    ^
                                                                                    |
                                                                                    '
                                                                                    '
                                                                           or  ------
*/
