(function(){
	angular.module("TvShow").factory("TvShowService", TvShowService);

	TvShowService.$inject = ['$http'];

	function TvShowService ($http) {

		var baseUrl = "http://api.tvmaze.com/";
		var service = {
			getTvShow : getTvShow
		};

		function getTvShow(value){
			var query = {
				'q' : value,
				'embed' : 'episodes'
			}
			return $http({method: 'get', url: baseUrl + "search/shows", params : query})
			.then(reponseHandler, errorHandler);
		}

		function reponseHandler(response) {
			return response.data;
		} 

		function errorHandler(err) {
			return err;
		}

		return service;
	}
})();