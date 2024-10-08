import { listaDeAssuntos, assuntosEndpoints } from './dados.js';

//carrega dados do localstorage, se houver
let nomeDaPessoa = localStorage.getItem("nomeDaPessoa") || "usuário";
if(nomeDaPessoa===null || nomeDaPessoa==="usuário"){nomeDaPessoa = prompt("INFORME SEU NOME");
if(nomeDaPessoa===null || nomeDaPessoa===""){nomeDaPessoa="Anônimo"};
localStorage.setItem("nomeDaPessoa", nomeDaPessoa);}
document.getElementById('nomeDaPessoa').innerText=nomeDaPessoa;
const ultimoAssunto = localStorage.getItem('ultimoAssunto');
if(!ultimoAssunto){ultimoAssunto="música"}//abre sempre com o assunto música

    

// Carregar os assuntos na lista select
const assuntoSelect = document.getElementById('assunto');

listaDeAssuntos.forEach(assunto => {
  const option = document.createElement('option');
  option.value = assunto.replace(" ", "-").toLowerCase();
  option.text = assunto;
  assuntoSelect.appendChild(option);
});
// Marcar a opção selecionada antes
if (ultimoAssunto) {
    assuntoSelect.value = ultimoAssunto.replace(" ", "-").toLowerCase();
    capturarEndpoints(assuntoSelect.value);
  }

// Função para capturar endpoints do assunto selecionado
function capturarEndpoints(assunto="") {
  const selectedAssunto = assuntoSelect.value;

  // Verificar se o assunto selecionado é válido
  if (!selectedAssunto) {
    console.error('Selecione um assunto válido!');
    return; // Sai da função caso não haja assunto selecionado
  }

  const endpoints = assuntosEndpoints[selectedAssunto];

  // Verificar se há endpoints para o assunto selecionado
  if (!endpoints) {
    console.error('Não há endpoints cadastrados para este assunto.');
    return; // Sai da função caso não haja endpoints para o assunto
  }

  // Processar os endpoints (exemplo: console.log(endpoints))
  console.log('Endpoints para', selectedAssunto, ':', endpoints);

  // Você pode chamar aqui a função que irá buscar e exibir os posts
  // utilizando os endpoints capturados (exemplo:
  buscarEExibirPosts(endpoints);

}
  //pega os dados do site
  const linkSIte = endPoint.url;
  const titleSIte = endPoint.nome;

// Função para buscar e exibir os posts de um conjunto de endpoints
async function buscarEExibirPosts(endpoints) {
    const resultadosDiv = document.getElementById('resultados');
    resultadosDiv.innerHTML = ''; // Limpa o container antes de adicionar novos posts
  
    // Itera sobre cada endpoint
    for (const endpoint of endpoints) {
      try {
        const response = await fetch(endpoint.endpoint); console.log("log response: ");console.log(response);
        const posts = await response.json(); console.log("log posts: ");console.table(posts);
  
        (function(){
 
          /*URL do site*/
          const urlSite = posts;
           
          /*definimos um endpoint para resgatar os posts, com imagens*/
          const endPoint = `${urlSite}/wp-json/wp/v2/posts?_embed$per_page=3`;
           
          /*faz requisição do tipo GET que retornará os posts*/
          fetch(endPoint)
          .then(response => response.json())
          .then( posts => {
           
             /*Define uma variável que receberá um array*/
             const html = [];
           
            /*Percorre o posts*/
            posts.forEach( post => {
                   
                /*resgata o titulo*/
                const title = post.title.rendered;
                console.log(title);
                /*resgatar o link*/
                const link = post.link;console.log(link);
           
                /*resgata as images*/
                const images = post._embedded['wp:featuredmedia'][0].media_details.sizes; console.log(images);// esta chave muda de nome 
           
                //resgata a image especifica, no caso medium.
                const image = images.medium.source_url; console.log(image);
                
              template=`<article id="post${title[i]}${post.id}">
               <h4><a href="${posts.posts[0].URL}">${posts.posts[0].title}</a></h4>
                 <img src="${posts.posts.featured_media[0]}" alt="${posts.posts[0].title}" style="width:100%; height:auto;">
                 <p>${posts.posts.excerpt}</p>
                 <p><a target="noticia-completa" href="${posts.posts[0].URL}">Leia mais</a></h4></p>
             </article><hr />` 
                return template;
             });
             
          });
           
          })();
          /*template para cada site | var endpoints

          <div id="site${posts.site[i]}"><p class="nome-site"><span>CONTEÚDO DO SITE</span> <a href="${posts.link}" title="veja mais no site ${posts.nomeSite}" class="link-site">${post.nomeSite}</a></p>
          
          //loop forEach para cada endpoint
          
          //template para cada post 
          <article id="post${posts.site[1]}${posts.post[0].postID}">
              <h4><a href="${posts.posts[0].URL}">${posts.posts[0].title}</a></h4>
                <img src="${posts.posts.featured_media[0]}" alt="${posts.posts[0].title}" style="width:100%; height:auto;">
                <p>${posts.posts.excerpt}</p>
                <p><a target="noticia-completa" href="${posts.posts[0].URL}">Leia mais</a></h4></p>
            </article>
            //template post fim

            //loop forEach endpoint fim

          </div> //template cada site fim | var endpoints
        
*/
        //mudar a função abaixo para adaptar ao template acima 

        

        // Itera sobre cada post e renderiza
        // se for um array, ou um array vazio usamos forEach
        if(posts.constructor === Array || posts.length<1){
            posts.forEach(post => {
                const article = document.createElement('article');
                article.innerHTML = `<h4><a href="${post.link}">${post.title.rendered}</a></h4>
              <img src="${post.featured_media}" alt="${post.title.rendered}" style="width:100%; height:auto;">
              <div>${post.excerpt.rendered}</div>
            `;
            resultadosDiv.appendChild(article);
          });}else{ //se não for array

            if(posts.meta.wpcom){ //testa se é 
                const article = document.createElement('article'); console.log(posts.URL);
                article.innerHTML = `<h4><a href="${posts.posts[0].URL}">${posts.posts[0].title}</a></h4>
                <img src="${posts.posts.featured_media}" alt="${posts.posts[0].title}" style="width:100%; height:auto;">
                <p>${posts.posts.excerpt}</p>
                <p><a target="noticia-completa" href="${posts.posts[0].URL}">Leia mais no ${posts}</a></h4></p>`;
                resultadosDiv.appendChild(article);
            }else{
            const article = document.createElement('article'); console.log(posts.link);
                article.innerHTML = `<h4><a href="${posts.link}">${posts.title.rendered}</a></h4>
              <img src="${posts.featured_media_src_url}" alt="${posts.title.rendered}" style="width:100%; height:auto;">
              <p>${posts.excerpt.rendered}</p>
              <p><a target="noticia-completa" href="${posts.posts.URL}">Leia mais no ${posts}</a></h4></p>
              `;
            resultadosDiv.appendChild(article);
        } //não é wordpress.com

          }
        
      } catch (error) {
        console.error(`Erro ao buscar posts de ${endpoint.endpoint}:`, error);
      }
    }
  }

// Adicionar evento 'change' ao select para capturar a mudança
assuntoSelect.addEventListener('change', capturarEndpoints);
//assuntoSelect.addEventListener('change', capturarEndpoints);