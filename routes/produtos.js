const express = require('express');
const router = express.Router();

const { Produto, Categoria } = require('../models');

// Listar todos os produtos (com categoria)
router.get('/', async (req, res) => {
  const produtos = await Produto.findAll({
    include: [{ model: Categoria, as: 'categoria' }]
  });
  res.render('produtos/index', { produtos });
});

// Formulário de novo produto (com categorias)
router.get('/novo', async (req, res) => {
  const categorias = await Categoria.findAll();
  res.render('produtos/novo', { categorias });
});

// Criar produto
router.post('/', async (req, res) => {
  await Produto.create(req.body);
  res.redirect('/produtos');
});

// 👇 NOVA ROTA (deve vir antes de /:id/editar)
router.get('/categoria/:categoriaId', async (req, res) => {
  const categoria = await Categoria.findByPk(req.params.categoriaId);
  const produtos = await Produto.findAll({
    where: { categoriaId: req.params.categoriaId },
    include: [{ model: Categoria, as: 'categoria' }]
  });
  res.render('produtos/porCategoria', { categoria, produtos });
});

// Formulário de edição (com categorias)
router.get('/:id/editar', async (req, res) => {
  const produto = await Produto.findByPk(req.params.id);
  const categorias = await Categoria.findAll();
  res.render('produtos/editar', { produto, categorias });
});

// Atualizar produto
router.post('/:id', async (req, res) => {
  await Produto.update(req.body, {
    where: { id: req.params.id }
  });
  res.redirect('/produtos');
});

// Deletar produto
router.post('/:id/deletar', async (req, res) => {
  await Produto.destroy({
    where: { id: req.params.id }
  });
  res.redirect('/produtos');
});

module.exports = router;