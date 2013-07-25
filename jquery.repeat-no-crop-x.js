/*global jQuery */
/*!
 * repeat-no-crop-x.js
 *
 * Copyright 2013, David García G. http://www.davidgg.es
 * Released under the MIT license (http://opensource.org/licenses/MIT)
 * 
 *
 * Date: Thu July 23 19:00:00 2013 GMT+1
 */

(function($) {

	$.fn.repeatImage = function(imageUrl, widthImage, options) {

		// default options
		var settings = $.extend({
			imageSpace : 0,
			imageNumber : null,
			imageMarginLeft : 0,
			imageMarginRight : 0,
			floatImage : "left"
		}, options);

		if (typeof imageUrl === "undefined" || imageUrl === null) {
			throw "jquery.repeat-no-crop-x.js: imageUrl can\'t be empty";
		}

		if (settings.imageMarginLeft < 0 || settings.imageMarginRight < 0) {
			throw "jquery.repeat-no-crop-x.js: margin must be positive numbers";
		}

		if (typeof widthImage === "undefined" || widthImage === null) {
			throw "jquery.repeat-no-crop-x.js: widthImage can\'t be empty";
		}

		return this
				.each(function() {
					$(this).empty();
					var elements = "";
					var availableWidth = ($(this).width())
							- (settings.imageMarginLeft + settings.imageMarginRight);
					var numImg = Math.floor(availableWidth
							/ (settings.imageSpace + widthImage));

					for (i = 0; i < numImg; i++) {
						elements += "<div class='repeat-no-crop-x' id='repeat-no-crop-x-"
								+ i + "'></div>";
					}

					$(this).append(
							[ "<div class='rootImageRepeat'>", elements,
									"</div>" ].join(""));

					$(this).children(".rootImageRepeat").css({
						width : "100%",
						height : "100%",
						marginLeft : settings.imageMarginLeft + "px",
						marginRight : settings.imageMarginRight + "px"
					});

					$(this).children(".rootImageRepeat").children(
							".repeat-no-crop-x").css({
						backgroundImage : "url(" + imageUrl + ")",
						"float" : settings.floatImage,
						width : widthImage + "px",
						height : "100%",
						marginLeft : settings.imageSpace + "px"
					});

					var selector = settings.floatImage !== "right" ? "#repeat-no-crop-x-0"
							: "#repeat-no-crop-x-" + (numImg - 1);

					$(this).children(".rootImageRepeat").children(selector)
							.css({
								marginLeft : "0"
							});

				});
	};
}(jQuery));
