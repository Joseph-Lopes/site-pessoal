// js/components.js

// Função para carregar componentes HTML
async function loadComponent(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(elementId).innerHTML = html;
    } catch (error) {
        console.error(`Erro ao carregar ${filePath}:`, error);
        document.getElementById(elementId).innerHTML = `<p>Erro ao carregar componente</p>`;
    }
}

// Função para carregar header e footer em todas as páginas
async function loadHeaderAndFooter() {
    // Carregar header
    await loadComponent('header', '../components/header.html');
    
    // Carregar footer
    await loadComponent('footer', '../components/footer.html');
}

// Função para carregar componentes específicos (para páginas em diferentes níveis)
async function loadComponents(headerPath = '../components/header.html', footerPath = '../components/footer.html') {
    await loadComponent('header', headerPath);
    await loadComponent('footer', footerPath);
}

// Exportar funções para uso global
window.loadHeaderAndFooter = loadHeaderAndFooter;
window.loadComponents = loadComponents;
window.loadComponent = loadComponent;

// Inicialização automática quando o DOM estiver pronto
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se os elementos header e footer existem na página
    if (document.getElementById('header') && document.getElementById('footer')) {
        // Detecta o caminho base baseado na localização atual
        const path = window.location.pathname;
        const isRoot = path === '/' || path === '/index.html' || path.endsWith('/index.html');
        const isInPaginas = path.includes('/paginas/');
        
        let headerPath, footerPath;
        
        if (isRoot) {
            // Página principal (index.html)
            headerPath = 'components/header.html';
            footerPath = 'components/footer.html';
        } else if (isInPaginas) {
            // Páginas dentro da pasta paginas
            const isInSubfolder = path.includes('/paginas/posts/') || 
                                 path.includes('/paginas/atividade12/') || 
                                 path.includes('/paginas/formaArte/') || 
                                 path.includes('/paginas/requisitos/');
            
            if (isInSubfolder) {
                // Subpastas dentro de paginas (posts, atividade12, etc)
                headerPath = '../../components/header.html';
                footerPath = '../../components/footer.html';
            } else {
                // Páginas diretamente na pasta paginas (blog.html, contato.html, currículo.html)
                headerPath = '../components/header.html';
                footerPath = '../components/footer.html';
            }
        } else {
            // Outros casos (default)
            headerPath = 'components/header.html';
            footerPath = 'components/footer.html';
        }
        
        loadComponents(headerPath, footerPath);
    }
});