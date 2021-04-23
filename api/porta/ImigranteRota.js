const express = require('express')
const router = express.Router()
const {body, param} = require('express-validator')

module.exports = (container) => {
  const controlador = container.resolve('ImigranteControlador')

  router.get('/', controlador.consultar)

  router.post(
    '/',
    body('nome')
      .not()
      .trim()
      .isEmpty()
      .withMessage('Nome não pode ser vazio ou somente com espaços.n/'),
    body('email').isEmail(),
    body('cpf').isLength({ min: 11, max: 14 }),
    body('rgOuDocumentoIdentificacao').isLength({ min: 11, max: 14 }),
    body('nacionalidade').isLength({ min: 3, max: 14 }),    
    body('idade').isLength({ min: 2, max: 2 }),
    body('localNascimento').isLength({ min: 3, max: 14 }),
    body('telefone').isLength({ min: 11, max: 14 }),    
    body('endereco').isLength({ min: 5, max: 25 }),
    body('bairro').isLength({ min: 2, max: 14 }),
    body('cidade').isLength({ min: 2, max: 14 }),
    body('estado').isLength({ min: 2, max: 14 }),
    body('pais').isLength({ min: 2, max: 14 }),
    body('profissao').isLength({ min: 2, max: 14 }),    
    controlador.inserir
  )
  
  router.delete(
    '/:id',
    param('id').not().isEmpty(),
    controlador.excluir
  )
  router.put('/:id', controlador.alterar)

  return router
}