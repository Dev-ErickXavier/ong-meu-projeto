// A função de validação é encapsulada em initializeFormValidation para ser re-utilizada pelo SPA
function initializeFormValidation() {
    const form = document.getElementById('contactForm'); 
    
    // Se o formulário existe, anexa o listener
    if (form) {
        // Remove listeners antigos para evitar duplicação no SPA
        form.removeEventListener('submit', handleFormSubmit);
        form.addEventListener('submit', handleFormSubmit);
    }
}

function handleFormSubmit(event) {
    // Previne o envio padrão do formulário
    event.preventDefault(); 
    clearErrors(); 

    // Se a validação falhar, o envio é interrompido
    if (!validateForm()) {
        alert("Por favor, corrija os campos destacados e tente novamente.");
    } else {
        // Se tudo estiver OK, simula o envio e notifica o usuário
        alert("Mensagem enviada com sucesso! A ONG Vivendo com Esperança agradece seu contato.");
        
        // Limpa os campos após o sucesso
        const form = document.getElementById('contactForm');
        if (form) {
            form.reset();
        }
    }
}

function validateForm() {
    let isValid = true;
    // Puxa os IDs definidos no contato.html
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    // Validação do Nome: Não pode ser vazio e deve ter pelo menos 3 caracteres
    if (name && name.value.trim().length < 3) {
        displayError(name, 'O nome deve ter pelo menos 3 caracteres.');
        isValid = false;
    }

    // Validação do Email: Formato básico
    if (email && !validateEmailFormat(email.value)) {
        displayError(email, 'Insira um endereço de e-mail válido.');
        isValid = false;
    }

    // Validação da Mensagem: Mínimo de 10 caracteres
    if (message && message.value.trim().length < 10) {
        displayError(message, 'A mensagem deve ter pelo menos 10 caracteres.');
        isValid = false;
    }

    return isValid;
}

function displayError(inputElement, message) {
    const errorDisplay = document.createElement('p');
    errorDisplay.className = 'error-message';
    errorDisplay.textContent = message;
    
    inputElement.classList.add('input-error'); 
    
    // Insere a mensagem de erro logo após o campo
    inputElement.parentNode.insertBefore(errorDisplay, inputElement.nextSibling);
}

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(e => e.remove());
    document.querySelectorAll('.input-error').forEach(e => e.classList.remove('input-error'));
}

function validateEmailFormat(email) {
    // Regex simples e robusta para formato de email
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Inicializa a validação quando o DOM é carregado pela primeira vez
document.addEventListener('DOMContentLoaded', initializeFormValidation);