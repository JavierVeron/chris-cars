// Precios en pesos argentinos (ARS). Valores ilustrativos: ajustar al stock real.
const autos = [
  { marca: "Peugeot", modelo: "2008 GT", precio: 67080000, imagen: "images/peugeot-2008-gt.webp",
    descripcion: "SUV compacto con motor turbo, techo panorámico, i-Cockpit 3D y múltiples asistentes de manejo." },
  { marca: "Peugeot", modelo: "308 GT", precio: 70080000, imagen: "images/peugeot-308-gt.jpg",
    descripcion: "Hatchback deportivo de diseño moderno, motor THP turbo y equipamiento de tecnología de punta." },
  { marca: "Citroën", modelo: "C5 Aircross", precio: 75000000, imagen: "images/citroen-c5-aircross.png",
    descripcion: "SUV familiar de gran confort con suspensión Advanced Comfort y amplio espacio interior." },
  { marca: "Citroën", modelo: "C3 Aircross", precio: 63000000, imagen: "images/citroen-c3-aircross.png",
    descripcion: "SUV urbano y versátil con posición de manejo elevada y pantalla multimedia táctil." },
  { marca: "Ford", modelo: "Ranger", precio: 86400000, imagen: "images/ford-ranger.webp",
    descripcion: "Pickup mediana potente y robusta, ideal para trabajo y aventura con tracción 4x4." },
  { marca: "Ford", modelo: "Territory", precio: 82200000, imagen: "images/ford-territory.webp",
    descripcion: "SUV mediano con motor turbo, pantalla de 12,3\" y amplio equipamiento de seguridad." },
  { marca: "Chevrolet", modelo: "Tracker", precio: 62280000, imagen: "images/chevrolet-tracker.png",
    descripcion: "SUV compacto con motor turbo, conectividad total y asistencias a la conducción." },
  { marca: "Chevrolet", modelo: "Equinox", precio: 93600000, imagen: "images/chevrolet-equinox.jpg",
    descripcion: "SUV premium de gran espacio, motor turbo y tecnología avanzada de seguridad y confort." },
  { marca: "Audi", modelo: "A3 Sedán", precio: 64240000, imagen: "images/audi-a3.jpg",
    descripcion: "Sedán premium compacto con motor 1.4 TFSI turbo de 150 cv, transmisión automática y tecnología de punta." },
  { marca: "Audi", modelo: "A4", precio: 75920000, imagen: "images/audi-a4.jpg",
    descripcion: "Sedán premium de líneas elegantes, motor 2.0 TFSI turbo, transmisión S tronic y cabina de alta tecnología." }
];

const placeholder = "data:image/svg+xml;utf8," + encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="640" height="400"><rect width="100%" height="100%" fill="#e5e7eb"/>' +
  '<text x="50%" y="50%" fill="#6b7280" font-family="Arial" font-size="28" text-anchor="middle">Imagen no disponible</text></svg>');

const formatoPrecio = n => "$ " + n.toLocaleString("es-AR");

const catalogo = document.getElementById("catalogo");
autos.forEach(a => {
  const card = document.createElement("article");
  card.className = "card";

  const img = document.createElement("img");
  img.src = a.imagen;
  img.alt = a.marca + " " + a.modelo;
  img.loading = "lazy";
  img.onerror = () => { img.onerror = null; img.src = placeholder; };

  const body = document.createElement("div");
  body.className = "card-body";
  body.innerHTML =
    '<span class="marca"></span><h3></h3><p class="precio"></p><p class="desc"></p>';
  body.querySelector(".marca").textContent = a.marca;
  body.querySelector("h3").textContent = a.modelo;
  body.querySelector(".precio").textContent = formatoPrecio(a.precio);
  body.querySelector(".desc").textContent = a.descripcion;

  card.append(img, body);
  catalogo.appendChild(card);
});

document.getElementById("year").textContent = new Date().getFullYear();
