# 🌍 Vivendo com Esperança - ONG de Apoio ao Sertão Nordestino

## Versão: v1.0.0 (Entrega Final)

### 🌟 Visão Geral do Projeto
O site da ONG "Vivendo com Esperança" é uma aplicação web estática, desenvolvida em HTML, CSS e JavaScript puro, focada em apresentar a missão, os valores e os projetos de impacto social da organização no sertão nordestino.

Este projeto foi estruturado seguindo as melhores práticas de desenvolvimento front-end, garantindo organização, navegabilidade (SPA) e validação de dados, conforme requisitos de entrega final.

---

### 💻 Funcionalidades Implementadas

| Categoria | Funcionalidade | Descrição |
| :--- | :--- | :--- |
| **Navegação (SPA)** | **Single Page Application (SPA) Básico** | A navegação entre as páginas (`Início`, `Projetos`, `Sobre`, `Contato`) é feita de forma dinâmica via JavaScript (`js/main.js`), sem recarregar o navegador. |
| **Formulários** | **Validação de Consistência de Dados** | Implementação de JavaScript (`js/formValidation.js`) para verificar a consistência dos dados do formulário de contato (campos obrigatórios e formato de email). |
| **Organização** | **Estrutura de Pastas Profissional** | O código foi reorganizado em pastas dedicadas (`css/`, `images/`, `js/`) para modularidade. |
| **Acessibilidade** | **Aprimoramento WCAG** | Estrutura semântica e suporte para navegação por teclado (estilos `:focus`). |

---

### 📁 Estrutura de Pastas Final
ong-meu-projeto/ 
├── index.html # Ponto de entrada e principal do SPA 
├── projetos.html
├── contato.html # Contém o formulário (com validação JS) 
├── sobre.html
├── README.md # Este arquivo 
├── css/ 
│ └── style.css # Estilos globais 
├── images/ 
│└── (Imagens do projeto) 
└── js/ 
├── main.js # Lógica SPA 
└── formValidation.js # Lógica de validação do formulário

---

### ⚙️ Práticas de Versionamento (GitFlow e Commits Semânticos)

O projeto seguiu um fluxo de trabalho básico de versionamento:

* **GitFlow:** Utilização da branch `main` para código estável de produção.
* **Commits Semânticos:** Todos os commits seguem a convenção `tipo(escopo): mensagem` (ex: `feat: Implementa validacao de formulario com JS`).

---

### 🛠️ Tecnologias Utilizadas

* **HTML5**
* **CSS3**
* **JavaScript (Puro/ES6)**

---

### 🚀 Acesso e Deploy

| Tipo | Link |
| :--- | :--- |
| **Repositório GitHub** | [https://github.com/Dev-ErickXavier/ong-meu-projeto](https://github.com/Dev-ErickXavier/ong-meu-projeto) |
| **Projeto Online (GitHub Pages)** | [https://dev-erickxavier.github.io/ong-meu-projeto/index.html](https://dev-erickxavier.github.io/ong-meu-projeto/index.html) |

### 🤝 Contribuição e Licença

* **Desenvolvedor Principal:** **Erick Xavier**
