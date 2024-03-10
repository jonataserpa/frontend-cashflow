## Painel

![Dashboard](https://cdn.discordapp.com/attachments/1083115321935798314/1216463652534882385/image.png?ex=66007b0f&is=65ee060f&hm=34b89387aae91f68900a7cebe55ae4bd43415292913af3c68584d0a564e209e7&)

## Cadastro

![Cadastro](https://cdn.discordapp.com/attachments/1083115321935798314/1216464003782414397/image.png?ex=66007b63&is=65ee0663&hm=cf5da799d88b88bc1611d3ff52ef1b40bbc509314066c95e86b51ed3646b2312&)

## Description

Frontend projeto: Lista Defensoria do Estado do Rio Grande do Sul
- Front: React.js v.18
- Framework: Next.js v.14
- UI: radix-ui
- Icons: lucide-react
- CSS: tailwind - Responsible (Mobile)
- Validation: useForm e zod
- Gerenciamento de estado: zustand
- Test-unitario: Jest 
- Test e2e: Cypress
- Mock: Json-server
- Docker e docker-compose

Obs: - Tratamentos de erros da api: handleApiErrors (400, 404, 500)
     - Camada de Service separado por ServiceGateway e interfaces:
        - getAll, create, getById, updateById, deleteById
     - hooks personalizados
        - useDebounce e modal
     - Contants e Componentes separadas e organizadas;   

## Cash flow
 - CRUD: Modal e Form inputs use radix-ui 

## Installation

```bash
$ npm install
```

## Running the app

```bash
# exec json-server
$ npm run mock

# dev
$ npm run dev

# test
$ npm test

# se desejar usar uma imagem docker: 
# docker-compose permissao
$ npm sudo chmod +x .docker/entrypoint.sh

# docker-compose up
$ sudo docker-compose up

```

