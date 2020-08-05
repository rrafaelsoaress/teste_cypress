# Projeto

Desenvolvimento de um projeto de automação com tema livre.

Escolhi efetuar algumas validações no site da PicPay, testes de front-end com o [Cypress](https://www.cypress.io/)

## Instalação

1- Clonar o projeto do Github
```
git clone git@github.com:rrafaelsoaress/teste_cypress.git
```
2- Instalar o NodeJs

- Como instalar o [NodeJs](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-on-ubuntu-18-04-pt)

3- Na pasta instalar o Cypress

- Com instalar e abrir o [Cypress](https://docs.cypress.io/guides/getting-started/installing-cypress.html#npm-install)

## Cenários criados
1- Validar o redirecionamento do botão Central de Doações e validar as instituições presentes na primeira tela.

2- Gerar QrCode

3- Validar o redirecionamento do botão Sobre Nós, além de garantir que as seções dos botões estão presentes e por fim enviar uma mensagem em contatos sem todos os dados obrigatórios.

4- Validar o redirecionamento do botão Dúvidas Frequentes e abrir todas as perguntas da seção Sobre Nós

## Testes

- Para rodar todos os testes
```
./node_modules/.bin/cypress open

```

Na UI do Cypres clicar no teste que deseja rodar

- Para rodar um arquivo específico
```
npm run cy:run -- --record --spec "sobre_nos_step.js"

```

## O que foi feito
Conheci o Cypress a pouco tempo e achei interessante, decidi me desafiar e entregar um pequeno teste utilizando ele. Inclui PageObject nesse projeto, aqui chamado de [App Actions](https://www.cypress.io/blog/2019/01/03/stop-using-page-objects-and-start-using-app-actions/), consegui efetuar algumas validações e achei o Cypress bem interessante para teste de Front-end.