/*---------------------------------------------
 Autor: Esteban Vera
 Twitter : @kiokotzu
 Github : https://github.com/kiokotzu/styleSelect
 Correo : esteban.vg@outlook.com
 Name Plugin: stiky-multi.js
 version : 0.0.1
 ---------------------------------------------*/

 $(function(){
 	jQuery.fn.stickyMulti = function(settings){

 		var settingsDfault = jQuery.extend({
 			classFixed: 'stickyFixed',
 			classFinish: 'stickyFinish'
 		}, settings);

 		this.each(function(){
 			var el   = $(this),
 			elParent = settings.parentEl === undefined ? 0 : settings.parentEl,
 			classOne = settings.classFixed === undefined ? settingsDfault.classFixed : settings.classFixed,
 			classTwo = settings.classFinish === undefined ? settingsDfault.classFinish : settings.classFinish;

 			if(elParent.length > 0){
 				moveScroll(el, elParent, classOne, classTwo);
 			}

 			function moveScroll(element, parent, class1, class2){

 				if($(parent).length){
	 				var distEl       = element.offset().top,
	 					heightParent = element.parents(parent).innerHeight(),
	 					scrollNot    = (distEl + heightParent) - element.innerHeight();

	 				$(window).resize(function(event) {
	 					distEl       = element.offset().top,
	 					heightParent = element.parents(parent).innerHeight(),
	 					scrollNot    = (distEl + heightParent) - element.innerHeight();
	 				});

	 				element.parent().append('<div class="boxFixed"></div>');

	 				$(window).bind('scroll', function (){

	 					var scroll =  $(window).scrollTop();

	 					if(scrollNot < scroll){
	 						element.addClass(class2);
	 					}
	 					else if(scroll > distEl){
	 						element.addClass(class1);
	 						element.removeClass(class2);
	 					}
	 					else{
	 						element.removeClass(class1 + ' ' + class2);
	 					}
	 				});
 					
 				}
 			}

 		});
 		
 	}
 });