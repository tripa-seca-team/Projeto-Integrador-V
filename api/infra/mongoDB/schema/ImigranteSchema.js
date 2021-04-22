const {RESOLVER} = require('awilix')
const {Schema} = require('mongoose')

const imigranteSchema = new Schema({
  nome: {
    type: String,
    index: true,
    required: [true, 'Nome é obrigatorio']
  },
  email: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'e-mail é obrigatorio']
  },
  cpf: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'CPF é obrigatorio']
  },
  rgOuDocumentoIdentificacao: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'RG Ou DocumentoIdentificacao é obrigatorio']
  },
  nacionalidade: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'nacionalidade é obrigatorio']
  },
  idade: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'idade é obrigatorio']
  },
  localNascimento: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'local de nascimento é obrigatorio']
  },
  telefone: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'telefone é obrigatorio']
  },
  endereco: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'endereço é obrigatorio']
  },
  bairro: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'bairro é obrigatorio']
  },
  cidade: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'cidade é obrigatorio']
  },
  estado: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'estado é obrigatorio']
  },
  pais: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'pais é obrigatorio']
  },
  profissao: {
    type: String,
    unique: true,
    index: true,
    required: [true, 'profissao é obrigatorio']
  }                
})

const imigranteModel = ({mongoose}) => mongoose.model('imigrantes', imigranteSchema)

module.exports = imigranteModel

imigranteModel[RESOLVER] = {
  name: 'ImigranteModel'
}