/*Variables del header */
const hamburger = document.getElementById("hamburger");
const overlay = document.getElementById("overlay");
const header = document.getElementById("header");
const menu2 = document.getElementById("menu2");
const minimumSize = window.matchMedia("(min-width: 860px)");
const header__button = document.getElementById("header__button");

/*Varuables del carrusel 1*/
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
const slidesContainer = document.querySelector(".carrusel-slides");
const prevBtn = document.querySelector(".carrusel-btn.prev");
const nextBtn = document.querySelector(".carrusel-btn.next");
const positionDots = document.querySelectorAll(".posiciones li");
const slidesbg1 = document.getElementById("slide1");
const slidesbg2 = document.getElementById("slide2");
const slidesbg3 = document.getElementById("slide3");
const slidesbg4 = document.getElementById("slide4");
const slidesbg5 = document.getElementById("slide5");

const minRes = window.matchMedia("(min-width: 1000px)");

const minRes2 = window.matchMedia("(min-width: 860px)");

/*Varuables del carrusel 2*/
let currentSlide2 = 0;
const slides2 = document.querySelectorAll(".carousel-item");
const totalSlides2 = slides2.length;
const slidesContainer2 = document.querySelector(".carousel2nd");
const prevBtn2 = document.querySelector(".carrusel-btnprev");
const nextBtn2 = document.querySelector(".carrusel-btnnext");
const itemWidth = 250;
const widthScreen = document.getElementById("slidesContainer");

/*Variables del form */
const form_invitados = document.getElementById("form_invitados");
const form_tel = document.getElementById("form_tel");
const form_name = document.querySelector(".form_name");
const form_dir = document.querySelector(".dir");
const form_fecha = document.querySelector(".form_fecha");
const buttonform = document.querySelector(".submit");

/*Variables otras */
const information__img = document.getElementById("information__img");

