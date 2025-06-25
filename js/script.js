const slideshow = document.querySelector('[data-component="slideshow"]');
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides.length) % slides.length;
  showSlide(currentSlide);
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

// Avanzar automáticamente cada 3 segundos


showSlide(currentSlide); // Mostrar la primera diapositiva al cargar

//Ensayo de sol siguiendo el cursor
const circulo = document.getElementById('circulo');

  document.addEventListener('mousemove', (e) => {
    circulo.style.left = e.clientX + 'px';
    circulo.style.top = e.clientY + 'px';
  });

  //Espacio para la calculadora solar
  function calcularPaneles() {
  const consumo = parseFloat(document.getElementById('consumo').value);
  const potencia = parseFloat(document.getElementById('potencia').value) / 1000; // W a kW
  const hsp = parseFloat(document.getElementById('hsp').value);
  const eficiencia = parseFloat(document.getElementById('eficiencia').value) / 100;

  if (isNaN(consumo) || isNaN(potencia) || isNaN(hsp) || isNaN(eficiencia)) {
    document.getElementById('resultado').textContent = 'Por favor, completa todos los campos.';
    return;
  }

  const produccionPorPanel = potencia * hsp * eficiencia;
  const cantidadPaneles = Math.ceil(consumo / produccionPorPanel);

  document.getElementById('resultado').textContent =
    `Necesitas aproximadamente ${cantidadPaneles} panel(es) solares para cubrir tu consumo diario.`;
}