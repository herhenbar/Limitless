<script>
document.addEventListener('DOMContentLoaded', function() {
    // Verificar se é dispositivo mobile
    const isMobile = window.innerWidth < 768;
    
    if (isMobile) {
        // Adicionar comportamento de clique para tooltips em mobile
        const tooltipLinks = document.querySelectorAll('.tooltip-link');
        
        tooltipLinks.forEach(function(link) {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
            });
            
            // Adicionar funcionalidade ao X para fechar o tooltip
            const tooltipText = link.querySelector('.tooltip-text');
            tooltipText.addEventListener('click', function(e) {
                if (e.target === this || e.target.tagName === 'SPAN') {
                    link.classList.remove('active');
                    e.stopPropagation();
                }
            });
        });
        
        // Fechar tooltip ao clicar fora dele
        document.addEventListener('click', function(e) {
            if (!e.target.closest('.tooltip-link')) {
                tooltipLinks.forEach(function(link) {
                    link.classList.remove('active');
                });
            }
        });
    }
});
</script>