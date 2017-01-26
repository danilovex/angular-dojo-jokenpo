describe('#JokenpoController', function() {

  beforeEach(module('DojoAngular.Jokenpo'));

  var $controller;
  var $JokenpoService;

  beforeEach(inject(function(_$controller_){
    // The injector unwraps the underscores (_) from around the parameter names when matching
    $controller = _$controller_;
  }));

describe('#vm.checkEmpate', function() {
  it('deve retornar "EMPATE" quando os valores informados forem iguais', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.checkEmpate("pedra", "pedra");

    expect(res).toBe('EMPATE');

  });

  it('deve retornar "FALSO" quando os valores informados forem diferentes', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.checkEmpate("pedra", "tesoura");

    expect(res).toBe(false);

  });
});

describe('#vm.vencePedra', function() {
  it('deve retornar true quando os valores informados forem PEDRA e TESOURA', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePedra(ctrl.opcoesJogo.pedra, ctrl.opcoesJogo.tesoura);

    expect(res).toBe(true);

  });

  it('deve retornar true quando os valores informados forem TESOURA e PEDRA', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePedra(ctrl.opcoesJogo.tesoura, ctrl.opcoesJogo.pedra);

    expect(res).toBe(true);

  });

  it('deve retornar false quando os valores informados forem PEDRA e PAPEL', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePedra(ctrl.opcoesJogo.pedra, ctrl.opcoesJogo.papel);

    expect(res).toBe(false);

  });

});

describe('#vm.vencePapel', function() {

  it('deve retornar true quando os valores informados forem PAPEL e PEDRA', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePapel(ctrl.opcoesJogo.papel, ctrl.opcoesJogo.pedra);

    expect(res).toBe(true);

  });

  it('deve retornar true quando os valores informados forem PEDRA e PAPEL', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePapel(ctrl.opcoesJogo.pedra, ctrl.opcoesJogo.papel);

    expect(res).toBe(true);

  });

  it('deve retornar false quando os valores informados forem PAPEL e TESOURA', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.vencePapel(ctrl.opcoesJogo.papel, ctrl.opcoesJogo.tesoura);

    expect(res).toBe(false);

  });

});

describe('#vm.venceTesoura', function() {

  it('deve retornar true quando os valores informados forem TESOURA e PAPEL', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.venceTesoura(ctrl.opcoesJogo.tesoura, ctrl.opcoesJogo.papel);

    expect(res).toBe(true);

  });

  it('deve retornar true quando os valores informados forem PAPEL e TESOURA', function () {
    var ctrl = $controller('JokenpoController');
    var res = ctrl.venceTesoura(ctrl.opcoesJogo.papel, ctrl.opcoesJogo.tesoura);

    expect(res).toBe(true);

  });

    it('deve retornar false quando os valores informados forem PEDRA e TESOURA', function () {
      var ctrl = $controller('JokenpoController');
      var res = ctrl.venceTesoura(ctrl.opcoesJogo.pedra, ctrl.opcoesJogo.tesoura);

      expect(res).toBe(false);

    });
});


/*
  beforeEach(function(){
    angular.mock.inject(function(_$JokenpoService_){
      $JokenpoService = _$JokenpoService_;
      spyOn($JokenpoService, 'somaDoisNumeros').and.returnValue(0);
    });

  });*/

/*
  //example 1
  it('deve definir myName como Paulo Henrique', function () {
    var ctrl = $controller('JokenpoController');
    expect(ctrl.myName).toBe('Paulo Henrique');
  });

  it('deve validar se "vm.resultadoSoma" está setado com valor diferente de 0', function () {

    var ctrl = $controller('JokenpoController');
    var res = ctrl.soma(0, 1);
    expect(res).toEqual(1);
  });*/

  /*
  //example 2
  describe('vm.complexidadeSenha', function() {
    it('deve retornar "forte" se o comprimento da senha for > 8 caracteres', function() {
      //var $scope = {};
      var controller = $controller('JokenpoController');
      controller.password = 'longerthaneightchars';
      controller.complexidadeSenha();
      expect(controller.strength).toEqual('forte');

    });
  });

  //example 3
  describe('vm.somaDoisNumeros', function() {
    it('deve retornar "2" ao informar param(1)=1 e param(2)=1', function() {
      //var $scope = {};
      var controller = $controller('JokenpoController');
      var result = controller.somaDoisNumeros(1, 1);
      expect(result).toEqual(2);


    });
  });

  */


});
