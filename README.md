# 🧪 Primeiros Passos com Cypress
Este projeto foi desenvolvido para explorar e praticar testes automatizados utilizando Cypress. Ele simula testes de login e atualização de informações de usuário na plataforma OrangeHRM, aplicando boas práticas como o Page Object Model (POM) e o uso de fixtures para gerenciamento de dados.

## 🚀 Tecnologias Utilizadas
Cypress – Framework de testes end-to-end
Chance.js – Biblioteca para geração de dados aleatórios
JavaScript – Linguagem utilizada nos testes
## 📂 Estrutura do Projeto
```bash
Copiar
Editar
PrimeirosPassosCy
│-- cypress
│   ├── e2e
│   │   ├── login.spec.js        # Testes de login
│   │   ├── user.spec.js         # Testes de atualização de informações do usuário
│   ├── fixtures
│   │   ├── user-data.json       # Dados de usuário para login
│   ├── pages
│   │   ├── loginPage.js         # Página de login
│   │   ├── dashboardPage.js     # Página do dashboard
│   │   ├── menuPage.js          # Menu de navegação
│   │   ├── myInfoPage.js        # Página de informações do usuário
│-- cypress.config.js            # Configuração do Cypress
│-- package.json                 # Dependências do projeto
│-- README.md                    # Documentação do projeto
```
## 🛠️ Como Instalar e Rodar o Projeto
Clone o repositório

````bash
git clone https://github.com/ggvinos/PrimeirosPassosCy.git
cd PrimeirosPassosCy
````
Instale as dependências

````bash
npm install
````
Abra o Cypress

````bash
npx cypress open
````
Execute os testes

Para rodar os testes no modo interativo, escolha o navegador desejado na interface do Cypress e clique no teste.
Para rodar no modo headless (sem interface), execute:
````bash
npx cypress run
````
## 📝 Testes Implementados
🔑 Login
login.spec.js
✅ Teste de login bem-sucedido
❌ Teste de login com credenciais inválidas
👤 Atualização de Informações do Usuário
user.spec.js
Atualização de detalhes pessoais e do funcionário, com dados dinâmicos gerados pelo Chance.js
Validação de atualização bem-sucedida
