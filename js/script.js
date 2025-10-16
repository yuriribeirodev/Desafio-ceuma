

const characterName = document.querySelector("#characterName");
const content = document.querySelector("#content");
const containerResult = document.querySelector("#result-style");
const url = 'https://rickandmortyapi.com/api/character';
const loadMore = document.querySelector('#load-more')

let currentPage = 1;
let currentName = '';
let hasNextPage = true;


// Function que extrai os dados da API
async function fetchApi(name = '', page = 1){
    try {
        const response =  await fetch(`${url}/?name=${name}&page=${page}`) // Procura pelo nome como sugerido na documentacao

        if (!response.ok)  return {results: [], next: null};
            const data = await response.json();
            return {results: data.results, next: data.info.next};
    } catch(error) {
        return {results: [], next: null};
    }
}


// function que constroi meu resultado
async function buildResult(name = '', page = 1, append = false) {
    if(!append) content.innerHTML = `<p id="loading"> carregando personagens... </p> `

    const { results: arrayCharacters, next } = await fetchApi(name,page);

    if(!append) content.innerHTML = '';

    if(!arrayCharacters || arrayCharacters.length === 0) {
        content.innerHTML = `<p id="notfound"> Nenhum personagem encontrado </p>`;
        loadMore.style.display = "none";
    } else {
         arrayCharacters.forEach(element => {
        const newDiv = document.createElement('div');
        const image = document.createElement('img');
        const name = document.createElement('h2');
        const species = document.createElement('p');
        const link = document.createElement('a');

        link.href = `character.html?id=${element.id}`;
        newDiv.classList.add('cards');
        image.src = `${element.image}` 
        name.innerHTML = element.name
        species.innerHTML = element.species
        link.appendChild(name);

        newDiv.appendChild(image);
        newDiv.appendChild(link);
        newDiv.appendChild(species);
        
        content.appendChild(newDiv)
        });

        // Verifica se existe proxima pagina
        if (next) {
        hasNextPage = true;
        loadMore.style.display = "block"; 
        } else {
        hasNextPage = false;
        loadMore.style.display = "none";  
        }
    }
}

// Filtra personagens
characterName.addEventListener('keyup', function() {
    currentName = characterName.value.trim();
    currentPage = 1
    buildResult(currentName);
});

// Busca mais ao clicar
loadMore.addEventListener('click', function() {
    if(hasNextPage) {
        currentPage += 1;
        buildResult(currentName,currentPage, true);
    }
});

// Constroi todo o visual da pagina
buildResult();


