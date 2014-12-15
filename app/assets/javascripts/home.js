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
    if(term.length > 2) {
      $http.get('/search.json', {params:{term: term}}).success(success).error(error);
      $('.loading-button').show();
    return;}
    function success(data, status, headers, config){
      console.log('success');
      $('.loading-button').hide();
      $scope.links = data.links;
    }
    function error(data, status, headers, config){
      console.log('error');
      $('.loading-button').hide();
      $scope.error = "Unable to search at this time";
    }
  };  
  $scope.expand = function($event) {
    $(event.target).removeClass('md-whiteframe-z1').addClass('md-whiteframe-z4');
  };
  $scope.shrink = function($event) {
    $(event.target).removeClass('md-whiteframe-z4').addClass('md-whiteframe-z1');
  };
}])
.controller('bodyController', ['$scope', '$http', '$mdToast', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){
  $scope.openBottomSheet = function($event) {
    $mdBottomSheet.show({
      targetEvent:$event,
      templateUrl: 'bottomSheet.html'
    });
  };
}])

.controller('footerController', ['$scope', '$http', '$mdToast', '$mdDialog', '$mdBottomSheet', function($scope, $http, $mdToast, $mdDialog, $mdBottomSheet){
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
 $scope.devTeam = function ($event) {
   $mdDialog.show({
     targetEvent: $event,
     templateUrl: 'dev-team.html',
     controller: 'DevTeamController'
   });
 };
 $scope.mouseOut = function($event) {
    $mdBottomSheet.hide();
 };
 $scope.listItemClick = function($event) {
    $mdBottomSheet.hide();
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
  };
  $scope.close = function(){
    $mdDialog.hide();
  };
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
  $scope.close = function(){
    $mdDialog.hide();
  };
}])
.controller('AddBugController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog) {
  $scope.types = [{name:'Bug',value:'bug'},{name:'Feature',value:'feature'}];
  $scope.report = function(type, message, user){
    function success(data){
      $mdToast.show($mdToast.simple().content('Thank you for your feedback!').capsule(true));
      $mdDialog.hide();
    }
    function error(){}
    $http({
      method: 'POST',
      url: '/bug',
      data: {bug: {type: type, message:message, user:user}},
      headers: {'X-CSRF-Token': $('meta[name="csrf-token"]').attr('content')}  
    }).success(success).error(error);
  };
  $scope.close = function(){
    $mdDialog.hide();
  };
}])
.controller('DevTeamController', ['$scope', '$http', '$mdToast', '$mdDialog', function($scope, $http, $mdToast, $mdDialog) {
  $scope.close = function(){
    $mdDialog.hide();
  };
}])
.directive('autofocus', ['$timeout', function($timeout){
 return {
    restrict: 'A',
    link: function(scope, element){
      $timeout(function(){
        if(element[0].tagName.toUpperCase()){
          element[0].querySelector('input').focus();
        } else {
          element[0].focus();
        }
      }, 1000);
    }
  }; 
}]);
 
