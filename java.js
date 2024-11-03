// Seleciona o botão de alternância de tema
const toggleButton = document.getElementById('toggle-theme');

// Seleciona o corpo do documento
const body = document.body;

// Adiciona um evento de clique ao botão
toggleButton.addEventListener('click', () => {
    // Alterna a classe 'dark-mode' no body
    body.classList.toggle('dark-mode');
});