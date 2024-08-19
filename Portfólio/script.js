document.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('contato-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.getElementById('mensagem-status').textContent = 'Obrigado por entrar em contato! Sua mensagem foi enviada.';
});
