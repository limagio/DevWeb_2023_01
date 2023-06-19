class Pessoa {
    constructor(nome, dataNascimento) {
      this.nome = nome;
      this.dataNascimento = dataNascimento;
    }
  
    getIdade() {
      const hoje = new Date();
      const anoAtual = hoje.getFullYear();
      const mesAtual = hoje.getMonth();
      const diaAtual = hoje.getDate();
  
      const dataNascimento = new Date(this.dataNascimento);
      const anoNascimento = dataNascimento.getFullYear();
      const mesNascimento = dataNascimento.getMonth();
      const diaNascimento = dataNascimento.getDate();
  
      let idade = anoAtual - anoNascimento;
  
      if (mesAtual < mesNascimento || (mesAtual === mesNascimento && diaAtual < diaNascimento)) {
        idade--;
      }
  
      return idade;
    }
  }
  
  const pessoas = [
    new Pessoa("Fulano", "1990-05-15"),
    new Pessoa("Ciclano", "1985-08-25"),
    new Pessoa("Beltrano", "1998-02-10"),
  ];
  
  Pessoa.prototype.getNiver = function() {
    const hoje = new Date();
    const anoAtual = hoje.getFullYear();
    const mesAtual = hoje.getMonth();
    const diaAtual = hoje.getDate();
  
    const dataNascimento = new Date(this.dataNascimento);
    const mesNascimento = dataNascimento.getMonth();
    const diaNascimento = dataNascimento.getDate();
  
    if (mesNascimento < mesAtual || (mesNascimento === mesAtual && diaNascimento <= diaAtual)) {
      return true;
    } else {
      return false;
    }
  };
  
  for (let i = 0; i < pessoas.length; i++) {
    const pessoa = pessoas[i];
    const idade = pessoa.getIdade();
    const niver = pessoa.getNiver();
  
    if (niver) {
      console.log(`${pessoa.nome} tem ${idade} anos e já fez aniversário esse ano.`);
    } else {
      console.log(`${pessoa.nome} tem ${idade} anos e ainda não fez aniversário esse ano.`);
    }
  }
  