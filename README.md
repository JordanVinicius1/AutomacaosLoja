# Automação de Loja - Cypress

Este repositório contém a automação de testes para um site de compras online, desenvolvido utilizando o framework **Cypress**. A automação cobre cenários como busca de produtos, adição ao carrinho e validação de itens na tela de pagamento.

## Pré-requisitos

Antes de começar, certifique-se de que os seguintes requisitos estejam instalados em sua máquina:

1. **Node.js** (versão 14 ou superior) - [Baixar Node.js](https://nodejs.org/)
2. **NPM** (geralmente instalado junto com o Node.js)
3. **Git** - [Baixar Git](https://git-scm.com/)
4. **Visual Studio Code** (opcional, mas recomendado para editar e executar o código) - [Baixar VS Code](https://code.visualstudio.com/)

## Configuração do Projeto

### 1. Clonar o Repositório

Abra o terminal ou prompt de comando e execute:

```bash
git clone https://github.com/JordanVinicius1/AutomacaosLoja.git
```

Entre na pasta do projeto:

```bash
cd AutomacaosLoja
```

### 2. Instalar Dependências

Instale as dependências do projeto utilizando o **npm** 

#### Usando npm:
```bash
npm install
```

### 3. Executar os Testes

#### Executar no Modo Interativo:
Abra o Cypress no modo interativo para selecionar e executar os testes:

```bash
npx cypress open
```

No painel que abrir, clique no botão **E2E **, escolha seu navegador preferido e selecione o teste que deseja executar.

#### Executar no Modo Headless:
Execute todos os testes diretamente no terminal, sem abrir a interface gráfica:

```bash
npx cypress run
```

### 4. Relatórios de Teste (opcional)
O projeto esta configurado para gerar videos ao executar randomicamente, que serão salvos na pasta cypress/videos

## Estrutura do Projeto

- **cypress/e2e**: Contém os arquivos de teste organizados por funcionalidade.
- **cypress.config.js**: Arquivo principal de configuração do Cypress.

**Jordan Vinicius dos Santos Miranda**
