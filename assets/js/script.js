$("div").each(function(idx){
	$(this).prepend(idx + ": ");
	if(this.id === "last")
		return false;
});

// example of the jQuery map() method

$(":header").map(function(){
	return this.id;
}).toArray().sort();

//and example of the jQuery is() method



//let's create some prototype functions
$.fn.moveLeft = function(){
	$(this).on('click',function(){
		$(this).animate({
		left: "+=40px",
		duration: "fast",
		complete: function(){
			return true;
			}
		},300);
	});
	return this;
}



$.fn.moveRight = function(){
	$(this).on('click',function(){
		$(this).animate({
		right: "+=40px",
		duration: "fast",
		complete: function(){
			return true;
			}
		},300);
	});
	return this;
}



$.fn.fadeThis = function(){
 this.each(function(){
  $(this).bind({
		mouseover: function(){
			$(this).stop().fadeTo(300, 0.65);
		},
		mouseout: function(){
			$(this).stop().fadeTo(300, 1.0);
		}
	});
 });
 	return this;
}




$.fn.fadeTog = function(){
	this.each(function(){
		$( this ).click(function() {
			$( this ).fadeToggle("slow");
		});
	});
	return this;
}

$.fn.blinkBlink = function(){
	this.each(function(){
		$(this).fadeOut('fast', function(){
			$(this).fadeIn('fast');
		});
	});
	return this;
}


$('a').on('click', function(){
	$('header').nextAll().blinkBlink();
});


$('div').css('outline','1px solid red');





