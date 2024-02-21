// Mobile nav JS
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');

const paragraphs = document.querySelectorAll(".section_paragraph");

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');
});
/////////////////////////////////////////////////

// Smooth scroll

navRedirect = document.querySelectorAll(".nav_redirect");

document.addEventListener("scroll", function(){
	paragraphs.forEach(paragraph =>{
		if(isInView(paragraph)){
			paragraph.classList.add("section_paragraph--visible")
		}
	})
})


function isInView(element){
	const rect = element.getBoundingClientRect()
	return rect.bottom > 0 && rect.top < (window.innerHeight - 150 || document.documentElement.clientHeight - 150)

}

///////////////////////////////////////