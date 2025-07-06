const botao = document.getElementById('mensagemBtn');
const mensagemTexto = document.getElementById('mensagemTexto');

botao.addEventListener('click', () => {
    mensagemTexto.style.display = 'block';
    mensagemTexto.textContent = 'Por mais difíceis que pareçam os caminhos, nunca desista dos seus sonhos eles são a bússola que guia seu coração para o que realmente importa. 😉';
});