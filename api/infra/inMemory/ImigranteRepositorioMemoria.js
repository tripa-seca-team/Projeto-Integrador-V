const {RESOLVE, Lifetime, InjectionMode} = require('awilix')

class ImigranteRepositorioMemoria {
  constructor() {
    this.db = []
  }

  inserir(imigrante) {
    this.db.push(imigrante)
    imigrante.id = this.db.length
    return imigrante
  }

  listarTodos() {
    return this.db
  }

  excluir(id) {
    const imigrante = this.db.find(c => c.id === Number(id))
    if(!imigrante)
      throw new Error('Imigrante não encontrado')
    this.db = this.db.filter(c => c.id !== Number(id))
  }

  alterar(id, imigrante) {
    imigrante.id = this.db[id - 1].id
    this.db[id - 1] = imigrante
    return imigrante
  }
}
//const repositorio = new ImigranteRepositorioMemoria()
module.exports = ImigranteRepositorioMemoria

ImigranteRepositorioMemoria[RESOLVE] = {
  name: 'ImigranteRepositorio',
  lifetime: Lifetime.SINGLETON,
  injectionMode: InjectionMode.CLASSIC
}


