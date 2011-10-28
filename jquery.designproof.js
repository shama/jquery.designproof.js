/**
 * jQuery Design Proof 1.0
 * @author Kyle Robinson Young <kyle at dontkry.com>
 * @copyright 2011 Kyle Robinson Young
 *
 * Usage:
 * 1) Add script tag for jquery, designproof, then call
 *		$(function() {
 *			$('#container').designproof('images/dp/proof_img.jpg');
 *		});
 *
 * 2) Add script tag for jquery, then add params to your designproof script src
 *		<script type="text/javascript" src="/js/jquery.designproof-1.0.js?img=images/dp/proof_img.jpg"></script>
 *
 *
 * TODO: Build a better autoloader
 */
(function($) {
	var settings = {
		'scriptSrc': 'designproof'
	};
	var methods = {
		/**
		 * init
		 */
		init: function(dpimg) {
			$(document).mousemove(function(e) {
				var opc = e.pageX/$(this).width();
				$('#dp-image').css({opacity:opc});
			});
			return this.each(function() {
				var w = $(this).width();
				var h = 4000; // TODO: Make dynamic
				var img = $('<div />')
					.attr({
						id: 'dp-image'
					})
					.css({
						'position': 'absolute',
						'z-index': 998,
						'opacity' : 0,
						'display' : 'none',
						'width': w,
						'height': h,
						'top': 0,
						'left': '50%',
						'margin-left': -(w/2),
						'background': 'url(' + dpimg + ') no-repeat top center transparent'
					});
				var control = $('<div />')
					.attr({
						id: 'dp-control',
						title: 'Design Proof'
					}).css({
						'position': 'fixed',
						'bottom': 0,
						'right': 0,
						'width': 20,
						'height': 20,
						'background-color': '#333',
						'z-index': 999
					})
					.append(
						$('<input />').attr({
							'id': 'dp-active',
							'type': 'checkbox'
						})
						.click(function() {
							if ($(this).is(':checked')) {
								$('#dp-image').css({display:'block'});
							} else {
								$('#dp-image').css({display:'none'});
							}
						})
					);
				$(this).prepend(img);
				$(this).prepend(control);
			});
		},
		/**
		 * autoload
		 * Detects if image passed through query string
		 * then automatically loads design proof.
		 * TODO: Write a better of this!
		 */
		autoload: function() {
			var p = false;
			$('script').each(function() {
				var src = $(this).attr('src');
				if (src) {
					if (src.indexOf(settings.scriptSrc) != -1) {
						if (src.indexOf('?') != -1) {
							p = src.split('?')[1];
						}
					}
				}
			});
			if (!p) {
				return false;
			}
			var ret = {};
			var vars = p.split("&");
			for (var i = 0; i < vars.length; i++) {
				var pair = vars[i].split("=");
				ret[pair[0]] = pair[1];
			}
			if (ret.img) {
				return $(this).designproof(ret.img);
			}
			return false;
		}
	};
	/**
	 * designproof
	 */
	$.fn.designproof = function(args) {
		if (methods[args]) {
			return methods[args].apply(this, Array.prototype.slice.call(arguments, 1));
		} else {
			return methods.init.apply(this, [args]);
		}
	};
})( jQuery );
$(function() { $('body').designproof('autoload'); });