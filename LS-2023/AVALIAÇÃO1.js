const readline = require('readline');

class Exam {
  constructor(respostasCorretas, pesoQuestao) {
    this.respostasCorretas = respostasCorretas;
    this.pesoQuestao = pesoQuestao;
  }

  calcularNota(respostasAluno) {
    if (respostasAluno.length !== this.respostasCorretas.length) {
      return "Número de respostas incorreto. Por favor, responda a todas as questões.";
    }

    let nota = 0;
    for (let i = 0; i < respostasAluno.length; i++) {
      if (respostasAluno[i].toUpperCase() === this.respostasCorretas[i]) {
        nota += this.pesoQuestao;
      }
    }

    return nota;
  }
}

function obterNotaDoAluno() {
  const respostasCorretas = ["A", "B", "A", "C", "D"];
  const pesoQuestao = 2;
  const respostasAluno = ["A", "B", "B", "B", "B"];

  const exam = new Exam(respostasCorretas, pesoQuestao);

  const nota = exam.calcularNota(respostasAluno);

  if (typeof nota === "number") {
    console.log(`A nota do aluno é: ${nota}`);
  } else {
    console.log(nota);
  }
}

// Chamar a função para iniciar o programa
obterNotaDoAluno();