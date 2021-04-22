module.exports = ({ImigranteRepositorio}) =>
  async (id) => {
    await ImigranteRepositorio.excluir(id)
  }