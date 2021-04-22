const Imigrante = require('../dominio/Imigrante')

module.exports = ({ImigranteRepositorio}) => 
  async (nome, email, cpf) => {
    const imigrante = new Imigrante(nome, email, cpf)
    return await ImigranteRepositorio.inserir(imigrante)
  }