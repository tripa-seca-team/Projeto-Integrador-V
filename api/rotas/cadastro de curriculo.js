const express = require('express')
const rotas = express.Router()

let curriculos = []

rotas.get('/', (req, res) => {
  res.json(curriculos)
})

rotas.post('/', (req, res) => {
  const curriculo = req.body
  

  if(!curriculo.nome) {
    res.status(400).json({erro: 'Nome não informado'})
  } else {
    curriculos.push(curriculo)
    curriculo.id = curriculos.length
  res.json(curriculo)
  }

})

rotas.put('/:id',(req,res)=> {
  
  const curriculo = curriculos.find(c => c.id === parseInt(req.params.id))
  if (!curriculo) res.status(404).send('Informe o id correto')

  
  curriculo.nome = req.body.nome
  res.send(curriculo)


  
})



rotas.delete('/:id',(req,res)=> {
const id = req.params.id

  const curriculo = curriculos.find(c => c.id = id)

    if(!curriculo)
      res.status(400).json({erro: 'curriculo nao encontrado'})
    else {
      curriculos = curriculos.filter(c => c.id !=id)
      res.json({sucesso: 'curriculo excluido da base'})
    }


})

module.exports = rotas