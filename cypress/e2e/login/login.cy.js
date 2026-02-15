describe('OrangeHRM - Login Feature Automation Test', () => {

    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/');
    });

    it('TC_01 - Login Berhasil dengan username dan password valid', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('TC_02 - Login gagal dengan password salah', () => {
        cy.get('input[name="username"]').type('Admin');
        cy.get('input[name="password"]').type('admin12');
        cy.get('button[type="submit"]').click();

        cy.contains('Invalid credentials').should('be.visible');
    });

    it('TC_03 - Login gagal dengan username tidak terdaftar', () => {
        cy.get('input[name="username"]').type('silvy');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.contains('Invalid credentials').should('be.visible');
    });

    it('TC_04 - Login gagal ketika field username dan password kosong', () => {
        cy.get('button[type="submit"]').click();

        cy.contains('Required').should('be.visible');
    });

    it('TC_05 - Login berhasil dengan username case sensitive', () => {
        cy.get('input[name="username"]').type('ADMIN');
        cy.get('input[name="password"]').type('admin123');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/dashboard');
        cy.contains('Dashboard').should('be.visible');
    });

    it('TC_06 - Verifikasi tipe input password', () => {
        cy.get('input[name="password"]')
        .should('have.attr', 'type', 'password');
    });

    it('TC_07 - Akses halaman Forgot Password', () => {
        cy.contains('Forgot your password?').click();

        cy.url().should('include', '/requestPasswordResetCode');
        cy.contains('Reset Password').should('be.visible');
    });

});
