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