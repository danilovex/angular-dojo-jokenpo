(function () {
    'use strict';

    angular.module('DojoAngular', [
      'ui.router',
      'oc.lazyLoad'
    ]).config(lazyLoad).config(stateProvider).config(controllerProvider);

    lazyLoad.$inject = ['$ocLazyLoadProvider'];

    function lazyLoad($ocLazyLoadProvider) {
        $ocLazyLoadProvider.config({
            // global configs go here
        });
    }
    stateProvider.$inject = ['$stateProvider', '$urlRouterProvider'];

    function stateProvider($stateProvider, $urlRouterProvider) {

        $stateProvider
            .state('/index', {
                url: '/index',
                templateUrl: 'module/jokenpo/index.html',
                controller: 'JokenpoController',
                controllerAs: 'vm',
                resolve: {
                    deps: [
                        '$ocLazyLoad', function ($ocLazyLoad) {
                            return $ocLazyLoad.load([
                                {
                                    name: 'DojoAngular.FizzBuzz',
                                    insertBefore: '#ng_load_plugins_before',
                                    files: [
                                        'module/jokenpo/module.js',
                                        'module/jokenpo/service.js',
                                        'module/jokenpo/controller.js'
                                    ],
                                    cache: true,
                                    serie: true
                                }
                            ]);
                        }
                    ]
                }
            });
            $urlRouterProvider.otherwise('/');
    }

    controllerProvider.$inject = ['$controllerProvider'];

    function controllerProvider($controllerProvider) {
        $controllerProvider.allowGlobals();
    }

})();
