# Repositorio Base
A ideia do repositorio é servir de base para novos projetos. Com todos os pacotes e depencias necessarias para iniciar da melhor forma. O projeto foi criado com Next.js e styled-components. Para configuração do projeto, foram instalados:

  - ESLint

  - Husky

  - Conventional Commits

O arquivo main.yml foi criado para implementar a primeira rotina de CI. Até então só tem o Lint, mas o Vercel pode ser adicionado depois.

A maior parte do repositorio está utilizando o yarn para administrar os pacotes, por isso as rotinas foram montadas com ele.


## 📋 Instalação Base

    - Clonar repositorio
    $ git clone https://github.com/carolandrade1/template && cd template

    - Instalar dependencias
    $ yarn install

    - Rodar aplicativo
    $ yarn dev

    - Acesse http://localhost:3000/ e navegue pelo site


<!-- ## 📦 Pacotes e dependencias (caso queira começar do zero)

    - Next.js + styled-components
    yarn create next-app --example with-styled-components
    
    - ESLint
    yarn add eslint --dev
    yarn run eslint --init

    * adicionar no arquivo package.json na seção scripts:
    "lint": "eslint --ignore-path .gitignore ."
    "lint:fix": "eslint --fix --ignore-path .gitignore ."

    - Husky
    yarn add husky -D
    yarn prepare (depois de adicionar o prepare)
    npx husky add .husky/pre-commit "yarn lint:fix

    * adicionar no arquivo package.json na seção scripts:
    "prepare": "husky install"

    - Conventional Commits
    npm install commitizen -g
    commitizen init cz-conventional-changelog --yarn --dev --exact

    * adicionar no arquivo package.json na seção scripts:
    "commit": "cz"

    - Prop Types
    npm install --save prop-types -->