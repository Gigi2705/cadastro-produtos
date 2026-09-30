const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  logging: false
});

// Model Categoria
const Categoria = sequelize.define('Categoria', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

// Model Produto
const Produto = sequelize.define('Produto', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  },
  preco: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  quantidade: {
    type: DataTypes.INTEGER,
    defaultValue: 0
  }
});

// Associação: Um Produto pertence a uma Categoria
Produto.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  as: 'categoria'
});

// Uma Categoria tem muitos Produtos
Categoria.hasMany(Produto, {
  foreignKey: 'categoriaId',
  as: 'produtos'
});

module.exports = {
  sequelize,
  Produto,
  Categoria
};