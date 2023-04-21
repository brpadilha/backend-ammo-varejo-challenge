
## Descrição

Este projeto tem finalidade de apresentar o conhecimento técnico proposto no desafio da Ammo Varejo

## Instalação

```bash
$ npm install
```

## Rodar localmente
Este projeto está configurado para rodar em produção apontando para um banco de dados gratuito do [supabase](app.supabase.com).
Para rodar localmente, é recomendado criar sua configuração no supabase e colocar a url no .env ou utilizar o banco de dados sqlite.

### Com banco sqlite
No arquivo `schema.prisma` mudar na linha 2 o provider de `postgresql` para `sqlite` e na linha 3 a url para `file:./dev.db`. 

Rodar o comando `npx prisma migrate dev --name init`

## Rodando o projeto

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

Ao rodar o projeto você terá acesso ao `http://localhost.com/3000`, na rota `/products` você terá o retorno dos produtos já feitos no seed.

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Sobre mim

Sou desenvolvedor de software há mais de 3 anos, com experiência no frontend em React e backend com NodeJs e GraphQl. Me siga no github e nas outras redes encontradas nele.

- Author - [Bruno Padilha](https://github.com/brpadilha)

## License

Nest is [MIT licensed](LICENSE).
