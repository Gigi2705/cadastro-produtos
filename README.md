# Cadastro de Produtos — MVC

## Integrante
- **Nome:** Giovana Gomes de Souza
- **RM:** 20240335

## Como executar

1. Clone o repositório:
git clone https://github.com/Gigi2705/cadastro-produtos.git

2. Entre na pasta do projeto:
cd cadastro-produtos

3. Instale as dependências:
npm install
npm install express ejs sequelize sqlite3

4. Execute o projeto:
npm start

5. Acesse no navegador:
http://localhost:3000/produtos

## Funcionalidades
- Cadastro de produtos
- Listagem de produtos
- Edição de produtos
- Exclusão de produtos
- Cadastro de categorias
- Listagem de categorias
- Edição de categorias
- Exclusão de categorias
- Associação de produtos a categorias
- Produtos por categoria

## Desafios
- **Desafio 1:** Criei o Model Categoria e associei com Produto usando belongsTo e hasMany. Adicionei CRUD de categorias e um campo select no formulário de produtos.
- **Desafio 2:** Criei uma rota /produtos/categoria/:categoriaId que filtra produtos pela categoria selecionada.