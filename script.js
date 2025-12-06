

// Aguarda o DOM carregar completamente antes de executar
document.addEventListener('DOMContentLoaded', function () {

    // ========================================
    // MENU MOBILE (HAMBÚRGUER)
    // Controla a abertura/fechamento do menu
    // ========================================

    // Seleciona os elementos do menu
    const menuToggle = document.getElementById('menu-toggle');
    const navMobile = document.getElementById('nav-mobile');

    // Adiciona evento de clique no botão hambúrguer
    menuToggle.addEventListener('click', function () {
        // Alterna a classe 'active' no botão (muda para X)
        this.classList.toggle('active');

        // Alterna a classe 'active' no menu (mostra/esconde)
        navMobile.classList.toggle('active');
    });

    // Fecha o menu ao clicar em um link
    const mobileLinks = navMobile.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            menuToggle.classList.remove('active');
            navMobile.classList.remove('active');
        });
    });


    // ========================================
    // ACORDEÕES (MVV, ESG, SWOT)
    // Expande/colapsa conteúdo ao clicar
    // ========================================

    // Seleciona todos os headers de acordeão
    const accordionHeaders = document.querySelectorAll('.accordion-header');

    // Adiciona evento de clique em cada header
    accordionHeaders.forEach(function (header) {
        header.addEventListener('click', function () {
            // Encontra o item pai do acordeão
            const accordionItem = this.parentElement;

            // Verifica se já está ativo
            const isActive = accordionItem.classList.contains('active');

            // Fecha todos os acordeões do mesmo card
            const parentCard = accordionItem.closest('.accordion-card');
            const allItems = parentCard.querySelectorAll('.accordion-item');

            allItems.forEach(function (item) {
                item.classList.remove('active');
            });

            // Se não estava ativo, abre este acordeão
            if (!isActive) {
                accordionItem.classList.add('active');
            }
        });
    });






    // ========================================
    // HEADER STICKY COM SOMBRA
    // Adiciona sombra ao header quando rola a página
    // ========================================

    const header = document.getElementById('header');

    window.addEventListener('scroll', function () {
        // Se rolou mais de 50px, adiciona sombra
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 4px 20px -4px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.boxShadow = 'none';
        }
    });



    // Executa ao carregar e ao rolar
    animateOnScroll();
    window.addEventListener('scroll', animateOnScroll);


    // ========================================
    // LOG DE INICIALIZAÇÃO
    // Confirma que o script foi carregado
    // ========================================

    console.log('🚀 OAD Landing Page carregada com sucesso!');
    console.log('📧 Contato: contato@oad.org.br');
});



/**
 * Função para validar e-mail
 * @param {string} email - O e-mail a ser validado
 * @returns {boolean} - True se o e-mail é válido
 */
function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

/**
 * Função para validar telefone brasileiro
 * @param {string} telefone - O telefone a ser validado
 * @returns {boolean} - True se o telefone é válido
 */
function validarTelefone(telefone) {
    // Remove caracteres não numéricos
    const numeros = telefone.replace(/\D/g, '');
    // Verifica se tem 10 ou 11 dígitos
    return numeros.length === 10 || numeros.length === 11;
}

