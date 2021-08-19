# Repositorio Base

A ideia do repositorio é servir de base para novos projetos. Com todos os pacotes e depencias necessarias para iniciar da melhor forma. O projeto foi criado com Next.js e styled-components. Para configuração do projeto, foram instalados:

- [ESLint](https://eslint.org/)

- [Husky](https://typicode.github.io/husky/#/)

- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

O arquivo main.yml foi criado para implementar a primeira rotina de CI. Até então só tem o Lint, mas o Vercel pode ser adicionado depois.

A maior parte do repositorio está utilizando o yarn para administrar os pacotes, por isso as rotinas foram montadas com ele.

## 📋 Instalação Base

1. Clonar repositorio

```
git clone https://github.com/carolandrade1/template_next_styled && cd template_next_styled
```

2. Instalar dependências

```
yarn install
```

3. Trocar URL do repositorio remoto (caso necessário)

3.1. Ver qual o repositorio atual
```
git remote -v
```
3.2. Mudar a URL do repositorio remoto
```
git remote set-url origin <LinkDoNovoRepositorio>
```
3.3. Verifique se a mudança foi realizada
```
git remote -v
```

4. Rodar aplicativo

```
yarn dev
```

5. Acesse http://localhost:3000/ e navegue pelo site

## 📦 Pacotes e dependencias, caso queira começar do zero.

- Next.js + styled-components

```
yarn create next-app --example with-styled-components
```

- ESLint

1. Instalar a lib

```
yarn add eslint --dev
yarn run eslint --init
```

2. Adicionar no arquivo package.json na seção scripts:

```
"lint": "eslint --ignore-path .gitignore ."
"lint:fix": "eslint --fix --ignore-path .gitignore ."
```

- Husky

1. Instalar a lib

```
yarn add husky -D
```

2. Adicionar no arquivo package.json na seção scripts:

```
"prepare": "husky install"
```

3. Rodar no terminal:

```
yarn prepare
npx husky add .husky/pre-commit "yarn lint:fix"
```

- Conventional Commits

1. Instalar a lib

```
npm install commitizen -g
commitizen init cz-conventional-changelog --yarn --dev --exact
```

2. Adicionar no arquivo package.json na seção scripts:

```
"commit": "cz"
```

- Prop Types

```
npm install --save prop-types
```
