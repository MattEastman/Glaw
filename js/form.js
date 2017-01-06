$(function(){var dss_form_index=1;$(".dss-form").each(function(){var t=$(this).find(".input-country1 select"),e=$(this).find(".input-state1 select");if(t.length){var i=t.attr("id"),s=i+dss_form_index;if(t.attr("id",s),e.length){var n=e.attr("id"),r=n+dss_form_index;e.attr("id",r),populateCountries(s,r)}else populateCountries(s);dss_form_index++}if(t=$(this).find(".input-country select"),e=$(this).find(".input-state select"),t.length){var i=t.attr("id"),s=i+dss_form_index;if(t.attr("id",s),e.length){var n=e.attr("id"),r=n+dss_form_index;e.attr("id",r),populateCountries(s,r)}else populateCountries(s);dss_form_index++}}),$(".dss-form .input-country select, .dss-form .input-country1 select").val("USA").change();});


$(function() {

	
	
	var mailcheck_element = $('input[type="email"]');
	mailcheck_element.after('<div class="suggestion" style="display: none;" />'); 
	mailcheck_element.on('blur', function() {
		var mailcheck_hint = $(this).next('.suggestion');
		$(this).mailcheck({
			suggested: function(element, suggestion) {
				if(!mailcheck_hint.html()) {
					
					var suggestion = 'Did you mean <span class="suggestion-email"><span class="suggestion-address">' + suggestion.address + '</span>@<a href="#" class="suggestion-domain">' + suggestion.domain + '</a></span>?';
					mailcheck_hint.html(suggestion).fadeIn(150);
				} else {
					
					$(".suggestion-address").html(suggestion.address);
					$(".suggestion-domain").html(suggestion.domain);
				}
			}
		});
	});
	
	$('.suggestion').on('click', '.suggestion-domain', function() {
		$(this).closest('.suggestion').prev().val($(".suggestion-email").text());
		$(this).closest('.suggestion').fadeOut(200, function() {
			$(this).empty();
		});
		return false;
	});

	
	
	$.validator.setDefaults({
		
		showErrors: function(errorMap, errorList) {		
			
			$.each(this.validElements(), function (index, element) {
				var $element = $(element);
				if (!$element.closest('.form-group').hasClass("has-warning")) {
					$element.data("title", "") 
						.tooltip("destroy");
					$element.closest('.form-group')
						.removeClass("has-error");
				}
			});		
			
			$.each(errorList, function (index, error) {
				var $element = $(error.element);		
				$element.tooltip("destroy") 
					.data("title", error.message)
					.tooltip({ 
						container: 'body',
						placement: 'auto right',
						template: '<div class="tooltip validation"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'
					});
				$element.closest('.form-group')
					.addClass("has-error");
			});
		}
	});
	$(".dss-form form").each(function () {
		$(this).validate();
	});

});


  (function() {
    var cx = '008750711165473153903:2j8xthjhjvq';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//www.google.com/cse/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();



$(function(){
	if (typeof(localStorage) == 'undefined' ) {
		alert('Your browser does not support HTML5 localStorage. Try upgrading.');
	} 
	else {
		var newDate = new Date();
		var currentTime = newDate.getTime().toString();
		
		var newURL = document.URL;

		
		/*Use DSSCTT: DSS Click track time DSSCTP: DSSClick track path*/
		var TrackStep=12;
		var timeString=localStorage.getItem("DSSCTT");
		var timeArray=[];
		if (timeString!=null) {
			localStorage.removeItem("DSSCTT");
			timeArray=timeString.split(";");
		}
		timeArray.push(currentTime.toString());
		if (timeArray.length>=TrackStep) {
			timeArray.splice(0,1);
		}
		timeString=timeArray.join(";");
		var pathString=localStorage.getItem("DSSCTP");
		var pathArray=[];
		if (pathString!=null) {
			localStorage.removeItem("DSSCTP");
			pathArray=pathString.split(";");
		}
		pathArray.push(newURL);
		if (pathArray.length>=TrackStep) {
			pathArray.splice(0,1);
		}
		pathString=pathArray.join(";");
		
		if (newURL != "") {
			try {
				localStorage.setItem("DSSCTT", timeString);
				localStorage.setItem("DSSCTP", pathString);
			} catch (e) {
				if (e == QUOTA_EXCEEDED_ERR) {
					/*Will remove some data to make space*/
					alert('Quota exceeded!');
					var timeArray=timeString.split(";");
					var pathArray=pathString.split(";");
					/*remove 2*/
					timeArray.splice(0,2);
					pathArray.splice(0,2);
					timeString=timeArray.join(";");
					pathString=pathArray.join(";");
					localStorage.setItem("DSSCTT", timeString);
					localStorage.setItem("DSSCTP", pathString);
				}
			}
		}
	}
});



var $window=$(window),eventFired=0;$window.on("scroll.scrollDepth",function(){var e=($(document).height(),window.innerHeight?window.innerHeight:$window.height()),o=$window.scrollTop()+e;o>=$("#footer").offset().top&&!eventFired&&(fwmEvent("'ScrollEvent', 'ReachedFooter'"),eventFired=1)});

		<div id="share-buttons">
            <div id="share-facebook" class="share-button">
				<div class="fb-like" data-href="http://www.galindolaw.com/" data-send="false" data-layout="box_count" data-width="55" data-show-faces="false"></div>
		    </div>
			
			<div id="share-google" class="share-button">
				<div class="g-plusone" data-href="http://www.galindolaw.com/" data-size="tall" data-annotation="bubble"></div>
			</div>
			
			<div id="share-twitter" class="share-button">
				<a href="https://twitter.com/share" class="twitter-share-button" data-lang="en" data-url="http://www.galindolaw.com/" data-counturl="http://www.galindolaw.com/" data-count="vertical">Tweet</a>
			</div>
			
		</div>
	
		(function(w, d, s) {
		  function go(){
			var js, fjs = d.getElementsByTagName(s)[0], load = function(url, id) {
			  if (d.getElementById(id)) {return;}
			  js = d.createElement(s); js.async = true; js.src = url; js.id = id;
			  fjs.parentNode.insertBefore(js, fjs);
			};
			load('//connect.facebook.net/en_US/all.js#xfbml=1', 'fbjssdk');
			load('//apis.google.com/js/plusone.js', 'gplus1js');
			load('//platform.twitter.com/widgets.js', 'tweetjs');
		  }
		  if (w.addEventListener) { w.addEventListener("load", go, false); }
		  else if (w.attachEvent) { w.attachEvent("onload",go); }
		}(window, document, 'script'));
	
$(function() {

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
	var brdrhght = $('#interactive').height();
    if (scroll >= brdrhght) {
        $("#header").addClass("border");
    } else {
        $("#header").removeClass("border");
    }
});


var dss_form_elements = '.dss-form input[type!="hidden"], .dss-form textarea, .dss-form select';
var dss_form_old_ie_elements = '.dss-form input[type!="hidden"], .dss-form textarea';
var dss_form_active_label_class = 'active-label';
$(dss_form_elements).focus(function() {
$(this).prev("label").addClass(dss_form_active_label_class);
});
$(dss_form_elements).blur(function() {
$(this).prev("label").removeClass(dss_form_active_label_class);
});
$(".ie6, .ie7, .ie8, .ie9")
.find(dss_form_old_ie_elements)
.each(function() {
var dss_form_old_label_text = $(this).prev("label").text();
$(this).attr('onfocus',"if (this.value == '"+dss_form_old_label_text+"'){this.value = '';}")
.attr('onblur',"if (this.value == ''){this.value = '"+dss_form_old_label_text+"';}")
.val(dss_form_old_label_text);
});


$('.reports.single #copy .content .pagedescription h1').insertBefore('.reports.single #copy .content');
$('.reports.single #copy .content form').insertBefore('.reports.single #copy .content .pagedescription');


$('#aside .mod.locations .location ul').each(function(){$(this).hide();});
$('#aside .mod.locations .location ul').first().show();
$('#aside .mod.locations .location').first().addClass('active');
$('#aside .mod.locations .title').click(function(){ 
	if(!$(this).parent().hasClass('active')) $('#aside .mod.locations .location').removeClass('active');
	if(!$(this).next().is(':visible')){
		$('#aside .mod.locations .location ul').slideUp('fast'); 
		$(this).next().slideDown('fast');
		$(this).parent().addClass('active');
	}
});


$('#share-buttons').append($('.mod.chat'));
$('.columns-inner').append($('#share-buttons'));


//$('#contact .dss-form-intro').insertBefore($('#contact .dss-form .inner'));
if (localStorage.getItem("contactstatus") === null){
	$('#contact >.inner').addClass('open');
	$('#contact .heading').addClass('minus');
}
$('#contact .dss-form .heading').click(function(){ 
	$('#contact').toggleClass('open');
	$(this).toggleClass('minus');
	
	if (localStorage.getItem("contactstatus") === null){
		localStorage.setItem('contactstatus', 1);
	}
});
