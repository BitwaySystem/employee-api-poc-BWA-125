# employee-api-poc-BWA-125

Executar a aplicação
```sh
npm install
```

```sh
docker compose up
```

## Paths - Employee

| Função | Caminho |
| ------ | ------ |
| GET | /users |
| GET | /users/:id |
| POST | /users |
| PUT | /users/:id |
| DELETE | /users/:id |

### Busca todos os usuários
> GET /users

### Busca usuário por id
> GET /users/:id

### Criação de um usuário
> POST /users
```sh
{
  "name" : "string",
  "email" : "string"
}
```

### Atualizar usuário por id
> PUT /users/:id
```sh
{
  "name" : "string",
  "email" : "string"
}
```

### Deletar usuário por id
> DELETE /users/:id
