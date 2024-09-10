
// lista de sites wordpress a acessar via api rest, separados por assunto

/* temos dois tipos de sites wordpress:
 1 sites hospedados no wordpress.com 
 2- sites que utilizam o CMS wordpress em seus servidores próprios
 
 cada um tem uma chamada endpoint diferente:

 1- endpoint [wordpress.com]: https://public-api.wordpress.com/rest/v1.1/sites/NOME-DO-SITE.wordpress.com/posts/?_embed&&orderby=date&order=desc&per_page=3&limit=3
 para reconhecer se o site está sob o domínio wordpress.com, existe uma chave no objeto wpcom:true. ou apenas verificar se a chave existe, dentro de [meta] -> (posts.meta.wpcom)
 
 2- endpoint wordpress: https://DOMÍNIO-DO-SITE/wp-json/wp/v2/posts/?_embed&per_page=3
 os endpoints têm diferenças no recurso per_page e _embed
 não consigo acessar featured_media_src_url em nenhum dos dois tipos de endpoints.
 featured_media retorna a ID da mídia
 Acredito ser outra chamada para obter a featured_media_src_url do post usando endpoint /midia/?featured_media no lugar de /posts/?

 as chaves e valores desejados são:  content | exerpt | per_page=3 | featured_media(featured_media_src_url) |  link(link para o site), URL(link para o post)

- preciso encontrar também o "nome do site e a url da home dele(link)", para ter um h1 dentro da section, antes de mostrar os posts daquele site, informando a fonte, colocando dentro de uma div

Important: o parâmetro _fields permite chamar somente o que se quer, evitando dados desnecessários.
Retorna um objeto com outra estrutura. bem menor e mais rápido. 
ex: ?_fields=author,id,content,excerpt,title,link,featured_media, guid
pega a featured_media(id da mídia) e faz outra requisição pra chamar a imagem

/wp-json/wp/v2/media/?_fields=guid&id=featured_media. //gui retorna a url da imagem de acordo com a id, que vem de featured_media na requisição anterior

*/

//lista de assuntos
export const listaDeAssuntos = ['Cinema', 'Música', 'Notícias'];
// sitesWordPress
  export const assuntosEndpoints = {
    cinema: [
      {
        nome: 'Cinema Com Poesia',
        url: 'https://cinemacompoesia.wordpress.com',
        endpoint: 'https://public-api.wordpress.com/rest/v1.1/sites/cinemacompoesia.wordpress.com/posts/?_embed&_embedded&orderby=date&order=desc&per_page=3&limit=3',
        endpointImg: 'https://public-api.wordpress.com/rest/v1.1/sites/cinemacompoesia.wordpress.com/media/?_fields=guid&id='
      }
    ],
    música: [ // estou usando com acento gráfico propositalmente
        {
          nome: 'Rifferama',
          url: 'https://rifferama.com',
          endpoint: 'https://rifferama.com/wp-json/wp/v2/posts/?_embed&_fields=author,id,excerpt,title,link,featured_media&_embeded&per_page=3',
          endpointImg:'https://rifferama.com/wp-json/wp/v2/media/?_fields=guid&id='
        },
        {
            nome: 'Sony Music Brasil', /* este site não usa posts - está aqui somente para exemplo e teste do laço forEach */
            url: 'https://www.sonymusic.com.br',
            endpoint: 'https://www.sonymusic.com.br/wp-json/wp/v2/posts/?_embed&_fields=author,id,excerpt,title,link,featured_media&_embeded&per_page=3'
        }
      ],
      notícias:[ // estou usando com acento gráfico propositalmente
        {
        nome: 'Revista Veja',
        url: 'https://veja.abril.com.br/cultura/',
        endpoint: 'https://veja.abril.com.br/wp-json/wp/v2/posts/?_embed&per_page=3'
          
        },{
          nome: 'Catraca Livre',
          url:'https://catracalivre.com.br/',
          endpoint:'https://catracalivre.com.br/wp-json/wp/v2/posts/?_embeded&per_page=3',
        }
      ]
      //outros temas
  };
