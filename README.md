## Painel

![Dashboard](https://cdn.discordapp.com/attachments/1083115321935798314/1216731562389798912/image.png?ex=66017492&is=65eeff92&hm=1eda02ca9f89c0ce995fb97797934356bb7266c8ba776723a8cf43de0f068a7e&)

## Cadastro

![Cadastro](https://cdn.discordapp.com/attachments/1083115321935798314/1216731799661580369/image.png?ex=660174ca&is=65eeffca&hm=4fb74a6e505146a5d48c6081a8e5f36a4a3195c01ed5ad94171671d8f0bc19f9&)

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

