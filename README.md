# My Contacts Server

## Descrição

Backend feito em Nest.js para ser consumido na aplicação My Contacts.

## Instalação

Após fazer o clone deste repositório, rode o comando

```bash
$ yarn install
```

para instalar as dependências do projeto.

Crie um novo arquivo .env e insira as informações como descrito no arquivo .env.example.

## Rodando a aplicação

Finalizando a instalação, podemos rodar a aplicação com os seguintes comandos:

```bash
# development
$ yarn run start

# watch mode
$ yarn run start:dev

# production mode
$ yarn run start:prod
```

## Documentação das rotas da API

Vale lembrar que ao rodar a aplicação em desenvolvimento, a BASE_URL será:

```bash
BASE_URL = http://localhost:3000
```

Toda a documentação sobre as rotas podem ser acessadas em

```bash
http://localhost:3000/api/
```

Vale lembrar que este app está com o CORS configurado para que apenas

```bash
http://localhost:5173
```

possa realizar solicitações, que é a porta configurada para o front end.

## License

Nest is [MIT licensed](LICENSE).
