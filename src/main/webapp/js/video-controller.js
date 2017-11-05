/**
 * 
 */
var videoController = {
	data : {
		config : null
	},
	uiElements : {
		videoCardTemplate : null,
		videoList : null,
		loadingIndicator : null
	},
	init : function(config) {
		this.uiElements.videoCardTemplate = $('#video-template');
		this.uiElements.videoList = $('#video-list');
		this.data.config = config;
		this.getVideoList();
	},
	getVideoList : function() {
		var that = this;
		var url = this.data.config.apiBaseUrl + '/videos';
		$.get(url, function(data, status) {			
			that.updateVideoFrontpage(data);
		}).done(function() {
		}).fail(function(e) {
			alert("error");
			alert(e.responseStatus);
		}).always(function() {
		});
	},
	updateVideoFrontpage : function(data) {
		// var baseUrl = data.domain;
		// var bucket = data.bucket;		
		for (var i = 0; i < data.length; i++) {
			var video = data[i];
			var clone = this.uiElements.videoCardTemplate.clone().attr('id','video-' + i);
			clone.find('source').attr('src', video.url);
			this.uiElements.videoList.prepend(clone);
		}
	}
}