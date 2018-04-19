const servidorDasImagens = {
	url: 'https://fegemo.github.io/cefet-web/images/',
  	todasAsImagens: [
	    //'philae-parts.jpg',
	    'philae-rosetta.jpg',
	    'philae-separation.jpg',
	    'philae-67-picture.jpg',
	    'philae-collecting.jpg'
  	]
};


// adiciona imagens ao html
let galeria = document.querySelector('#galeria');
let proximoEl = document.querySelector('#proximo');
let anteriorEl = document.querySelector('#anterior');


for (imagem of servidorDasImagens.todasAsImagens) {
	let imagemEl = document.createElement('img');
	imagemEl.src = servidorDasImagens.url + imagem;
	imagemEl.classList.add('slide');
	imagemEl.classList.add('invisivel');
	galeria.insertBefore(imagemEl, anteriorEl);
}

let imagens = document.querySelectorAll('.slide');
let atual = 0;

proximoEl.addEventListener('click', function(e) {
	// Define quem será o próximo slide
	let proximo = (atual + 1) % imagens.length;
	// Torna o atual invisivel e próximo visível
	imagens[atual].classList.add('invisivel');
	imagens[proximo].classList.remove('invisivel');
	atual = proximo;
});

anteriorEl.addEventListener('click', function(e) {
	// Define quem será o slide anterior
	let anterior = (atual + imagens.length - 1) % imagens.length;
	// Torna o atual invisivel e anterior visível
	imagens[atual].classList.add('invisivel');
	imagens[anterior].classList.remove('invisivel');
	atual = anterior;
});