/* Código del menú de hamburguesa */
function toggleMenu() {
	hamburger.classList.toggle("active");
	overlay.classList.toggle("active");
	header.classList.toggle("active");
	menu2.classList.toggle("active");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", toggleMenu);

const menuLinks = document.querySelectorAll(".header__menu--a");
menuLinks.forEach((link) => {
	link.addEventListener("click", (e) => {
		if (menu2.classList.contains("active")) {
			toggleMenu();
		}
	});
});

function handleViewportChange(e) {
	if (e.matches) {
		hamburger.classList.remove("active");
		overlay.classList.remove("active");
		header.classList.remove("active");
		menu2.classList.remove("active");
	}
}

handleViewportChange(minimumSize);
minimumSize.addEventListener("change", handleViewportChange);

/* FORM */

form_invitados.addEventListener("input", () => {
	if (form_invitados.value.length > 6) {
		form_invitados.value = form_invitados.value.slice(0, 6);
	}
});

form_tel.addEventListener("input", () => {
	if (form_tel.value.length > 12) {
		form_tel.value = form_tel.value.slice(0, 12);
	}
});

/* Carrucel 1 */

function updateCarousel() {
	slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
	updateDots();
}
function moveSlide(direction) {
	currentSlide += direction;

	if (currentSlide < 0) {
		currentSlide = totalSlides - 1;
	} else if (currentSlide >= totalSlides) {
		currentSlide = 0;
	}

	updateCarousel();
}

function goToSlide(index) {
	currentSlide = index;
	updateCarousel();
}

function updateDots() {
	positionDots.forEach((dot, index) => {
		if (index === currentSlide) {
			dot.classList.remove("bi-circle");
			dot.classList.add("bi-circle-fill");
		} else {
			dot.classList.remove("bi-circle-fill");
			dot.classList.add("bi-circle");
		}
	});
}

prevBtn.addEventListener("click", () => moveSlide(-1));
nextBtn.addEventListener("click", () => moveSlide(1));

positionDots.forEach((dot, index) => {
	dot.addEventListener("click", () => goToSlide(index));
	dot.style.cursor = "pointer";
});

setInterval(() => {
	moveSlide(1);
}, 10000);

function updateSlides(e) {
	if (e.matches) {
		slidesbg1.src = "elementos/carrucel1/1.png";
		slidesbg2.src = "elementos/carrucel1/2.png";
		slidesbg3.src = "elementos/carrucel1/3.png";
		slidesbg4.src = "elementos/carrucel1/4.png";
		slidesbg5.src = "elementos/carrucel1/5.png";
	} else {
		slidesbg1.src = "elementos/carrucel1/r1.png";
		slidesbg2.src = "elementos/carrucel1/r2.png";
		slidesbg3.src = "elementos/carrucel1/r3.png";
		slidesbg4.src = "elementos/carrucel1/r4.png";
		slidesbg5.src = "elementos/carrucel1/r5.png";
	}
}

function updateSlides2(e) {
	if (e.matches) {
		information__img.src = "elementos/information/1.png";
	} else {
		information__img.src = "elementos/information/3.png";
	}
}

updateSlides(minRes);
minRes.addEventListener("change", updateSlides);

updateSlides2(minRes2);
minRes2.addEventListener("change", updateSlides2);

/* Carrucel 2 */

function updateCarousel2() {
	const offset = currentSlide2 * itemWidth;
	slidesContainer2.style.transform = `translateX(-${offset}px)`;
}

function moveSlide2(direction) {
	currentSlide2 += direction;
	const width = widthScreen.clientWidth;
	let width2 = 1;
	if (width == 270) {
		width2 = 1;
	} else if (width == 470) {
		width2 = 2;
	} else if (width >= 720) {
		width2 = 3;
	}
	console.log(width);
	console.log(width2);
	if (currentSlide2 < 0) {
		currentSlide2 = 0;
	} else if (currentSlide2 > totalSlides2 - width2) {
		currentSlide2 = totalSlides2 - width2;
	}

	updateCarousel2();
}

function goToSlide2(index) {
	currentSlide2 = index;
	updateCarousel2();
}

prevBtn2.addEventListener("click", () => moveSlide2(-1));
nextBtn2.addEventListener("click", () => moveSlide2(1));

updateCarousel2();

/* Código Formulario */
function generarMensaje(e) {
	e.preventDefault();

	const nombre = form_name.value.trim();
	const telefono = form_tel.value.trim();
	const direccion = form_dir.value.trim();
	const invitados = form_invitados.value.trim();
	const fecha = form_fecha.value.trim();

	let mensaje = "";

	if (nombre) {
		mensaje = `Hola, soy ${nombre}`;
	} else {
		mensaje = "Hola, ";
	}

	mensaje += " estoy interesado en sus servicios";

	if (direccion) {
		mensaje += ` para la dirección ${direccion}`;
	}

	if (invitados) {
		mensaje += ` para ${invitados} invitados`;
	}

	if (fecha) {
		const fechaFormateada = formatearFecha(fecha);
		mensaje += ` el día ${fechaFormateada}`;
	}

	if (telefono) {
		mensaje += `. Mi número de contacto es ${telefono}`;
	}

	mensaje += ". ¡Espero su respuesta!";

	enviarWhatsApp(mensaje);
}

function formatearFecha(fechaISO) {
	const fecha = new Date(fechaISO + "T00:00:00");
	const opciones = { year: "numeric", month: "long", day: "numeric" };
	return fecha.toLocaleDateString("es-MX", opciones);
}

function enviarWhatsApp(mensaje) {
	const numeroWhatsApp = "523320272875";
	const mensajeCodificado = encodeURIComponent(mensaje);
	console.log(mensajeCodificado);
	const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;

	window.open(urlWhatsApp, "_blank");
}

buttonform.addEventListener("click", generarMensaje);

header__button.addEventListener("click", () => {
	const numeroWhatsApp = "523320272875";
	const mensajeCodificado =
		"¡Hola! estoy interesado en una cotización, ¿Me podrías dar más información por favor?";
	const urlWhatsApp = `https://api.whatsapp.com/send?phone=${numeroWhatsApp}&text=${mensajeCodificado}`;
	window.open(urlWhatsApp, "_blank");
});
