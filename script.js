// Mobile nav JS
let burger = document.getElementById('burger'),
	 nav    = document.getElementById('main-nav');
 
const paragraphs = document.querySelectorAll(".section_paragraph");

burger.addEventListener('click', function(e){
	this.classList.toggle('is-open');
	nav.classList.toggle('is-open');

	const about = document.getElementById("option1");
	const projects = document.getElementById("option2");
	const technologies = document.getElementById("option3");
	const contact = document.getElementById("option4");

	about.addEventListener('click', () =>{
		burger.classList.remove("is-open");
		nav.classList.remove('is-open');
	});

	projects.addEventListener('click', () =>{
		burger.classList.remove("is-open");
		nav.classList.remove('is-open');
	});

	technologies.addEventListener('click', () =>{
		burger.classList.remove("is-open");
		nav.classList.remove('is-open');
	});

	contact.addEventListener('click', () =>{
		burger.classList.remove("is-open");
		nav.classList.remove('is-open');
	});

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



// Email confirmation

submit = document.getElementById("submit");
labelEmail = document.getElementById("email");


submit.addEventListener('click', () =>{
	if(labelEmail != " "){
		alert("Email enviado com sucesso!")
		window.location.href = "index.html";
	}
})

