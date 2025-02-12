# 🧪 My First Cypress Project
This is my first project using Cypress, where I am learning how to automate web tests. I am exploring the basics, writing my first tests, and understanding best practices.

🚀 What I'm Learning
✅ Cypress setup and structure
✅ Writing and running automated tests
✅ Best practices for E2E testing
✅ API testing with Cypress
✅ Debugging and test reports

📌 Next Steps
I want to improve my skills and apply more advanced concepts in test automation.

💡 Suggestions and feedback are always welcome!

1. describe('template spec', () => { ... }):

Bloco principal que agrupa os testes relacionados ao login.

2. const selectorList = { ... }:

Objeto que armazena os seletores dos elementos da página (campos de usuário, senha, botão de login, etc.) para reutilização.

3. it('login - Success', () => { ... }):

Teste para verificar o login bem-sucedido.

4. cy.visit('URL'):

Acessa a página de login.

5. cy.get(selectorList.usernameField).type("Admin"):

Preenche o campo de usuário com "Admin".

6. cy.get(selectorList.passwordField).type("admin123"):

Preenche o campo de senha com "admin123".

7. cy.get(selectorList.loginButton).click():

Clica no botão de login.

8. cy.location('pathname').should('equal', '/web/index.php/dashboard/index'):

Verifica se a URL redireciona para a página do dashboard após o login.

9. cy.get(selectorList.sectionTitleTopBar).contains('Dashboard'):

Verifica se o título da página contém "Dashboard".

10. it('login - fail', () => { ... }):

Teste para verificar o login com credenciais incorretas.

11. cy.get(selectorList.usernameField).type("Admim"):

Preenche o campo de usuário com um nome incorreto ("Admim").

12. cy.get(selectorList.passwordField).type("admin123"):

Preenche o campo de senha com a senha correta.

13. cy.get(selectorList.loginButton).click():

Clica no botão de login.

14. cy.get('.oxd-alert'):

Verifica se a mensagem de alerta de credenciais incorretas é exibida.

15. cy.get(selectorList.usernameField).type("Admin"):

Corrige o nome de usuário para "Admin".

16. cy.get(selectorList.passwordField).type("admin123"):

Mantém a senha correta.

17. cy.get(selectorList.loginButton).click():

Clica no botão de login novamente.

18. cy.location('pathname').should('equal', '/web/index.php/dashboard/index'):

Verifica se a URL redireciona para o dashboard após o login correto.

19. cy.get(selectorList.sectionTitleTopBar).contains('Dashboard'):

Verifica se o título da página contém "Dashboard".