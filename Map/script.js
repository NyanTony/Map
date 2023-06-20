const numbers = [1,4,5,9,10,13]

const doubledNumbers = numbers.map( num => num * 3 )


const fahr = [ 0, 32, 45, 50, 80, 120 ]

const cel = fahr.map( elem => Math.round( ( elem - 32 ) * 5/9))
//======================================================================================================================================================================================================================================================================================================================================================

const estudantes = [
  { nome: 'João', notas: [7, 8, 6, 9] },
  { nome: 'Maria', notas: [9, 8, 7, 10] },
  { nome: 'Pedro', notas: [6, 7, 8, 9] }
];

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

const resultadoDiv = document.getElementById('resultado');

for (let i = 0; i < estudantes.length; i++) {
  const estudante = estudantes[i];
  const media = calcularMedia(estudante.notas);
  const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';
  const nomeCompleto = estudante.nome.toUpperCase();

  const estudanteInfo = document.createElement('p');
  estudanteInfo.innerHTML = `
    <span>Nome:</span> ${nomeCompleto}<br>
    <span>Média:</span> ${media}<br>
    <span>Situação:</span> <span class="situacao-${situacao.toLowerCase()}">${situacao}</span>
  `;
  resultadoDiv.appendChild(estudanteInfo);
}
