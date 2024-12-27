describe('Teste da API Trello', () => {
  it('Deve identificar e validar o campo "name" dentro da lista "list"', () => {
    const url = 'https://api.trello.com/1/actions/592f11060f95a3d3d46a987a';

    cy.request(url).then((response) => {
      // Validando o status code
      expect(response.status).to.eq(200);

      // Exibindo a resposta completa para diagnóstico
      cy.log(JSON.stringify(response.body));

      // Verificando se a propriedade "data.list" existe
      const list = response.body.data.list;

      if (list) {
        // Acessando e validando o campo "name"
        const listName = list.name;

        // Verificando se "name" existe e validando seu conteúdo
        expect(listName).to.exist.and.to.be.a('string').and.not.to.be.empty;
        expect(listName).to.eq('Professional'); // Valida se o valor é o esperado

        // Exibindo o nome da lista
        cy.log(`Nome da lista: ${listName}`);
      } else {
        cy.log('A propriedade "data.list" não está presente.');
        throw new Error('A propriedade "data.list" não está presente na resposta.');
      }
    });
  });
});