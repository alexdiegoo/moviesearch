## Movie Search App

<div margin="0 auto">

 ![logo](./.github/logo.svg)

<div>

<br />

### Sobre 

<p>Um web app para buscar filmes de várias categorias.</p>

#### Funcionalidades:
- O usuario pode procurar filmes pelas categorias ( Popular, Top rated e Upcoming)
- O usuario pode buscar um filme digitando no campo de busca.
- O usuario pode salvar e remover um filme na sua watchlist
- O usuario pode ver os detalhes de um filme.

#### Tecnologias usadas:
- React
- React Router Dom
- Axios
- Styled-components
- React icons

<br />

<div margin="0 auto">

  ![imagem](./.github/gif.gif)

</div>

<br />

<div margin="0 auto">

  #### Página inicial:
 ![imagem](./.github/screen1.png)
  #### WatchList:
 ![imagem](./.github/screen2.png)
  #### Página de detalhes: 
 ![imagem](./.github/screen3.png)

<div>

<br />

### Como testar o projeto:

`1- Criar uma conta no The Movie DB API e pegar uma key`
<br />

`2- Clonar o projeto`
<br />

`3- Criar a pasta e arquivo src/environment/index.js`
<br />

`4- Dentro de src/environment/index.js`
~~~js
export const Environment = {
  API_KEY: SUA_KEY,
  BASE_URL: 'https://api.themoviedb.org/3/',
}
~~~
<br />

`5- Rodar npm run dev`