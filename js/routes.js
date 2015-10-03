angular.module('art-catalogue')
.config(function($routeProvider) {
  $routeProvider.when('/projects', {
    templateUrl: 'templates/pages/project/index.html'
  })

  .when('/', {
    templateUrl: 'index.html'

  })

  .when('/menu', {
    templateUrl: 'templates/pages/menu/index.html'

  })

  .otherwise( { redirectTo: '/'} );


});
