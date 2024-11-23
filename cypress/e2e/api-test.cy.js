describe('petstore API', () => {
    it('inventories', () => {
      cy.request({
        method: 'GET',
        url: 'https://petstore.swagger.io/v2/store/inventory'
      }).then((response) => {
        expect(response.status).to.eq(200)
      })
    })
  })