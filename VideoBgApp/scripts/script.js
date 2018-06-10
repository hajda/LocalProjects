angular
	.module('videoBgApp', [])
	.directive('vbgMain', mainDirective)
	.directive('vbgVideos', videosDirective)
	.directive('vbgVideo', videoDirective);





/* main directive */
mainDirective.$inject = [];
function mainDirective() {
	return {
		restrict: 'AE',
		// templateUrl: 'main.template.html',
		template: 	
			'<h3>IDs</h3>' +
			'<div ng-repeat="element in array">ID: {{element.id}}</div>'
		,
		link: function postLink($scope) {
			$scope.array = [
				{id: 1},
				{id: 2},
				{id: 3},
				{id: 4},
				{id: 5},
				{id: 6},
				{id: 7},
				{id: 8}
			];
		}
	};
}

/* Video directive */
videosDirective.$inject = [];
function videosDirective() {
	return {
		restrict: 'E',
		template:
			'<div id="vbg-video-selector>">' +
            '    <div class="vbg-video-selector-option" ng-repeat="video in videos" ng-click="videos.selected = video">{{video.name}}</span>' +
			'</div>'
		,
		// templateUrl: 'main.template.html',
		link: function postLink($scope) {
			$scope.videos = {
				home: {
					name: 'Home',
					resourceName: 'videos/home'
				},
				best4KAquarium: {
					name: 'Best 4K Aquarium',
					resourceName: 'videos/Best4KAquarium'
				},
				gitcrakenInk: {
					name: 'Git Craken Ink',
					resourceName: 'videos/gitcrakenInk'
				},
				aquarium: {
					name: 'Aquarium',
					resourceName: 'videos/Aquarium'
				},
			};

			var selectedPropertyDescriptor = {
	            configurable: false,
	            enumerable: false,
	            value: $scope.videos.home,
	            writable: true
	        };
	        Object.defineProperty($scope.videos, 'selected', selectedPropertyDescriptor);
		}
	};
}

videoDirective.$inject = [];
function videoDirective() {
	return {
		restrict: 'AE',
		// templateUrl: 'main.template.html',
		template: 	
			'<video autoplay="" loop="" ng-attr-muted="muted" poster="{{videos.selected.resourceName}}.jpg" class="fullscreen">' +
			'	<source src="{{videos.selected.resourceName}}.webm" type="video/webm">' +
			'	<source src="{{videos.selected.resourceName}}.mp4" type="video/mp4">' +
			'</video>'
		,
		link: function postLink($scope) {
		}
	};
}