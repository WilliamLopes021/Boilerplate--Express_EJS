# Boilerplate MVC com Express

## Propósito

Este arquivo foi feito com o intuito de facilitar a construção de softwares com arquitetura MVC que utilizam como framework o `express`. Ele tem uma estrutura simples que pode ser facilmente adaptada para as tecnologias de preferência do indivíduo. Além de servir como boilerplate, este _projeto_ também serviu como aprendizado para mim de como estabelecer uma aplicação do zero; configurações de middlewares, padrão de projeto, separação de responsabilidades, webpack, etc. Como dito, é algo simples que foi feito com intuito de condensar o conhecimento adquirido de cursos e outras fontes.

## Tópicos/Tecnologias

- [Boilerplate](#boilerplate)
- [Helmet e CSRF](#helmet-e-csrf-tokens)
- [EJS](#ejs)
- [Sessions](#sessions-com-express-session)
- [Mongoose e connect-mongo](#mongoose-e-connect-mongo)

## Boilerplate

Boilerplate é a configuração inicial de um projeto, ou seja, o que se repete todas vezes. É a _fundação_ do seu projeto, por isto não inclui regras de negócio, é apenas um padrão mínimo.

## Helmet e CSRF Tokens

Helmet protege a aplicação com configurações via headers.
CSRF é um tipo de ataque, no qual requisições maliciosas são enviadas ao backend. Para evitar isso a biblioteca CSURF é utilizada nesse boilerplate para injetar um token de autorização em cada formulário.

## EJS

Embedded JavaScript templating, ou EJS, é uma maneira diferente de incorporar o JavaScript dentro do HTML. A sua sintaxe é simples e extremamente semelhante com o HTML. Link para a [documentação](https://ejs.co/).

## Sessions com express-session

O `express-session` é um middleware que permite a criação e manipulação de sessões no sistema. Com ela é possível persistir os dados de um usuário no servidor. Ele é simples e facilmente maleável, mas não é tão escalável.

## Mongoose e connect-mongo

Mongoose é o ODM utilizado para conexão com o banco de dados. O connect-mongo é uma lib que utiliza o client fornecido pelo mongoose para gerenciar as sessões junto com o express-session.

---

Feito por [Gabriel William](https://github.com/WilliamLopes021). Alterações futuras provavelmente serão feitas!
