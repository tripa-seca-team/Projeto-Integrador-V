const { RESOLVER, Lifetime } = require('awilix')

const URL = 'mongodb+srv://projetointegrador:SenhaCompartilhada5@cluster0.j2lbl.mongodb.net/imigranteDB?retryWrites=true&w=majority'

const mongoose = require('mongoose');
// Adicionado o useCreateIndex como True
mongoose.set('useCreateIndex', true)
//Adicionado o useFindAndModify como False
const database = () => {
  mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
  return mongoose
}

module.exports = database

database[RESOLVER] = {
  name: 'mongoose',
  lifetime: Lifetime.SINGLETON,
}