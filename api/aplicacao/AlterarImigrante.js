const Imigrante = require('../dominio/Imigrante')

module.exports = ({ImigranteRepositorio}) => 
    async (id, nome, email, cpf, rgOuDocumentoIdentificacao, nacionalidade, idade, localNascimento, telefone, endereco, bairro, cidade, estado, pais, profissao) => {
      const imigrante = new Imigrante(nome, email, cpf, rgOuDocumentoIdentificacao, nacionalidade, idade, localNascimento, telefone, endereco, bairro, cidade, estado, pais, profissao)
      return await ImigranteRepositorio.alterar(id, imigrante)
    }