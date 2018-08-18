var chatApp = angular.module('chatApp', ['ngRoute']);
chatApp.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'login.html'
        })
        .when('/register', {
            templateUrl: 'register.html'
        })
        .when('/login', {
            templateUrl: 'login.html'
        })
        .otherwise({
            redirectTo: 'login.html'
        });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
