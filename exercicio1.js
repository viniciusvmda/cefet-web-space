// Pega os botoes de expandir/retrair
const botoesExpandir = document.querySelectorAll('.botao-expandir-retrair');

const MENOS = '-';
const MAIS = '+';

// Adiciona listener a todos os botoes
for (botao of botoesExpandir) {
	botao.addEventListener('click', function(e) {
		let bt = e.target;
		let paragrafo = bt.parentNode;
		// Verifica se botão está expandido
		if (paragrafo.classList.contains('expandido')) {
			// Elimina a classe
			paragrafo.classList.remove('expandido');
			bt.innerHTML = MAIS;
		} else {
			// Adiciona a classe
			paragrafo.classList.add('expandido');
			bt.innerHTML = MENOS;
		}
	});
}