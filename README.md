# Prime Flix

## Sobre o projeto

Prime Flix é um projeto React+ Vite que permite aos usuários pesquisar filmes e séries de TV utilizando a API da TMDB (The Movie Database). Ele exibe detalhes como título, descrição, avaliação e poster dos filmes encontrados.

## Funcionalidades

-   Pesquisa de filmes e séries de TV
-   Exibição de detalhes dos filmes, incluindo título, descrição, avaliação e poster

## Instalação

1. Clone este repositório: `git clone https://github.com/VictorFelicio/prime-flix.git`
2. Navegue até o diretório do projeto: `cd prime-flix`
3. Instale as dependências: `npm install`
4. Crie o arquivo `.env` e adicione sua chave de API da TMDB.
5. Inicie o servidor de desenvolvimento: `npm run dev`

## Tecnologias Utilizadas

<div style="display: flex; align-items: center">
    - React <a style="margin-left: 10px"  href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=react&theme=dark" alt="React" style="width: 20px; height: 20px;">
    </a>
</div>
<div style="display: flex; align-items: center">
    - Axios <a style="margin-left: 10px"  href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=actix&theme=dark" alt="React" style="width: 20px; height: 20px;">
    </a>
</div>
<div style="display: flex; align-items: center">
    - API TMDB (The Movie Database) <a style="margin-left: 10px"  href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=crystal&theme=dark" alt="React" style="width: 20px; height: 20px;">
    </a>
</div>
<div style="display: flex; align-items: center">
    - Typescript <a style="margin-left: 10px"  href="https://skillicons.dev">
      <img src="https://skillicons.dev/icons?i=typescript&theme=dark" alt="React" style="width: 20px; height: 20px;">
    </a>
</div>

## Configuração da Chave da API da TMDB

Para utilizar a API da TMDB, é necessário obter uma chave de API. Você pode se registrar gratuitamente no [site da TMDB](https://www.themoviedb.org/) e obter sua chave de API. Depois de obter a chave, crie o arquivo `.env` no projeto:

```javascript
VITE_API_KEY_TMDB = 'SUA_CHAVE_DA_API_AQUI';
```
