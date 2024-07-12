# Backend do Planner

Este projeto é o backend da aplicação Planner, que pode ser acessada no [Frontend](https://github.com/iigorfelipe/planner). O Planner é um site desktop para montar planos de viagem com amigos, registrar atividades e links úteis. Este backend fornece a API necessária para o frontend consumir.

## Tecnologias Utilizadas

- NodeJs
- TypeScript
- Prisma
- Zod

## Executando o Projeto Localmente

Siga os passos abaixo para configurar e executar o projeto localmente:

1. Clone o repositório para sua máquina:
    ```bash
    git clone git@github.com:iigorfelipe/planner-backend.git
    ```

2. Entre na pasta do projeto:
    ```bash
    cd backend
    ```

3. Utilize o arquivo `.env.example` como exemplo para criar o seu arquivo `.env`.

4. Instale as dependências:
    ```bash
    npm install
    ```

5. Configure o Prisma:
    ```bash
    npx prisma generate
    npx prisma migrate dev
    ```

6. Execute o projeto:
    ```bash
    npm run dev
    ```

## Autor

- [Igor Felipe - Linkedin](https://www.linkedin.com/in/iigor-felipe/)
