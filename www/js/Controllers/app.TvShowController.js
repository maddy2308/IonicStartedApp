(function(){
	angular.module("TvShow").controller("TvShowController", TvShowController);

	TvShowController.$inject = ['TvShowService'];

	function TvShowController(tvShowService) {

		var self = this;

		self.tvShowList = [];

		self.getTvShow = getTvShow;

		function getTvShow() {
			var response = tvShowService.getTvShow(self.search).then(
				function(response){
					self.tvShowList = [];					
					self.tvShowList = response
					});
		}
	}

})();