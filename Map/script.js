const estudantes = [
  { nome: 'João', notas: [7, 8, 6, 9] },
  { nome: 'Maria', notas: [9, 8, 7, 10] },
  { nome: 'Pedro', notas: [6, 7, 8, 9] }
];

function calcularMedia(notas) {
  const soma = notas.reduce((total, nota) => total + nota, 0);
  return soma / notas.length;
}

const estudantesProcessados = estudantes.map(estudante => {
  const media = calcularMedia(estudante.notas);
  const situacao = media >= 7 ? 'Aprovado' : 'Reprovado';
  const nomeCompleto = estudante.nome.toUpperCase();

  return {
    ...estudante,
    media,
    situacao,
    nomeCompleto
  };
});

const resultadoDiv = document.getElementById('resultado');
resultadoDiv.innerHTML = estudantesProcessados
  .map(estudante => `
    <p>
      <span>Nome:</span> ${estudante.nomeCompleto}<br>
      <span>Média:</span> ${estudante.media}<br>
      <span>Situação:</span> <span class="situacao-${estudante.situacao.toLowerCase()}">${estudante.situacao}</span>
    </p>
  `)
  .join('');
