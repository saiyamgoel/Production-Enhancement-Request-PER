
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
        
        
        .state('form.page3', {
            url: '/page3',
            templateUrl: 'page3.html'
        })
        
       
        .state('form.page4', {
            url: '/page4',
            templateUrl: 'page4.html'
        })
        
        
        .state('form.page5', {
            url: '/page5',
            templateUrl: 'page5.html'
        })
        
        
        .state('form.page6', {
            url: '/page6',
            templateUrl: 'page6.html'
        })
        
        .state('form.page7', {
            url: '/page7',
            templateUrl: 'page7.html'
        })
        
        .state('form.page8', {
            url: '/page8',
            templateUrl: 'page8.html'
        })
        
        
    
    $urlRouterProvider.otherwise('/form/page1');
})


.controller('formController', function($scope) {
    
  
    $scope.formData = {};
   
    $scope.processForm = function() {
        alert('awesome!');
    };
    
});
