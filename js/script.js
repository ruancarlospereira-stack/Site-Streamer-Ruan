// Menu mobile toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navList = document.querySelector('.nav-list');
    
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('active');
            navList.classList.toggle('active');
        });
    }
    
    // Fechar menu ao clicar em um link
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            navList.classList.remove('active');
        });
    });
    
    // Filtros de produtos
    const filterButtons = document.querySelectorAll('.filtro-btn');
    const productItems = document.querySelectorAll('.produto-item');
    const galleryItems = document.querySelectorAll('.galeria-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remover classe active de todos os botões
            filterButtons.forEach(btn => btn.classList.remove('active'));
            // Adicionar classe active ao botão clicado
            button.classList.add('active');
            
            const filter = button.getAttribute('data-filter');
            
            // Filtrar produtos
            if (productItems.length > 0) {
                productItems.forEach(item => {
                    if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
            
            // Filtrar galeria
            if (galleryItems.length > 0) {
                galleryItems.forEach(item => {
                    if (filter === 'todos' || item.getAttribute('data-categoria') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            }
        });
    });
    
    // Animação de scroll suave para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Validação do formulário de contato
    const contactForm = document.getElementById('form-contato');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            const inputs = this.querySelectorAll('input, textarea, select');
            
            inputs.forEach(input => {
                if (!input.value.trim()) {
                    isValid = false;
                    input.style.borderColor = 'red';
                } else {
                    input.style.borderColor = '#ddd';
                }
            });
            
            if (!isValid) {
                e.preventDefault();
                alert('Por favor, preencha todos os campos obrigatórios.');
            }
        });
    }
    
    // Contador de seguidores (apenas para demonstração)
    const followerCount = document.querySelector('.perfil-stat .stat-num');
    if (followerCount) {
        let count = 127;
        const target = 200;
        const duration = 3000; // 3 segundos
        const steps = 100;
        const increment = (target - count) / steps;
        const stepTime = duration / steps;
        
        let current = count;
        const timer = setInterval(() => {
            current += increment;
            followerCount.textContent = Math.round(current);
            
            if (current >= target) {
                followerCount.textContent = target;
                clearInterval(timer);
            }
        }, stepTime);
    }
});
