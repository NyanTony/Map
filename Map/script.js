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

const estudantesProcessados = estudantes
  .map(estudante => ({
    ...estudante,
    media: calcularMedia(estudante.notas)
  }))
  .map(estudante => ({
    ...estudante,
    situacao: estudante.media >= 7 ? 'Aprovado' : 'Reprovado'
  }))
  .map(estudante => ({
    ...estudante,
    nomeCompleto: estudante.nome.toUpperCase()
  }));

const resultadoDiv = document.getElementById('resultado');
estudantesProcessados.forEach(estudante => {
  const estudanteInfo = document.createElement('p');
  estudanteInfo.innerHTML = `
    <span>Nome:</span> ${estudante.nomeCompleto}<br>
    <span>Média:</span> ${estudante.media}<br>
    <span>Situação:</span> <span class="situacao-${estudante.situacao.toLowerCase()}">${estudante.situacao}</span>
  `;
  resultadoDiv.appendChild(estudanteInfo);
});
