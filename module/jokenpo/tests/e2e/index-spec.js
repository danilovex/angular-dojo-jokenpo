describe('Modulo index.html', function(){
  var myName = element(by.model('vm.myName'));

  var nameSelected = element(by.id('nameSelected'));
   var selectButton = element(by.css('.btn-default'));

  beforeEach(function(){
    browser.get('http://localhost:8888/#/index');
  });

  it('vm.myName deve ser inicializado com o valor de: "Paulo Henrique"', function(){
    expect(myName.getAttribute('value')).toBe('Paulo Henrique');
  });

  it('clicando sobre o botão "Selecionar" o valor de (vm.myNameSelected == vm.myName)', function(){
    myName.sendKeys('Teste com Protractor!');
    selectButton.click();
    //expect(nameSelected.getText()).toEqual(myName.getAttribute('value'));
    expect(nameSelected.getText()).toEqual('FAIL');
  });

});
