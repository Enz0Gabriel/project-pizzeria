# 🍕 MY-PIZZA 🍕

## Conteúdo
* [Sobre a aplicação](#sobre-a-aplicação)
* [Tecnologias](#hammer_and_wrench-tecnologias)
* [Iniciando a Aplicação](#car-Iniciando-a-aplicação)
* [Screenshots](#camera_flash-screenshots)
* [Licença](#balance_scale-licença)
* [Contato](#email-contato)

## Sobre a aplicação
Aplicação completa para pizzaria desenvolvida em 3 camadas, durante o curso [Projeto Completo NodeJS, React, React Native, TypeScript](https://www.udemy.com/course/dev-fullstack/), do prof. Matheus Fraga. O projeto é dividido em três partes:
<br />
1. **Back-end**: Desenvolvido em Node.JS com Typescript, utilizando Prisma com banco de dados PostgreSQL.
2. **Front-end**: Permite cadastrar produtos, categorias e fechar mesas. Desenvolvido em React com Next.js, Typescript e SASS.
3. **Mobile**: Permite lançar o consumo das mesas. Desenvolvido em React Native com Typescript.

## :hammer_and_wrench: Tecnologias
* **Back-end**
  * Node.js com Typescript
  * Prisma ORM para acessar o banco de dados
  * Autenticação JWT
  * Multer para upload de imagens

* **Front-end**
  * React com Next.js e Typescript
  * Nookies para armazenar cookies
  * SASS para estilização

* **Mobile**
  * React Native com Typescript
  * AsyncStorage para armazenamento de chaves/valores
  * Axios para consumo de API
  * React Navigation para navegação
  * Styled Components para estilização
  * React Native Reanimated para animações

## :car: Iniciando a aplicação
Baixe o repositório com git clone e entre na pasta do projeto.
```bash
$ git clone https://github.com/Enz0Gabriel/project-pizzeria
```

### __Back-end__
Na pasta backend, renomeie o arquivo _.env.local-example_ para _.env.local_<br/>
Informe a URL da API na variável __DATABASE_URL__.<br/>
Informe a palavra secreta da API na variável __JWT_SECRET__<br/>
```bash
# Instale as dependências
$ yarn

# Para iniciar a aplicação na porta 3333
$ yarn dev
```
### __Front-end__
  Na pasta web, informe o IP da aplicação back-end no arquivo _src/services/api.ts_<br/>
```bash
# Instale as dependências
$ yarn

# Para iniciar a aplicação na porta 3000
$ yarn dev
```
### __Mobile__
  Na pasta web, informe o IP da aplicação back-end no arquivo _src/services/api.ts_<br/>
```bash
# Instale as dependências
$ npx

# Para iniciar a aplicação
$ npx react-native run-android
```

## :camera_flash: Screenshots
![](https://github.com/Enz0Gabriel/project-pizzeria/blob/main/frontend/src/assets/pizza-web.gif)

## :balance_scale: Licença
Este projeto está licenciado sob a [licença MIT](LICENSE).

## :email: Contato

E-mail: [**enzogabrielcarvalho123@gmail.com**](mailto:enzogabrielcarvalho123@gmail.com)
