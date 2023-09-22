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
    const respostasCorretas = ["A", "B", "C", "D", "E"];
    const pesoQuestao = 2;
  
    const exam = new Exam(respostasCorretas, pesoQuestao);
  
    const respostasAluno = [];
  
    for (let i = 1; i <= 5; i++) {
      const resposta = prompt(`Digite a resposta da questão ${i}:`);
      respostasAluno.push(resposta.toUpperCase());
    }
  
    const nota = exam.calcularNota(respostasAluno);
  
    if (typeof nota === "number") {
      alert(`A nota do aluno é: ${nota}`);
    } else {
      alert(nota);
    }
  }
  
  // Chamar a função para iniciar o programa
  obterNotaDoAluno();