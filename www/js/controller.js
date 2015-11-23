// JavaScript Document
angular.module('starter.controllers', [])
.controller('MainCtrl', function($scope, $ionicSideMenuDelegate,$http,$state) {
  $scope.attendees = [
    { firstname: 'Nicolas', lastname: 'Cage' },
    { firstname: 'Jean-Claude', lastname: 'Van Damme' },
    { firstname: 'Keanu', lastname: 'Reeves' },
    { firstname: 'Steven', lastname: 'Seagal' }
  ];
  
  $scope.toggleLeft = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  	
})

.controller('CheckinCtrl', function($scope,$state) {
	$scope.showtask = function(){
		$state.go('eventmenu.tasks');
	}
})

.controller('SignInCtrl', function($scope,$state,$http) {
	$http.post("http://"+globalip+"/checkapi.php", {
		headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'}
	})
	.success(function(response) {
		if(response[0].status == "Y"){
			$state.go('eventmenu.checkin');
		}
	});
})

.controller('tasksCtrl', function($scope,$state) {
	$scope.buttoncolor11 = "button-assertive";
	$scope.buttoncolor12 = "button-assertive";
	$scope.buttoncolor21 = "button-assertive";
	$scope.buttoncolor22 = "button-assertive";
	$scope.buttoncolor31 = "button-assertive";
	$scope.buttoncolor32 = "button-assertive";
	
	$scope.changecolor = function(val){
		if(val == 11)$scope.buttoncolor11 = "button-energized";
		if(val == 12)$scope.buttoncolor12 = "button-balanced";
		if(val == 21)$scope.buttoncolor21 = "button-energized";
		if(val == 22)$scope.buttoncolor22 = "button-balanced";
		if(val == 31)$scope.buttoncolor31 = "button-energized";
		if(val == 32)$scope.buttoncolor32 = "button-balanced";
	}
	
	$scope.showreview = function(){
		$state.go('eventmenu.review');
	}
	
	$scope.showedit = function(){
		$state.go('eventmenu.edit');
	}
	
	$scope.showtranslate = function(){
		$state.go('eventmenu.translate');
	}
})

.controller('reviewCtrl', function($scope,$state) {
	$scope.showreviewdetail = function(val){
		console.log(val);
		if(val == 1){
			$state.go('eventmenu.reviewdetail');
		}
		else{
			$state.go('eventmenu.reviewdetail1');
		}
		
	}
})

.controller('translateCtrl', function($scope,$state) {
	$scope.showtranslatedetail = function(){
		$state.go('eventmenu.translatedetail1');
	}
})

.controller('editCtrl', function($scope,$state) {
	$scope.showeditdetail1 = function(){
		$state.go('eventmenu.editdetail1');
	}
})

.controller('AttendeesCtrl', function($scope) {
  
  $scope.activity = [];
  $scope.arrivedChange = function(attendee) {
    var msg = attendee.firstname + ' ' + attendee.lastname;
    msg += (!attendee.arrived ? ' has arrived, ' : ' just left, '); 
    msg += new Date().getMilliseconds();
    $scope.activity.push(msg);
    if($scope.activity.length > 3) {
      $scope.activity.splice(0, 1);
    }
  };
  
})