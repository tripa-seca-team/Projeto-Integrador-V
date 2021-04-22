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
      .withMessage('Nome não pode ser vazio ou somente com espaços'),
    body('email').isEmail(),
    body('cpf').isLength({ min: 11, max: 14 }),
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