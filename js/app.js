(function() {

	var app = angular.module('art-catalogue', [ ]);

	// controller must be capitalized
	app.controller('ArtController', [ '$http', function( $http ) {
		var project = this;
		project.works = [ ];


		$http.get('data/works.json').success(function(data) {
   			project.works = data;
  		});

	}]);


})();
