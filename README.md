##O bate papo com o *gemini* iniciou com este prompt

Construa um algoritmo em javascript que utilize os endpoints de 5 sites feitos com wordpress, para gerar uma página web com as 3 últimas postagens de cada site da lista, de acordo com o assunto escolhido pelo usuário. 
Descubra 5 sites feitos com wordpress que tenham os 5 assuntos como tema. Serão 20 sites no total. 5 sites para cada assunto.
Os endpoits serão armazenados num objeto 'assuntosEndpoints' com as chaves nome do site, assunto e endpoint.

 O usuário poderá mudar o assundo através de um input select com uma lista de assuntos pré definidos. Uma função do algoritmo precisa fazer esta captura via API  usando os 5 endpoits da lista de 20, que tem o assunto escolhido como tema. 
Lista de assuntos - const listaDeAssuntos
1 cinema
2 música 
3 parolimpiadas
4 desenvolvimento web
 
Nas consultas à API dos sites de notícias, procurar por tags ou categorias contendo o assunto escolhido ou procurar pelo assunto no title do post

O nome do usuário, o assunto escolhido e os endpoits usados para compor a página serão gravados em localstorage, e atualizados a cada nova seleção do assunto. Para que num futuro acesso, a página mostre este conteúdo inicialmente.

A pagina terá um prompt perguntando o nome da pessoa para compor uma frase como nome informado e a diretriz para escolher o assunto inicial na select da lista de assuntos

Prefira armazenar as variáveis num arquivo js diferente do que vai rodar as funções da pagina.  Utilizando import e export entre os arquivos. 
scripts.js  import from dados.js

--
A realidade...

tem só 3 assuntos e ainda não deu pra achar um padrão pros três.
Não deu pra pegar a url da imagem principal do post
Mas foi divertido. 
