const container = document.querySelector('#container');

//function que pega id da url
function getId(){
    const urlId = new URLSearchParams(window.location.search);
    return urlId.get("id");
}

// busca personagem pelo id
async function fetchCharacter(id) {
    try{
        const resp = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
        const data = await resp.json();

        renderCharacter(data); // Renderiza imagem e card info

        const episodes = data.episode 
        const episodesData = await fetchEpisode(episodes);
        renderEpisodes(episodesData)
    }    
    catch (error){  
        alert("Erro ao carregar personagem!")
    }
}

// Busca todos os episodios
async function fetchEpisode(episodes) {
    const promises = episodes.map(url => fetch(url).then(result => result.json()));
    const results = await Promise.all(promises);
    return results; // Retorna array com episodios

}

function renderCharacter(character){

    // Tratamento de erro da api
    if (character.type == ""){
        character.type = "unknown"
    } else {
        character.type = character.type
    }

    // Esvaziando conteudo da pagina
    container.innerHTML = "";

    // Cria imagem do personagem
    const img = document.createElement('img');
    img.src = character.image;
    img.alt = character.name;
    img.classList.add('imagem')

    // Adicionando nome 
    const name = document.createElement('h1');
    name.classList.add("name")
    name.innerText = character.name

    // Container pai que ira ter info e episodes
    const content = document.createElement('div');
    content.id = 'content'

    // Criando container info 
    const info = document.createElement('div');
    info.id = "character-info";
    info.innerHTML = `
    <div id="informations">
        <h2> Informations </h2>
        <div class="infocard">
            <h3> Gender </h3>
            <p> ${character.gender} </p>
        </div>
        <div class="infocard">
            <h3> Status </h3>
            <p> ${character.status} </p>
        </div>
        <div class="infocard">
            <h3> Species </h3>
            <p> ${character.species} </p>
        </div>
        <div class="infocard">
            <h3> Origin </h3>
            <p> ${character.origin.name} </p>
        </div>
        <div class="infocard">
            <h3> Type </h3>
            <p> ${character.type} </p>
        </div>
        <div class="infocard">
            <h3> Location </h3>
            <p> ${character.location.name} </p>
        </div>
    </div>`

    // Coluna para episodios
    const episodesContainer = document.createElement('div');
    episodesContainer.id = 'episodes';
    episodesContainer.innerHTML = `<h2> Episodes </h2>`
    // Adicionado tudo ao container pai
    content.appendChild(info)
    content.appendChild(episodesContainer)
    container.appendChild(img)
    container.appendChild(name)
    container.appendChild(content)
}

function renderEpisodes(episodes) {
    const episodesContainer = document.querySelector('#episodes');

    episodes.forEach(element => {
        const episodeDiv = document.createElement('div');
        episodeDiv.classList.add('infocard')
        episodeDiv.innerHTML = `
        <h3> ${element.episode} </h3>
        <p> ${element.name} </p>
        <p> ${element.air_date} </p>
        `
        
        episodesContainer.appendChild(episodeDiv);
    });
}

const id = getId();
if (id) {
    fetchCharacter(id)
} else {
    container.innerHTML = "<p> ID invalido ou ausente na URL </p>"
}
