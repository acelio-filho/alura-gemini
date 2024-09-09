

//sites
//https://sonymusic.com.br/
//https://rifferama.com/
//sites no wordpress.com https://public-api.wordpress.com/rest/v1.1/sites/dominio-do-site/posts/?number=2&pretty=true
//parâmetro preatty=false vem em json e imagens em base64... bem extenso o arquivo.

// Preencher este objeto com os endpoints reais
// export const assuntosEndpoints = {
//   // Exemplo:
//   musica: {
//     site1: 'https://rifferama.com/wp-json/wp/v2/posts/?_embed&per_page=3',
//     site2: 'https://sonymusic.com.br/wp-json/wp/v2/posts/?_embed&per_page=3',
//     // ...
//   },
//   // ...
// };

// export const assuntosEndpoints2 = {
//     cinema: {
//       site1: 'https://public-api.wordpress.com/rest/v1.1/sites/cinemacompoesia.wordpress.com/posts/?number=2&pretty=true',
//       site2: 'https://sonymusic.com/wp-json/wp/v2/posts/?_embed&per_page=3',
//       // ...
//     },
//     // ...
//   };
//   //

export const listaDeAssuntos = ['Cinema', 'Música', 'Cultura'];
// sitesWordPress
  export const assuntosEndpoints = {
    cinema: [
      {
        nome: 'Cinema Com Poesia',
        url: 'https://cinemacompoesia.wordpress.com',
        endpoint: 'https://public-api.wordpress.com/rest/v1.1/sites/cinemacompoesia.wordpress.com/posts/?_embed&&orderby=date&order=desc&per_page=3'
      }
    ],
    música: [ // estou usando com acento gráfico propositalmente
        {
          nome: 'Rifferama',
          url: 'https://rifferama.com',
          endpoint: 'https://rifferama.com/wp-json/wp/v2/posts/?_embed&per_page=3'
        },
        {
            nome: 'Sony Music Brasil',
            url: 'https://www.sonymusic.com.br',
            endpoint: 'https://www.sonymusic.com.br/wp-json/wp/v2/posts/?_embed&_fields=author,id,excerpt,title,link,featured_media_src_url,featured_media&_embeded&per_page=3'
        }
      ],
      cultura:[
        {
        nome: 'Revista Veja',
        url: 'https://veja.abril.com.br/cultura/',
        endpoint: 'https://veja.abril.com.br/wp-json/wp/v2/posts/?_embed&per_page=3'
          
        },{
          nome: 'Catraca Livre',
          url:'https://catracalivre.com.br/',
          endpoint:'https://catracalivre.com.br/wp-json/wp/v2/posts/?per_page=3',
        }
      ]
      //outros temas
  };
