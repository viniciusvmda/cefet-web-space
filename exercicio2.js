const servidorDasImagens = {
	url: 'https://fegemo.github.io/cefet-web/images/',
  	todasAsImagens: [
	    'philae-parts.jpg',
	    'philae-rosetta.jpg',
	    'philae-separation.jpg',
	    'philae-67-picture.jpg',
	    'philae-collecting.jpg'
  	]
};

// adiciona imagens ao html
let galeria = document.querySelector('#galeria');
for (imagem of servidorDasImagens.todasAsImagens) {
	let imagemEl = document.createElement('img');
	imagemEl.src = servidorDasImagens.url + imagem
}