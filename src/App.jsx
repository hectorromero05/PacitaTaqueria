import "./App.css";

const phoneDisplay = "+52 1 322 301 5630";
const whatsappNumber = "5213223015630";
const whatsapp = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
  "Hola, quiero hacer un pedido en Pacita Taqueria."
)}`;
const address = "Alhóndiga 2266, Jardines del Country, Guadalajara, Jalisco";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;

const tacos = [
  {
    name: "Barbacoa",
    price: "$23 c/u",
    image: "/barbacoa.jpg",
    description: "Taco doradito y jugoso con el sabor tradicional de fin de semana.",
  },
  {
    name: "Asada",
    price: "$25 c/u",
    image: "/asada.jpg",
    description: "Carne asada con cebolla, cilantro y salsa para levantar el antojo.",
  },
  {
    name: "Chicharrón",
    price: "$23 c/u",
    image: "/chicharron.jpg",
    description: "Chicharrón suave y bien sazonado, servido calientito en tortilla.",
  },
];

const promos = [
  {
    name: "Enfrijoladas",
    price: "$100",
    image: "/enfrijoladas.jpg",
    description: "Enfrijoladas especiales + bebida",
  },
  {
    name: "Plancheese",
    price: "$90",
    image: "/plancheese.jpg",
    description: "2 Plancheese + bebida",
  },
  {
    name: "Orden chica",
    price: "$150",
    image: "/orden.jpg",
    description: "Orden chica de barbacoa + refresco",
  },
];

const benefits = [
  "Agua fresca o café gratis si nos sigues en redes",
  "Servicio a domicilio gratis a 1 km a la redonda",
  "Pedidos por WhatsApp",
  "Horario de fin de semana",
];

export default function App() {
  return (
    <div className="app">
      <nav className="navbar" aria-label="Navegación principal">
        <a className="brand" href="#inicio">
          <img src="/logo.png" alt="Logo Pacita Taqueria" />
          <span>Pacita Taqueria</span>
        </a>
        <div className="nav-links">
          <a href="#tacos">Tacos</a>
          <a href="#promociones">Promos</a>
          <a href="#ubicacion">Ubicación</a>
          <a href={whatsapp} target="_blank" rel="noreferrer">Pedir</a>
        </div>
      </nav>

      <header className="hero" id="inicio">
        <div className="hero-burst" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Sábados y domingos · 8:00 AM - 3:00 PM</p>
          <h1>Pacita Taqueria</h1>
          <p className="hero-subtitle">Tacos, promociones y sabor de fin de semana</p>
          <div className="hero-buttons">
            <a className="btn btn-primary" href={whatsapp} target="_blank" rel="noreferrer">Pedir por WhatsApp</a>
            <a className="btn btn-secondary" href="#promociones">Ver promociones</a>
          </div>
        </div>
        <div className="hero-card" aria-label="Beneficio destacado">
          <strong>Gratis</strong>
          <span>Servicio a domicilio a 1 km a la redonda</span>
        </div>
      </header>

      <main>
        <section className="section tacos-section" id="tacos">
          <p className="section-label">Tacos principales</p>
          <h2>Los favoritos de la taquería</h2>
          <div className="product-grid">
            {tacos.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="section promos-section" id="promociones">
          <div className="ribbon-title">Promociones del mes</div>
          <div className="product-grid">
            {promos.map((item) => (
              <ProductCard key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="section benefits-section">
          <p className="section-label">Beneficios</p>
          <h2>Más sabor, más ventajas</h2>
          <div className="benefit-grid">
            {benefits.map((benefit) => (
              <article className="benefit-card" key={benefit}>
                <span>★</span>
                <p>{benefit}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section social-section">
          <p className="section-label">Redes sociales</p>
          <h2>Síguenos y pregunta por promos</h2>
          <div className="social-buttons">
            <a className="btn social instagram" href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
            <a className="btn social facebook" href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          </div>
        </section>

        <section className="location" id="ubicacion">
          <div className="location-info">
            <p className="section-label">Ubicación</p>
            <h2>Ven por tus tacos</h2>
            <p>{address}</p>
            <p><strong>Horario:</strong> Sábado y domingo, 8:00 AM - 3:00 PM</p>
            <a className="btn btn-primary" href={mapsUrl} target="_blank" rel="noreferrer">Abrir en Google Maps</a>
          </div>
          <iframe
            title="Mapa de Pacita Taqueria en Guadalajara"
            src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer>
        <h3>Pacita Taqueria</h3>
        <p><strong>Pedidos:</strong> {phoneDisplay}</p>
        <p><strong>Dirección:</strong> {address}</p>
        <p><strong>Horario:</strong> Sábado y domingo, 8:00 AM - 3:00 PM</p>
      </footer>

      <a className="whatsapp" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Pedir por WhatsApp">
        ☎
      </a>
    </div>
  );
}

function ProductCard({ image, name, price, description }) {
  return (
    <article className="product-card">
      <div className="image-wrap">
        <img src={image} alt={name} onError={(event) => event.currentTarget.remove()} />
        <span className="price-badge">{price}</span>
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
    </article>
  );
}
