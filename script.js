let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
	 navRedirect = document.querySelectorAll(".nav_redirect");

const paragraphs = document.querySelectorAll(".section_paragraph");

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});



document.addEventListener("scroll", function(){
	paragraphs.forEach(paragraph =>{
		if(isInView(paragraph)){
			paragraph.classList.add("section_paragraph--visible")
		}
	})
})


//Fade in scroll



function isInView(element){
	const rect = element.getBoundingClientRect()
	return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)

}