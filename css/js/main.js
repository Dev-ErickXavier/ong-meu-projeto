document.addEventListener('DOMContentLoaded', () => {
    // 1. Definição da área onde o conteúdo será carregado
    const contentArea = document.getElementById('app-content');
    
    // 2. Função para carregar o conteúdo da URL
    function loadContent(url) {
        if (!contentArea) {
            console.error('Área de conteúdo (#app-content) não encontrada.');
            return;
        }

        // Usa a Fetch API para carregar o HTML da outra página
        fetch(url)
            .then(response => response.text())
            .then(html => {
                const tempDiv = document.createElement('div');
                tempDiv.innerHTML = html;
                
                // Busca o conteúdo dentro da tag <main id="app-content"> da página carregada
                const newContent = tempDiv.querySelector('#app-content');
                
                if (newContent) {
                    // Substitui o conteúdo da página principal pelo conteúdo da nova página
                    contentArea.innerHTML = newContent.innerHTML;
                    
                    // Opcional: Re-inicializa a validação do formulário após carregar novo conteúdo (se for o contato.html)
                    initializeFormValidation();
                } else {
                    contentArea.innerHTML = `<h2>Erro: Conteúdo principal não encontrado em ${url}</h2>`;
                }
            })
            .catch(error => {
                contentArea.innerHTML = `<h2>Erro ao carregar página: ${url}</h2>`;
                console.error('Erro ao carregar conteúdo:', error);
            });
    }

    // 3. Manipulação de Eventos (Interceptar cliques nos links de navegação)
    document.querySelectorAll('nav a').forEach(link => {
        link.addEventListener('click', (event) => {
            const targetUrl = event.target.getAttribute('href');
            
            // Verifica se o link é interno e carrega o conteúdo via SPA
            if (targetUrl && !targetUrl.startsWith('http')) {
                event.preventDefault(); // Previne o carregamento padrão
                loadContent(targetUrl);
                // Atualiza a URL no navegador sem recarregar (History API)
                history.pushState(null, '', targetUrl);
            }
        });
    });

    // Função de inicialização de validação (para ser chamada após o SPA carregar conteúdo)
    // NOTE: A função `initializeFormValidation` está definida em `formValidation.js`
    window.initializeFormValidation = () => {
        // Dispara o evento DOMContentLoaded novamente no conteúdo carregado
        // Para que o formValidation.js possa anexar o listener ao novo formulário
        document.dispatchEvent(new Event('DOMContentLoaded'));
    };
});