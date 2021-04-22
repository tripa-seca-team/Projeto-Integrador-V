const {RESOLVER} = require('awilix')
const {Schema} = require('mongoose')

const imigranteSchema = new Schema({
  nome: {
    type: String,
    index: true,
    required: [true, 'Nome é obrigatorio']
  },
  cpf: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'CPF é obrigatorio']
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'e-mail é obrigatorio']
  }
})

const imigranteModel = ({mongoose}) => mongoose.model('imigrantes', imigranteSchema)

module.exports = imigranteModel

imigranteModel[RESOLVER] = {
  name: 'ImigranteModel'
}