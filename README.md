# ⚛️ React-Aprendizado — Fundamentos do React com Vite

![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-10.9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

Repositório prático focado nos conceitos fundamentais do **React** e no setup inicial de aplicações modernas utilizando **Vite**. O projeto serve como ambiente de introdução ao ecossistema do React 19, sintaxe JSX e estrutura de componentes funcionais.

---

## 🎯 Objetivos do Projeto

- **Estruturação Inicial:** Entender a arquitetura de arquivos gerada pelo Vite para projetos React.
- **Sintaxe JSX:** Praticar a escrita de marcação dentro de funções JavaScript.
- **Renderização no DOM:** Compreender o papel do `createRoot` e `StrictMode` no ponto de entrada `main.jsx`.
- **Qualidade de Código:** Configuração de regras do ESLint para boas práticas em React Hooks.

---

## 🛠️ Tecnologias Utilizadas

- **React 19** (`react`, `react-dom`)
- **Vite** (Build tool e servidor de desenvolvimento ágil)
- **JavaScript (JSX)**
- **ESLint** (Linter e análise estática de código)

---

## 📁 Estrutura do Projeto

```text
React-Aprendizado/
└── introducao/
    ├── src/
    │   ├── App.jsx        # Componente principal da aplicação
    │   └── main.jsx       # Ponto de entrada e renderização do React no DOM
    ├── eslint.config.js   # Configurações do linter
    ├── index.html         # Documento HTML base com a div #root
    ├── package.json       # Dependências e scripts do projeto
    └── vite.config.js     # Configuração do Vite e plugin React
```

---

## 🔧 Como Executar o Projeto Localmente

### **Pré-requisitos**
- Node.js instalado (v18 ou superior)

### **Passo a Passo**

1. **Acessar a pasta da aplicação:**
   ```bash
   cd introducao
   ```

2. **Instalar as dependências:**
   ```bash
   npm install
   ```

3. **Iniciar o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. **Acessar no navegador:**
   Abra a URL exibida no terminal (geralmente `http://localhost:5173`).

---

## 🧠 Aprendizados

- **Setup com Vite:** Criação rápida de ambiente React com inicialização quase instantânea (*HMR - Hot Module Replacement*).
- **Componentização:** Conceito de dividir a interface em pedaços isolados e reutilizáveis através de funções.
