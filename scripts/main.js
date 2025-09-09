document.addEventListener('DOMContentLoaded', function() {

    const text_digi = document.querySelector('#typing-effect');

    // Animação de digitação na tela inicial
    if (text_digi) {
        new Typed('#typing-effect', {
            strings: ['Meninas que Programam', 'Mulheres que Inovam', 'O Futuro da Tecnologia'],
            typeSpeed: 70,
            backSpeed: 40,
            loop: true,
            smartBackspace: true,
            cursorChar: '_'
        });
    }

    // Animação de partículas no fundo
    if (document.querySelector('#particles-js')) {
        particlesJS('particles-js', {
            "particles": {
                "number": { "value": 80, "density": { "enable": true, "value_area": 800 } },
                "color": { "value": "#ffffff" },
                "shape": { "type": "circle" },
                "opacity": { "value": 0.5, "random": false },
                "size": { "value": 3, "random": true },
                "line_linked": { "enable": true, "distance": 150, "color": "#ffffff", "opacity": 0.4, "width": 1 },
                "move": { "enable": true, "speed": 4, "direction": "none", "random": false, "straight": false, "out_mode": "out", "bounce": false }
            },
            "interactivity": {
                "detect_on": "canvas",
                "events": { "onhover": { "enable": true, "mode": "repulse" }, "onclick": { "enable": true, "mode": "push" }, "resize": true },
                "modes": { "repulse": { "distance": 100, "duration": 0.4 }, "push": { "particles_nb": 4 } }
            },
            "retina_detect": true
        });
    }

    // --- LÓGICA DO ACCORDION PARA A ENTREVISTA ---
    
    // 1. Encontra todos os botões que abrem e fecham as respostas.
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // 2. Para cada botão encontrado, adiciona a funcionalidade de clique.
    accordionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            // 3. Pega o conteúdo da resposta, que é o elemento logo após o botão.
            const content = header.nextElementSibling;
            
            // 4. Verifica se o item clicado já está aberto.
            const isActive = header.classList.contains('active');

            // 5. PRIMEIRO, fecha todos os itens que estiverem abertos.
            // Isso garante que apenas um fique aberto por vez.
            accordionHeaders.forEach(h => {
                h.classList.remove('active');
                h.nextElementSibling.style.maxHeight = null;
            });

            // 6. SE o item clicado não estava aberto, ele será aberto agora.
            if (!isActive) {
                header.classList.add('active');
                // A mágica acontece aqui: a altura do conteúdo é calculada e aplicada.
                content.style.maxHeight = content.scrollHeight + 'px';
            }
            // Se já estava aberto, o passo 5 já cuidou de fechá-lo.
        });
    });

    // Menu hamburguer responsivo
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Fecha o menu ao clicar em um link (opcional)
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                navLinks.classList.remove('active');
            });
        });
    }
});