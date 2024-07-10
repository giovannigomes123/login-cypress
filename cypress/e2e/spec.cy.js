describe('Tela de Login', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Login com credenciais válidas', () => {
    cy.get('input[name="email"]').type('usuario@exemplo.com');
    cy.get('input[name="password"]').type('senha_valida');
    cy.get('button[type="submit"]').click();
    cy.url().should('include', '/dashboard');
  });

  it('Login com e-mail inválido', () => {
    cy.get('input[name="email"]').type('email_invalido');
    cy.get('input[name="password"]').type('senha_valida');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'E-mail inválido');
  });

  it('Login com senha inválida', () => {
    cy.get('input[name="email"]').type('usuario@exemplo.com');
    cy.get('input[name="password"]').type('senha_invalida');
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Senha inválida');
  });

  it('Login com campos vazios', () => {
    cy.get('button[type="submit"]').click();
    cy.get('.error-message').should('contain', 'Preencha todos os campos');
  });
});
