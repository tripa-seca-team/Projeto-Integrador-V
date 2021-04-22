const {validationResult} = require('express-validator')

module.exports = ({ConsultarImigrante, CriarImigrante, AlterarImigrante, ExcluirImigrante}) => ({
  inserir : async (req, res) => {

    const erros = validationResult(req)

    if(!erros.isEmpty()) {
      return res.status(400).json({erros: erros.array()})
    }    

    const {nome, email, cpf} = req.body
    try {
      const imigrante = await CriarImigrante(nome, email, cpf)
      res.json(imigrante)
    } catch(err) {
      res.status(400).json(`Erro ao tentar gravar imigrante ${err.message}`)
    }
  },

  consultar : async (req, res) => {
    const {nome, email} = req.query

    const imigrantes = await ConsultarImigrante(nome, email)
    res.json(imigrantes)
  },

  excluir : async (req, res) => {
    const erros = validationResult(req)

    if(!erros.isEmpty()) {
      return res.status(400).json({erros: erros.array()})
    }    

    
    console.log('Chamou o excluir')
    const id = req.params.id
    await ExcluirImigrante(id)
    res.json({mensagem: 'Imigrante excluido com sucesso'})
  },

  alterar : async (req, res) => {
    const id = req.params.id
    const {nome, email, cpf} = req.body

    const imigrante = await AlterarImigrante(id, nome, email, cpf)
    res.json(imigrante)
  }
})