// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
angular.module('slacker', ['ngMaterial'])
.controller('HomeController', ['$scope', '$http', '$mdDialog', function($scope, $http, $mdDialog){
  $scope.links = [];
  $scope.searchTerm = '';

  $scope.search = function (term) {
    console.log(term);
    if(term.length < 3) {return;}
    function success(data, status, headers, config){
      console.log('success');
      $scope.links = data.links;
    }
    function error(data, status, headers, config){
      console.log('error');
      $scope.error = "Unable to search at this time";
    }
    $http.get('/search.json', {term: term}).success(success).error(error);
  };
  
  
}])
.controller('footerController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){
  $scope.addLink = function ($event) {
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'add-link.html',
      controller: 'AddLinkController'
    });
  }
  $scope.changeLink = function ($event) {
    $mdDialog.show({
      targetEvent: $event,
      templateUrl: 'change-link.html',
      controller: 'ChangeLinkController'
    });
  }
 $scope.reportBug = function ($event) {
   $mdDialog.show({
     targetEvent: $event,
     templateUrl: 'add-bug.html',
     controller: 'AddBugController'
   })
 }
}])
.controller('AddLinkController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){
  $scope.save = function(url){
    function success(data){
      $mdToast.show($mdToast.simple().content('Link Added').capsule(true));
      $mdDialog.hide();
    }
    function error(){
      
    }
    $http({
      method: 'POST',
      url: '/link',
      data: {link: {url: url}},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
    }).success(success).error(error);
  }
}])
.controller('ChangeLinkController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog){
  $scope.save = function(title, keyword){
    function success(data){
      $mdToast.show($mdToast.simple().content('Changes Added').capsule(true));
      $mdDialog.hide();
    }
    function error(){
      
    }
    $http({
      method: 'POST',
      url: '/link',
      data: {link: {title: title, keyword:keyword}},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
    }).success(success).error(error);
  }
}])
.controller('AddBugController', function($scope, $mdBottomSheet) {
  $scope.openBottomSheet = function() {
    $mdBottomSheet.show({
      template: '<md-bottom-sheet>Hello!</md-bottom-sheet>'
    });
  };
});
