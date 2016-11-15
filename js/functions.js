$(document).ready(function(){
	alert('your page is ready');
});

$("button").click(function(){
	alert('You clicked a button');
});

$("#image").dblclick(function(){
	alert('You just double clicked');
});

$("#danger").mouseenter(function(){
	alert('you entered the danger zone');
});

$('#danger').mouseleave(function(){
	alert('Bye.. You are safe now');
});

$('#mouse').mousedown(function(){
	alert('you clicked one of the mouse buttons');
});

$('#mouse').mouseup(function(){
	alert('you released the mouse button');
});

$('#hover').hover(function(){
	alert('you\'re hovering over this image');
 },
 function(){
 	alert('you stopped hovering over this image');
 }
);

$("input").focus(function(){
	$(this).css("background-color","#cccccc");
});

$("input").blur(function(){
	$(this).css("background-color","#ffffff");
});

$(".para").on({
    mouseenter: function(){
        $(this).css("background-color", "lightgray");
    }, 
    mouseleave: function(){
        $(this).css("background-color", "lightblue");
    }, 
    click: function(){
        $(this).hide();
    } 
});