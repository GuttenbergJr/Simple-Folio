let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
	 navRedirect = document.querySelectorAll(".nav_redirect");

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});