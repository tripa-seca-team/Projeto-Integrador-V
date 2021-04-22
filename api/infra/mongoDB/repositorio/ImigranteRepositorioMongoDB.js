const { RESOLVER, Lifetime } = require('awilix')

const ImigranteRepositorio = ({ImigranteModel}) => ({
  inserir: async (imigrante) => {    
    const imigranteModel = new ImigranteModel(imigrante);
    
    const novoImigrante = await imigranteModel.save()
    console.log('Novo imigrante...', novoImigrante)

    return novoImigrante
  },

  listarTodos: async () => {
    return await ImigranteModel.find({}, null, {limit: 100})
  },

  listarPorNome: async (nome) => {
    return await ImigranteModel.find({
      nome: {$regex: `.*${nome}.*`, $options : 'i'}
    })
  }, 

  listarPorNomeEmail: async (nome, email) => {
    return await ImigranteModel.find({
      nome: {$regex: `.*${nome}.*`, $options : 'i'},
      email: {$regex: `.*${email}.*`, $options : 'i'}
    })
  },

  excluir: async (id) => {
    const imigrante = await ImigranteModel.findByIdAndDelete(id)
    console.log('Imigrante excluido: ', imigrante)
  },

  alterar: async (id, imigrante) => {
    const antigoImigrante = await ImigranteModel.findByIdAndUpdate(id, imigrante)
    console.log('Antigo imigrante: ', antigoImigrante)
  },

  alterarNome: async (id, nome) => {
    const antigoImigrante = await ImigranteModel.findByIdAndUpdate(id, {nome})
    console.log('Antigo imigrante: ', antigoImigrante)
  },
})

module.exports = ImigranteRepositorio

ImigranteRepositorio[RESOLVER] = {
  name: 'ImigranteRepositorio',
  lifetime: Lifetime.SINGLETON
}