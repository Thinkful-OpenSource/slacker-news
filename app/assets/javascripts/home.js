// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/
/*global angular:false */
angular.module('slacker', ['ngMaterial'])
.controller('HomeController', ['$scope', '$http', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdDialog, $mdBottomSheet){
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
  
  $scope.openBottomSheet = function($event) {
    $mdBottomSheet.show({
      targetEvent:$event,
      templateUrl: 'bottomSheet.html'
    });
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
  };
 $scope.bugReport = function ($event) {
   $mdDialog.show({
     targetEvent: $event,
     templateUrl: 'add-bug.html',
     controller: 'AddBugController'
   });
 };
}])
.controller('AddLinkController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){
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
      method: 'PUT',
      url: '/link',
      data: {link: {title: title, keyword:keyword}},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
    }).success(success).error(error);
  };
}])
.controller('AddBugController', ['$scope', '$http', function($scope, $http) {
  $scope.types = [{name:'Bug',value:'bug'},{name:'Feature',value:'feature'}];
  $scope.report = function(type, message, user){
    function success(data){}
    function error(){}
    $http({
      method: 'POST',
      url: '/bug',
      data: {bug: {type: type, message:message, user:user}},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
    }).success(success).error(error);
  };
}]);
 
