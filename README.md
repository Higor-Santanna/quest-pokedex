# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Pokédex

A pokédex é uma aplicação web que utiliza a API poke API para mostrar dados de todos pokémons.


## Visão Geral

A pokédex é uma aplicação web que permite ao usuário navegar pelo universo Pokémon. Nessa navegação é possível descobrir detalhes gerais e mais aprofundados de cada Pokémon. Isso tudo funciona através da PokéAPI, uma API famoso no mundo do desenvolvimento web que possui catalogado todos os pokémons e suas informações respectivamente, algumas informações que você vai encontrar são nome, tipo, habilidade , evolução entre muitos outras.


## Funcionalidades

### - Dark/Light Mode:  
Toda aplicação possui mudança de tema. O tema ele se alterna em dois o tema claro e o escuro, fica preferência do usuário qual ele deseja usar;

### - Nome e Imagem: 
Na tela inicial é disponibilizado os primeiros 10 pokémons com suas respectivas imagens e seus nomes. Ao fim da aplicação se encontra um botão (LOAD MORE), que nada mais é que um botão que carrega mais 10 pokémons ao clicar nele.

### - Detalhes do Pokémon: 
Ao clicar no card de qualquer Pokémon você será redirecionado para uma página que conterá informações mais detalhadas sobre a criatura. As informações que serão mostradas é o nome, imagem, tipo, habilidades e movimentos. Nesta página conterá um botão de voltar e um alternador de tema.

### - Responsividade: 
Toda a pokédex é responsiva, logo você pode acessar em qualquer dispositivo desde computades e laptops á tablets e smartphones.


## Ferramentas Utilizadas

### - React: 
Uma biblioteca JavaScript para construir interfaces de usuário. Ela foi escolhida pela facilidade na criação e navegação de páginas dentro do projeto, além disso, deixa a aplicação mais performática o que melhora a experiência do usuário dentro do site. Ao iniciar um projeto React dentro dele já possui HTML / CSS / JavaScript integrado.

### - PokéAPI: 
Essa é a API utilizada para trazer todas as informações dos pokémons. Nela possui todos os pokémons e todas características do mesmo. O link da API está no final desse documento.

### - Styles-Components: 
é uma biblioteca que possibilita escrever códigos CSS dentro do JavaScript. Ela foi utilizada pela sua facilidade em criar “class”, o que é feito automaticamente por ele.

### - Git e GitHub: 
O controle de versão do projeto é gerenciado pelo Git e hospedado no GitHub, permitindo um fluxo de trabalho colaborativo e o controle de alterações ao longo do tempo.


## Decisões adotadas

### - Fazer funcionar: 
Desde o começo da criação do projeto era feito a parte mais complexa primeiro, isso facilitava na estilização pois, já adicionava o estilo em algo mais sólido com informações reais da API.

### - Estilização: 
A utilização dos styled-component foi pela facilidade que ele proporciona em criar “class”, porque, se fosse criar tudo “na mão” a chance de ocorrer algum bug seria grande.

### - Organização em pastas: 
O projeto poderia sim ser feito em apenas um arquivo, no entanto, ficaria muito bagunçado, com esse problema em mente a melhor solução foi quebrar o projeto em várias partes e trabalhar cada parte de forma separada, com isso, dando melhor atenção aos detalhes de cada fragmento da aplicação.


## Instalação

Se você deseja executar a Pokédex localmente, siga estas etapas:

1-	Clone este repositório em sua máquina local usando o seguinte comando Git:

    git clone: https://github.com/Higor-Santanna/quest-pokedex.git


2-	Depois de criado a pasta acesse o diretório do projeto:

    cd (nome da pasta)


3-	Instale as dependências do projeto usando um gerenciador de pacotes, como o npm ou yarn:

	Npm install ou yarn isntall

4-	Após a instalação de todas as dependências basta fazer um (npm start ou yarn start) e acessar a aplicação em alguma porta que será disponibilizada em forma de URL.

## Link da API

https://pokeapi.co/ 