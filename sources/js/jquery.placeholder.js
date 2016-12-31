/*
				 1.使用span模拟placeholder 
				  	建议：
				  		颜色：#ccc
				  		宽高：input框使用padding设定
				 2.检测浏览器是否支持placeholder属性
				 3.获取所有placeholder属性的元素并模拟
				 * */
/*
jQuery placeholder plugin 1.0.0
小伍
2016年12月30日
https://github.com/547377507/jquery-placeholder
*/

;
(function($) {
	//  ================================ 
	//  = Placeholder class definition = 
	//  ================================ 
	var Placeholder = function(ele, opt) {
		this.$element = $(ele);
		this.defaultobj = {
			placeholderText: this.$element.attr('placeholder'),
			placeholderClass: 'placeholder-text'
		};
		this.options = $.extend({}, this.defaultobj, opt);
		this.$mockPlace = $('<span class="' + this.options.placeholderClass + '">' + this.options.placeholderText + '</span>');
	};

	//定义方法
	Placeholder.prototype = {
		constructor: Placeholder,
		createPlaceholder: function() {
			if(!this.isPlaceholderSuport()) {
				var posi,
					fontSize,
					height,
					paddingTopBottom,
					paddingLeft,
					_this = this.$element,
					$mockPlace = this.$mockPlace;

				//父容器操作
				_this.parent().addClass('placeholder-text-box').css({
					'position': 'relative'
				});
				posi = _this.position(); //计算出位置
				//input操作
				_this.before($mockPlace);
				//mockplace span操作
				fontSize = _this.css('fontSize');
				height = _this.outerHeight();
				paddingTopBottom = (height - parseInt(fontSize, 10)) / 2;
				paddingLeft = parseInt(_this.css('padding-left'), 10);
				$mockPlace.css({
					'top': posi.top,
					'left': posi.left,
					'position': 'absolute',
					'fontSize': fontSize,
					'display': 'inline-block',
					'lineHeight': '1',
					'paddingTop': paddingTopBottom,
					'paddingBottom': paddingTopBottom,
					'paddingLeft': paddingLeft + 3
				}).attr('unselectable', 'on');
			}
		},
		hideenPlaceholder: function() {
			this.$mockPlace.hide();
		},
		showPlaceholder: function() {
			this.$mockPlace.show();
		},
		isPlaceholderSuport: function() {
			return 'placeholder' in document.createElement('input');
		}
	};
	//  ================================= 
	//  = placeholder plugin definition = 
	//  ================================= 
	$.fn.placeholder = function(options) {
		return this.each(function(index, element) {
			var $this = $(this),
				data = $this.data('jq.placeholder');

			if(!data) $this.data('jq.placeholder', (data = new Placeholder(this, options)));
			data.createPlaceholder();
			data.$mockPlace.mousedown(function() {
				$this.focus();
			});
			$this.change(function() {
				if(this.value == '') {
					data.showPlaceholder.call(data);
				} else {
					data.hideenPlaceholder.call(data);
				}
			});
			$this.keydown(function() {
				$this.triggerHandler('change');
			});
			$this.keyup(function() {
				$this.triggerHandler('change');
			});
			$this.blur(function() {
				$this.triggerHandler('change');
			});
		});
	};

})(jQuery);