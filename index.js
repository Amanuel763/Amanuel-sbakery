mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



var imgCake = document.getElementById("imgCake");
var imgDessert = document.getElementById("imgCake2");

document.getElementById("btnj").onclick = function(){
	imgCake.style.display = 'block';
	imgCake2.style.display = 'block';

}

document.getElementById("btnjs").onclick = function(){
	imgCake.style.display = 'block';
	imgCake2.style.display = 'none';
}

document.getElementById("btnjs1").onclick = function(){
	imgCake.style.display = 'none';
	imgCake2.style.display = 'block';
}


