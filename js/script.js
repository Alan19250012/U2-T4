// Registrar el plugin de ScrollTrigger de GSAP
gsap.registerPlugin(ScrollTrigger);

// ===== Animacion 1: entrada del Hero (al cargar la pagina) =====
gsap.from(".animar-hero", {
  opacity: 0,
  y: 40,
  duration: 1,
  stagger: 0.25,
  ease: "power2.out"
});

// ===== Animacion 2: aparicion de los servicios al hacer scroll =====
gsap.from(".tarjeta-servicio", {
  opacity: 0,
  y: 60,
  duration: 0.8,
  stagger: 0.15,
  scrollTrigger: {
    trigger: "#servicios",
    start: "top 80%"
  }
});

// ===== Animacion 3: contador de estadisticas al hacer scroll =====
document.querySelectorAll(".numero").forEach(function (elemento) {
  const objetivo = Number(elemento.getAttribute("data-objetivo"));

  gsap.to(elemento, {
    innerText: objetivo,
    duration: 2,
    snap: { innerText: 1 },
    scrollTrigger: {
      trigger: ".estadisticas",
      start: "top 85%"
    },
    onUpdate: function () {
      elemento.textContent = Math.floor(Number(elemento.textContent));
    }
  });
});

// ===== Interaccion real: calculadora de costo =====
document.getElementById("btn-calcular").addEventListener("click", function () {
  const paginas = Number(document.getElementById("paginas").value);
  const precio = Number(document.getElementById("precio").value);

  const costo = paginas * precio;

  // Se modifica el contenido del elemento mediante su id
  document.getElementById("costo-estimado").textContent =
    "$" + costo.toLocaleString("es-MX");
});

// Calcular el costo al cargar la pagina (valores por defecto)
document.getElementById("btn-calcular").click();

// ===== Formulario de contacto =====
document.getElementById("formulario-contacto").addEventListener("submit", function (evento) {
  evento.preventDefault();
  document.getElementById("mensaje-enviado").textContent =
    "Gracias por tu mensaje, pronto te contactaremos.";
  this.reset();
});
