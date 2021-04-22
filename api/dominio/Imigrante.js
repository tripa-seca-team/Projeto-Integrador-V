class Imigrante {
  constructor(nome, email, cpf, rgOuDocumentoIdentificacao, nacionalidade, idade, localNascimento, telefone, endereco, bairro, cidade, estado, pais, profissao) {
    this.nome = nome
    this.email = email
    this.cpf = cpf
    this.rgOuDocumentoIdentificacao = rgOuDocumentoIdentificacao
    this.nacionalidade = nacionalidade
    this.idade = idade
    this.localNascimento = localNascimento
    this.telefone = telefone                
    this.endereco = endereco
    this.bairro = bairro
    this.cidade = cidade
    this.estado = estado
    this.pais = pais
    this.profissao = profissao
  }
}

module.exports = Imigrante