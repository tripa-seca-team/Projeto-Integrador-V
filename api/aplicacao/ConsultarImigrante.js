module.exports = ({ImigranteRepositorio}) => 
  async (nome, email) => {
    if(nome && email)
      return await ImigranteRepositorio.listarPorNomeEmail(nome, email)
    else if(nome)
      return await ImigranteRepositorio.listarPorNome(nome)
    else
      return await ImigranteRepositorio.listarTodos()
  }