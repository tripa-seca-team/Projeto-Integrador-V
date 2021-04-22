const Imigrante = require('../dominio/Imigrante')

module.exports = ({ImigranteRepositorio}) => 
    async (id, nome, email, cpf) => {
      const imigrante = new Imigrante(nome, email, cpf)
      return await ImigranteRepositorio.alterar(id, imigrante)
    }