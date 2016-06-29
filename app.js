
angular.module('per', ['ngAnimate', 'ui.router'])


.config(function($stateProvider, $urlRouterProvider) {
    
    $stateProvider
    
        
        .state('form', {
            url: '/form',
            templateUrl: 'form.html',
            controller: 'formController'
        })
        
       
        .state('form.page1', {
            url: '/page1',
            templateUrl: 'page1.html'
        })
        
        
        .state('form.page2', {
            url: '/page2',
            templateUrl: 'page2.html'
        })
        
        
        .state('page3', {
            url: '/page3',
            templateUrl: 'page3.html'
        });
        
    
    $urlRouterProvider.otherwise('/form/page1');
})


.controller('formController', function($scope) {
    
  
    $scope.formData = {};
    
   
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});
