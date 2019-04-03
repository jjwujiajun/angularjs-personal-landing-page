var resumeApp = angular.module('resumeApp', ['ngRoute']);

resumeApp.config(function ($routeProvider){

	$routeProvider

	.when('/', {
		templateUrl: 'pages/main.html',
		controller: 'mainController'
	})

	.when('/cover', {
		templateUrl: 'pages/cover.html',
		controller: 'coverController'
	})
    
    .when('/resume', {
		templateUrl: 'pages/resume.html',
		controller: 'coverController'
	})
    
    .when('/testimonial', {
		templateUrl: 'pages/testimonial.html',
		controller: 'coverController'
	});
});

resumeApp.run(['$rootScope', '$routeParams', '$anchorScroll', '$location',function($rootScope, $routeParams, $anchorScroll, $location){
    $rootScope.$on('$routeChangeSuccess', function(newRoute, oldRoute) {
        $location.hash($routeParams.scrollTo);
        $anchorScroll();
    });
}]);

resumeApp.controller('mainController', ['$scope', function($scope) {
	$scope.name = 'main';
}]);

resumeApp.controller('coverController', ['$scope', function($scope) {
	$scope.name = 'cover'
    $scope.sections = ['Work', 'Activities', 'Personal Projects', 'Education', 'Interest & Personality'];
}]);

resumeApp.controller('structureController', ['$scope', function($scope) {
	$scope.navbarStyle = 'navbar-default';
    $scope.navTabs = { 
        'Home': '', 
        'Cover Letter': 'cover', 
        'Resume': 'resume'
    };
    $scope.contacts = {
        'contactFacebook.png': {
            'url': 'http://facebook.com/jjwuz',
            'name': 'jjwuz'
        },
        'contactEmail.png': {
            'url': 'mailto:jjwu.jiajun@gmail.com',
            'name': 'jjwu.jiajun@gmail.com'
        },
        'contactCellphone.png': {
            'url': 'tel:+6591506620',
            'name': '+65 9150 6620'
        },
        'contactAddress.jpg': {
            'url': 'https://www.google.com.sg/maps/place/Singapore+330022/',
            'name': '22 Boon Keng Rd #10-29'
        },
        'contactGithub.png': {
            'url': 'https://github.com/jjwujiajun',
            'name': 'jjwujiajun'
        }
    };
}]);

/*
potential problem points

1. src paths are relative. had error of getting paths from user's local path before.
To get a recap, google this issue: "Cross origin requests are only supported for protocol schemes: http, data, chrome, chrome-extension, https, chrome-extension-resource" 

*/