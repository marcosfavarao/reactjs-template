<h1 align="center">
  <img alt="Reactjs Banner" src="https://ik.imagekit.io/wijkynyxd3a7/reactjs-animation_z0ImQVJAJ.gif?ik-sdk-version=javascript-1.4.3&updatedAt=1657229535699" width="100%">
</h1>

<div align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/marcosfavarao/reactjs-template">
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/marcosfavarao/reactjs-template">
  <a href="https://github.com/marcosfavarao/reactjs-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/marcosfavarao/reactjs-template">
  </a>
  <a href="https://github.com/marcosfavarao/reactjs-template/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/marcosfavarao/reactjs-template.svg">
  </a>
  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen" />
  <a href="https://github.com/marcosfavarao/reactjs-template/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/marcosfavarao/reactjs-template?style=social">
  </a>
</div>

<br />

# React with Typescript template

O repositório é um template clonável, customizado e próprio, pronto para ser utilizado. Elaborado com o intuito de desenvolvimento de projetos utilizando ReactJS puro, removendo a necessidade de configurar e instalar pacotes padrões tais como:

- Linters(ESLint, Prettier...)
- Serviços de requisição(Axios)
- Icones SVG's

Conta com ferramentas úteis pré-desenvolvidas(Currency Formatter) e tema da aplicação configurado, em que neste último, basta apenas adicionar as cores que a mesma possa conter.

<br />

# Estrutura de Pastas

**Estrutura hierárquica**

```
src
|-- common
  |-- assets
    |-- images
    |-- svgs
  |-- styles
  |-- utils
|-- components
|-- hooks
|-- pages
|-- routes
|-- services
|-- App.tsx
|-- index.tsx
```

**Estrutura de componentes:**

```
components
|-- YourComponent
  |-- YourComponent.tsx
  |-- yourcomponent.styles.ts
  |-- index.ts
```

**Estrutura das páginas:**

```
pages
|-- YourPage
  |-- Components
  |-- YourPage.tsx
  |-- yourpage.styles.ts
  |-- index.ts
```

<br />

# Composição das Pastas

<p>Todos os assets e ferramentas uteis que o projeto utiliza, sejam imagens, estilos gobais, fontes, tema, etc...</p>

```
./common
```

<br />

<p>Todos os componentes reutilizáveis pela aplicação toda.</p>

```
./components
```

<br />

<p>Hooks criados compartilhados para facilitar na construção e elaboração dos componentes pelo ciclo de vida deles.</p>

```
./hooks
```

<br />

<p>Páginas containers de cada parte do projeto. São mapeadas e renderizadas mediante as rotas de acesso.</p>

```
./pages
```

<br />

<p>Rotas de acesso. Responsáveis por mapear as páginas e renderizar na DOM.</p>

```
./routes
```

<br />

<p>Serviços de provedor de dados API para aplicação. Contém todos os arquivos e instalação necessárias(axios) para consumação de API's REST.</p>

```
./services
```

<br />

# Como Executar

### Yarn Package Manager

```
$ yarn install

$ yarn start
```

<br />

### NPM Package Manager

```
$ npm install

$ npm start
```

<br />

# Pacotes Instalados

O projeto está configurado com os seguintes pacotes:

<a href="https://reactjs.org/" target="_blank"><img alt="Reactjs" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/reactjs-256-minimalist_n9vMOAmDJ-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523587" style="width: 64px" ></a>
<a href="https://www.typescriptlang.org/" target="_blank"> <img alt="Typescript" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/typescript-256-minimalist__f8_LEEDT-.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523631" style="width: 64px" > </a>
<a href="https://styled-components.com/" target="_blank"> <img alt="Styled-Components" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/styledcomponents-256-minimalist_VEmBXgzvY.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523391" style="width: 64px" > </a>
<a href="https://polished.js.org/" target="_blank"> <img alt="Polished" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/polished-256-minimalist_t2cRwHwYbP.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523411" style="width: 64px" > </a>
<a href="https://react-icons.github.io/react-icons/" target="_blank"> <img alt="React Icons" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/reacticons-256-minimalist_pmegaT6sK.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657236554873" style="width: 64px" > </a>
<a href="https://reactrouter.com/docs/en/v6/getting-started/overview" target="_blank"> <img alt="React Router DOM" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/reactrouterdom-256-minimalist_HJ-W4W0LzL.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523622" style="width: 64px" > </a>
<a href="https://axios-http.com/" target="_blank"> <img alt="Axios" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/axios-256-minimalist_T7fy7qTQS.png?ik-sdk-version=javascript-1.4.3&updatedAt=1657236553944" style="width: 64px" > </a>
<a href="https://eslint.org/" target="_blank"> <img alt="ESLint" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/eslint-256-minimalist_Ou8_iuA_Vn.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523591" style="width: 64px" > </a>
<a href="https://prettier.io/" target="_blank"> <img alt="Prettier" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/prettier-256-minimalist_s-Vm1rhyET.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523236" style="width: 64px" > </a>
<a href="https://editorconfig.org/" target="_blank"> <img alt="Editor Config" src="https://ik.imagekit.io/wijkynyxd3a7/development-icons/256x/minimalists/editorconfig-256-minimalist_rOnlWgMJX.png?ik-sdk-version=javascript-1.4.3&updatedAt=1653869523255" style="width: 64px" > </a>

<br />

## Dependências Principais

- Axios
- Polished
- React
- React Icons
- React Router DOM
- Styled-Components
- Typescript

<br />

## Dependências Secundarias

- ESLint
- Prettier
- Editor Config
- Web Vitals
