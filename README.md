# Revisão

## Node, NPM e Javascript

 - Arquitura cliente servidor web.
 - Javascript
 - Node.js
 - NPM 
  - npm init
  - npm install [nome do pacote] [nome do pacote] [nome do pacote]
  - npm uninstall [nome do pacote]
 

## Setup do Projeto
    - Pasta src
    - Type Module (package.json)
    - * --watch
    - * scripts (npm run [nome do script])
    - package.json / package-lock / node_modules

## Express

 - O que é express?
 - Routers
 - Métodos da API - POST, GET, PUT, DELETE e PATCH
 - Ordem das rotas importam
 - Params (:id, :name)
 - req e res
 - json (formato de entrada e saída de dados)

## MVC
 - O que é MVC
 - Model
 - View
 - Controller

## ORM (Prisma)
 - O que é o Prisma
 - Instalação do Prisma (npm i prisma -D)
 - (CLI - Command Line Interface)
 - Iniciar o Prisma no projeto (npx prisma init)
 - Gerar o schema do prisma com base em um banco com tabelas já existentes (npx prisma db pull)
 - Gerar o as tabelas do banco com base em um schema do prisma (npx prisma db push)
 - Instalar @prisma/client (npm i @prisma/client)
 - Gerar as funções para o client (npx prisma generate)