const { DataTypes } = require('sequelize')
const { sequelize } = require('../core/sequelize');

const Contato = sequelize.define('Contato', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  celular: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
  },
  rua: {
    type: DataTypes.STRING,
  },
  numero: {
    type: DataTypes.INTEGER,
  },
  bairro: {
    type: DataTypes.STRING,
  },
  cidade: {
    type: DataTypes.STRING,
  },
  estado: {
    type: DataTypes.STRING,
  },
  cep: {
    type: DataTypes.INTEGER,
  },
})

module.exports = Contato
