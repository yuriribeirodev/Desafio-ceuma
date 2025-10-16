# Desafio Rick & Morty.

Este projeto foi desenvolvido como parte do meu aprendizado em **JavaScript**, com o objetivo de praticar consumo de APIs, manipulação do DOM e criação de interfaces responsivas sem o uso de frameworks.

A aplicação permite **explorar personagens da série Rick and Morty**, trazendo informações diretamente da [Rick and Morty API](https://rickandmortyapi.com/).

---

## Funcionalidades

### Página inicial (`index.html`)
- Exibe os **20 primeiros personagens** automaticamente ao abrir a página.  
- Permite **filtrar personagens pelo nome** digitando no campo de busca e pressionando **Enter**.  
- Mostra uma mensagem de **“Carregando personagens…”** enquanto busca os dados.  
- Exibe uma mensagem de **“Nenhum personagem encontrado”** caso a busca não retorne resultados.  
- Possui um botão **“Carregar mais”** que traz os próximos personagens da API.  
- Cada personagem é exibido em um **card** com:
  - Imagem  
  - Nome  
  - Espécie  

Clicando em qualquer card, o usuário é levado para a página de detalhes do personagem.

---

### Página de detalhes (`character.html`)
- Mostra uma imagem grande do personagem, nome e informações como:
  - Status (vivo, morto ou desconhecido)
  - Espécie
  - Gênero
  - Origem
  - Localização atual
- Ao lado, há uma seção com a lista de **episódios** em que o personagem aparece.
- O layout é **responsivo**, adaptando-se bem a telas menores (as seções passam a ficar uma abaixo da outra).

---

## Tecnologias utilizadas

- **HTML5**  
- **CSS3** (com media queries para responsividade)  
- **JavaScript (ES6+)**  
- **Fetch API** para requisições HTTP  
- **Rick and Morty API** como fonte de dados  

---

## Conceitos praticados

- Consumo de APIs REST com `fetch()`
- Manipulação do DOM com `createElement()` e `appendChild()`
- Paginação simples (“carregar mais”)
- Tratamento de erros e mensagens de estado (loading, not found)
- Separação de responsabilidades entre HTML, CSS e JS
- Layout responsivo com `flexbox` e `grid`

---

## O que aprendi com o projeto

- Como estruturar uma aplicação com JavaScript puro sem depender de bibliotecas externas.  
- A importância de tratar os diferentes estados da aplicação (carregando, erro, resultado vazio).  
- Como lidar com **async/await** e chamadas assíncronas de forma clara.  
- Boas práticas básicas de CSS e responsividade.  

---

## Como executar o projeto

1. Baixe ou clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/rick-and-morty-explorer.git
