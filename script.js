// ============================================
// TU TIENDA - Tienda de Streaming Premium
// Toda la configuracion es facilmente editable
// ============================================

// ==========================================
// CONFIGURACION PRINCIPAL (EDITAR AQUI)
// ==========================================
const CONFIG = {
  // Nombre de la tienda
  storeName: 'Tu Tienda',

  // Numero de WhatsApp (con codigo de pais, sin +)
  whatsappNumber: '573001234567',

  // Mensaje base de WhatsApp
  whatsappMessage: 'Hola! Quiero realizar un pedido:',

  // Moneda
  currency: 'COP',
  currencySymbol: '$',

  // Admin: combinacion de teclas para abrir panel
  adminKeyCombo: 'ctrl+shift+a',

  // Admin: hash URL secreto
  adminHash: '#admin',

  // Cupones disponibles (codigo: porcentaje descuento)
  coupons: {
    'DESCUENTO10': 10,
    'PROMO20': 20,
    'BIENVENIDO': 15,
    'STREAMING50': 50
  },

  // Colores del tema (editables desde admin)
  theme: {
    primary: '#e50914',
    secondary: '#0071eb',
    accent: '#46d369'
  },

  // Slides del carrusel
  carouselSlides: [
    {
      title: '🔥 Ofertas de Temporada',
      description: 'Hasta 50% de descuento en todas las cuentas premium',
      cta: 'Ver Ofertas'
    },
    {
      title: '🎬 Netflix Premium',
      description: 'Pantallas Ultra HD desde $15.000/mes',
      cta: 'Comprar Ahora'
    },
    {
      title: '🎵 Spotify Premium',
      description: 'Musica sin limites, sin anuncios',
      cta: 'Obtener'
    },
    {
      title: '⚡ Entrega Inmediata',
      description: 'Recibe tus credenciales al instante por WhatsApp',
      cta: 'Contactar'
    }
  ],

  // Testimonios
  testimonials: [
    {
      name: 'Carlos M.',
      role: 'Cliente frecuente',
      text: 'Excelente servicio, recibi mis cuentas al instante. Totalmente recomendado.',
      stars: 5,
      avatar: 'CM'
    },
    {
      name: 'Maria L.',
      role: 'Cliente nueva',
      text: 'Precios increibles y atencion rapida por WhatsApp. Ya compre 3 cuentas.',
      stars: 5,
      avatar: 'ML'
    },
    {
      name: 'Andres R.',
      role: 'Cliente VIP',
      text: 'Llevo 6 meses comprando aqui, nunca he tenido problemas. 100% confiable.',
      stars: 5,
      avatar: 'AR'
    }
  ],

  // Preguntas frecuentes
  faq: [
    {
      question: 'Como recibo mi cuenta?',
      answer: 'Una vez realices tu pedido por WhatsApp y confirmes el pago, recibiras tus credenciales de acceso de forma inmediata en el mismo chat.'
    },
    {
      question: 'Las cuentas son seguras?',
      answer: 'Si, todas nuestras cuentas son 100% legales y seguras. Ofrecemos garantia de funcionamiento durante todo el periodo contratado.'
    },
    {
      question: 'Que metodos de pago aceptan?',
      answer: 'Aceptamos transferencias bancarias, Nequi, Daviplata, y pagos en efectivo a traves de puntos de pago autorizados.'
    },
    {
      question: 'Que pasa si mi cuenta deja de funcionar?',
      answer: 'Ofrecemos reemplazo inmediato sin costo adicional durante el periodo de tu suscripcion. Solo contactanos por WhatsApp.'
    },
    {
      question: 'Puedo compartir mi cuenta?',
      answer: 'Depende del plan que adquieras. Los planes familiares permiten multiples pantallas. Consulta las especificaciones de cada producto.'
    }
  ]
};

// ==========================================
// CATALOGO DE PRODUCTOS (EDITAR AQUI)
// ==========================================
const DEFAULT_PRODUCTS = [
  {
    id: 1,
    name: 'Netflix Premium',
    description: 'Disfruta de peliculas y series en Ultra HD. 4 pantallas simultaneas.',
    price: 25000,
    originalPrice: 45000,
    category: 'streaming',
    tags: ['Ultra HD', '4 Pantallas', 'Popular'],
    badge: 'popular',
    active: true,
    featured: true,
    logo: '<svg viewBox="0 0 111 30" xmlns="http://www.w3.org/2000/svg"><path d="M105.06 1.527C103.85.382 102.07 0 99.98 0H93.2c-2.09 0-3.87.382-5.08 1.527C86.88 2.67 86.5 4.45 86.5 6.54v16.92c0 2.09.38 3.87 1.62 5.01C89.33 29.62 91.11 30 93.2 30h6.78c2.09 0 3.87-.38 5.08-1.53 1.24-1.14 1.62-2.92 1.62-5.01V6.54c0-2.09-.38-3.87-1.62-5.013zM99.98 24.42H93.2V5.58h6.78v18.84z" fill="#E50914"/><path d="M21.24 0L15 19.62 8.76 0H0l10.62 30h8.76L30 0H21.24z" fill="#E50914"/><path d="M34.72 0v30h8.78V0h-8.78z" fill="#E50914"/><path d="M56.94 0H45.16v30h11.78c2.09 0 3.87-.38 5.08-1.53 1.24-1.14 1.62-2.92 1.62-5.01V6.54c0-2.09-.38-3.87-1.62-5.013C60.81.382 59.03 0 56.94 0zm-2.96 24.42h-0.04V5.58h.04c2.18 0 3.96 0 3.96 3.96v6.92c0 3.96-1.78 7.96-3.96 7.96z" fill="#E50914"/><path d="M74.58 12.66c-2.54-.84-3.96-1.54-3.96-3.58 0-2.04 1.16-3.5 3.96-3.5 2.8 0 4.18 1.46 4.18 3.5h7.18c0-5.58-4.36-9.08-11.36-9.08S63.22 3.58 63.22 9.08c0 5.38 3.86 7.56 8.78 9.2 3.38 1.14 5.18 1.86 5.18 3.86s-1.34 3.78-4.6 3.78c-3.26 0-4.88-1.78-4.88-3.78h-7.18c0 5.86 4.5 9.36 12.06 9.36s11.96-3.5 11.96-9.36c0-5.64-4.18-7.74-9.96-9.48z" fill="#E50914"/></svg>'
  },
  {
    id: 2,
    name: 'Prime Video',
    description: 'Peliculas, series y contenido original de Amazon. Incluye envios gratis.',
    price: 15000,
    originalPrice: 25000,
    category: 'streaming',
    tags: ['HD', 'Envios Gratis', 'Nuevo'],
    badge: 'new',
    active: true,
    featured: true,
    logo: '<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><path d="M50 22c-8 3.5-16.5 5.3-24.2 5.3-11.4 0-21.7-4.2-29.5-11.2-.6-.5-.1-1.3.7-.9C5.7 19.5 15.8 22 26.2 22c7.3 0 15.3-1.5 22.7-4.6 1.1-.5 2 .7 1.1 1.4v3.2z" fill="#FF9900"/><path d="M53 18.9c-.9-1.1-5.7-.5-7.9-.3-.7.1-.8-.5-.2-.9 3.9-2.7 10.2-1.9 10.9-1 .7.9-.2 7.4-3.8 10.5-.6.5-1.1.2-.9-.4.8-2.1 2.7-6.8 1.9-7.9z" fill="#FF9900"/><path d="M45.3 3.5V1.2c0-.3.3-.6.6-.6h10.4c.3 0 .6.3.6.6v2c0 .3-.3.8-.8 1.4l-5.4 7.7c2 0 4.1.2 5.9 1.3.4.2.5.6.5.9v2.5c0 .4-.4.8-.8.6-3.3-1.7-7.7-1.9-11.4.1-.4.2-.8-.2-.8-.6v-2.4c0-.4 0-1 .4-1.6l6.3-9h-5.5c-.3 0-.6-.3-.6-.6z" fill="white"/><path d="M16.4 17.9h-3.2c-.3 0-.5-.2-.6-.5V1.3c0-.3.3-.6.6-.6h3c.3 0 .5.2.6.5v2.1C17.6 1.5 19.4.4 21.8.4c2.5 0 4 1.1 5.1 3 .9-1.9 3-3 5.5-3 1.7 0 3.5.7 4.6 2.2 1.3 1.7 1 4.2 1 6.3v8.4c0 .3-.3.6-.6.6h-3.2c-.3 0-.5-.2-.6-.5V7.5c0-.9.1-3-.1-3.8-.4-1.3-1.4-1.7-2.7-1.7-1.1 0-2.3.7-2.8 1.9-.5 1.2-.4 3.1-.4 4.1v9.4c0 .3-.3.6-.6.6H24c-.3 0-.5-.2-.6-.5V7.5c0-2.3.4-5.7-2.8-5.7-3.3 0-3.2 3.3-3.2 5.7v9.9c0 .3-.3.6-.6.6z" fill="white"/></svg>'
  },
  {
    id: 3,
    name: 'Disney+',
    description: 'Todo el contenido de Disney, Pixar, Marvel, Star Wars y National Geographic.',
    price: 18000,
    originalPrice: 30000,
    category: 'streaming',
    tags: ['4K', 'Familiar', 'Marvel'],
    badge: '',
    active: true,
    featured: true,
    logo: '<svg viewBox="0 0 100 40" xmlns="http://www.w3.org/2000/svg"><path d="M25 5c-3 0-5.5 1-7.5 3C15.5 10 14 13 14 16.5s1.5 6.5 3.5 8.5c2 2 5 3 8 3 2 0 4-.5 6-1.5l2 2c-2.5 1.5-5.5 2.5-8.5 2.5-4.5 0-8.5-1.5-11.5-4.5S9 20.5 9 16.5s1.5-8 4.5-11S19 1 23.5 1c3 0 6 .8 8.5 2.5L30 5.5C28 4.5 26.5 5 25 5z" fill="#113CCF"/><path d="M40 1h5v29h-5V1z" fill="#113CCF"/><path d="M75 15c0 4-1.5 7.5-4 10.5S65 30 61 30c-2 0-3.5-.5-5-1.5V40h-5V11h5v1.5c1.5-1 3-1.5 5-1.5 4 0 7.5 1.5 10 4.5.5.5 2 3 4 0z" fill="#113CCF"/><circle cx="88" cy="8" r="4" fill="#113CCF"/><path d="M84 14h8v16h-8V14z" fill="#113CCF"/><path d="M50 5c-2 0-3.5 1.5-3.5 3.5S48 12 50 12s3.5-1.5 3.5-3.5S52 5 50 5zm-2.5 9v16h5V14h-5z" fill="#113CCF"/></svg>'
  },
  {
    id: 4,
    name: 'HBO Max',
    description: 'Series exclusivas, peliculas de Warner Bros y contenido original premium.',
    price: 20000,
    originalPrice: 35000,
    category: 'streaming',
    tags: ['4K', 'Exclusivo', 'HBO'],
    badge: '',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 30" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="30" rx="4" fill="#5822b4"/><text x="50" y="20" text-anchor="middle" fill="white" font-family="Arial" font-weight="bold" font-size="14">MAX</text></svg>'
  },
  {
    id: 5,
    name: 'Spotify Premium',
    description: 'Musica sin limites, sin anuncios, descarga offline. Audio de alta calidad.',
    price: 12000,
    originalPrice: 20000,
    category: 'musica',
    tags: ['Sin Anuncios', 'Offline', 'HiFi'],
    badge: 'popular',
    active: true,
    featured: true,
    logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#1DB954"/><path d="M70 40c-12-7-30-8-44-4-2 .5-3-1-2.5-3 .5-2 2-3 4-3.5 16-4 35-3 49 5 2 1 2 3 1 5-1 1.5-3 2-4.5 1zM68 52c-10-6-26-8-38-4-2 .5-3.5-.5-4-2.5-.5-2 .5-3.5 2.5-4 14-4 32-3 44 5 1.5 1 2 3 1 4.5-1 1.5-3 2-4.5 1zM66 64c-9-5-20-6-33-4-1.5.5-3-.5-3.5-2-.5-1.5.5-3 2-3.5 14-3 27-2 38 4 1.5 1 2 2.5 1 4-1 1.5-2.5 2-4.5 1.5z" fill="white"/></svg>'
  },
  {
    id: 6,
    name: 'YouTube Premium',
    description: 'Videos sin anuncios, reproduccion en segundo plano y YouTube Music incluido.',
    price: 14000,
    originalPrice: 22000,
    category: 'streaming',
    tags: ['Sin Anuncios', 'Music', 'Background'],
    badge: '',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 70" xmlns="http://www.w3.org/2000/svg"><rect width="100" height="70" rx="15" fill="#FF0000"/><polygon points="40,15 40,55 72,35" fill="white"/></svg>'
  },
  {
    id: 7,
    name: 'Crunchyroll Premium',
    description: 'El mejor anime sin anuncios. Simulcasts, manga y contenido exclusivo.',
    price: 10000,
    originalPrice: 18000,
    category: 'streaming',
    tags: ['Anime', 'Sin Anuncios', 'Simulcast'],
    badge: 'new',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="48" fill="#F47521"/><circle cx="50" cy="50" r="25" fill="white"/><circle cx="55" cy="45" r="8" fill="#F47521"/></svg>'
  },
  {
    id: 8,
    name: 'Paramount+',
    description: 'Peliculas, series originales, deportes en vivo y noticias.',
    price: 13000,
    originalPrice: 22000,
    category: 'streaming',
    tags: ['Deportes', 'Noticias', 'Series'],
    badge: '',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><polygon points="50,5 20,90 35,90 50,40 65,90 80,90" fill="#0064FF"/><circle cx="50" cy="20" r="6" fill="#0064FF"/></svg>'
  },
  {
    id: 9,
    name: 'Apple TV+',
    description: 'Contenido original exclusivo de Apple. Series y peliculas premiadas.',
    price: 16000,
    originalPrice: 28000,
    category: 'streaming',
    tags: ['Exclusivo', '4K', 'Original'],
    badge: '',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path d="M50 10c-3-4-8-6-13-6 1 4 2 7 5 10 3 3 7 5 12 5-1-4-2-7-4-9z" fill="#555"/><path d="M62 22c-4-2-8-2-12 0-4 2-7 2-11 0-8-4-16 3-16 15 0 10 5 25 12 30 3 2 5 2 7 0l3-2c2-1 4-1 6 0l3 2c2 2 4 2 7 0 7-5 12-20 12-30 0-8-5-12-11-15z" fill="#555"/></svg>'
  },
  {
    id: 10,
    name: 'IPTV Premium',
    description: 'Mas de 5000 canales en vivo, peliculas y series. Compatible con todos los dispositivos.',
    price: 30000,
    originalPrice: 50000,
    category: 'iptv',
    tags: ['5000+ Canales', 'En Vivo', 'VOD'],
    badge: 'popular',
    active: true,
    featured: true,
    logo: '<svg viewBox="0 0 100 80" xmlns="http://www.w3.org/2000/svg"><rect x="10" y="5" width="80" height="55" rx="5" fill="none" stroke="#00BFFF" stroke-width="4"/><rect x="18" y="12" width="64" height="41" fill="#00BFFF" opacity="0.2"/><polygon points="42,22 42,44 62,33" fill="#00BFFF"/><rect x="30" y="65" width="40" height="4" rx="2" fill="#00BFFF"/><rect x="42" y="60" width="16" height="8" fill="#00BFFF"/></svg>'
  },
  {
    id: 11,
    name: 'Otro Servicio',
    description: 'Consulta por cualquier otro servicio de streaming o cuenta digital que necesites.',
    price: 10000,
    originalPrice: 15000,
    category: 'otros',
    tags: ['Personalizado', 'Consultar'],
    badge: '',
    active: true,
    featured: false,
    logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="none" stroke="#888" stroke-width="4"/><text x="50" y="58" text-anchor="middle" fill="#888" font-family="Arial" font-weight="bold" font-size="30">+</text></svg>'
  }
];

// ==========================================
// CLASE PRINCIPAL DE LA TIENDA
// ==========================================

// Funcion auxiliar para escapar texto y prevenir XSS
function escapeHTML(str) {
  if (typeof str !== 'string') return str;
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

class StreamingStore {
  constructor() {
    // Cargar productos desde localStorage o usar los predeterminados
    this.products = this.loadProducts();
    this.cart = this.loadCart();
    this.favorites = this.loadFavorites();
    this.settings = this.loadSettings();
    this.appliedCoupon = this.loadCoupon();
    this.currentCarouselSlide = 0;
    this.currentFilter = 'all';
    this.searchQuery = '';

    // Inicializar
    this.init();
  }

  // --- Inicializacion ---
  init() {
    this.renderProducts();
    this.renderFeatured();
    this.renderCarousel();
    this.renderFAQ();
    this.renderTestimonials();
    this.updateCartUI();
    this.setupEventListeners();
    this.setupIntersectionObserver();
    this.setupAdminPanel();
    this.checkAdminAccess();
    this.registerServiceWorker();
    this.applyTheme();
    this.startCarouselAuto();
  }

  // --- LocalStorage ---
  loadProducts() {
    const saved = localStorage.getItem('tutienda_products');
    return saved ? JSON.parse(saved) : [...DEFAULT_PRODUCTS];
  }

  saveProducts() {
    localStorage.setItem('tutienda_products', JSON.stringify(this.products));
  }

  loadCart() {
    const saved = localStorage.getItem('tutienda_cart');
    return saved ? JSON.parse(saved) : [];
  }

  saveCart() {
    localStorage.setItem('tutienda_cart', JSON.stringify(this.cart));
    localStorage.setItem('tutienda_coupon', this.appliedCoupon || '');
  }

  loadFavorites() {
    const saved = localStorage.getItem('tutienda_favorites');
    return saved ? JSON.parse(saved) : [];
  }

  saveFavorites() {
    localStorage.setItem('tutienda_favorites', JSON.stringify(this.favorites));
  }

  loadSettings() {
    const saved = localStorage.getItem('tutienda_settings');
    return saved ? JSON.parse(saved) : {
      whatsappNumber: CONFIG.whatsappNumber,
      storeName: CONFIG.storeName,
      theme: CONFIG.theme
    };
  }

  loadCoupon() {
    const saved = localStorage.getItem('tutienda_coupon');
    return saved && CONFIG.coupons[saved] ? saved : null;
  }

  saveSettings() {
    localStorage.setItem('tutienda_settings', JSON.stringify(this.settings));
  }

  // --- Renderizar Productos ---
  renderProducts(filter = 'all', search = '') {
    const grid = document.getElementById('products-grid');
    if (!grid) return;

    let filtered = this.products.filter(p => p.active);

    if (filter !== 'all') {
      filtered = filtered.filter(p => p.category === filter);
    }

    if (search) {
      const q = search.toLowerCase();
      filtered = filtered.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 3rem; color: var(--text-muted);">
          <p style="font-size: 3rem; margin-bottom: 1rem;">🔍</p>
          <p>No se encontraron productos</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(product => this.createProductCard(product)).join('');
  }

  createProductCard(product) {
    const isFav = this.favorites.includes(product.id);
    const discount = product.originalPrice > product.price
      ? Math.round((1 - product.price / product.originalPrice) * 100)
      : 0;

    let badgeHTML = '';
    if (product.badge === 'popular') {
      badgeHTML = '<span class="product-badge popular">Popular</span>';
    } else if (product.badge === 'new') {
      badgeHTML = '<span class="product-badge new">Nuevo</span>';
    } else if (discount > 0) {
      badgeHTML = `<span class="product-badge">-${discount}%</span>`;
    }

    return `
      <article class="product-card animate-in" data-id="${product.id}">
        <div class="product-card-image">
          ${badgeHTML}
          <button class="product-favorite ${isFav ? 'active' : ''}" onclick="store.toggleFavorite(${product.id})" aria-label="Agregar a favoritos">
            ${isFav ? '❤️' : '🤍'}
          </button>
          ${product.logo}
        </div>
        <div class="product-card-body">
          <h3 class="product-card-name">${escapeHTML(product.name)}</h3>
          <p class="product-card-desc">${escapeHTML(product.description)}</p>
          <div class="product-card-tags">
            ${product.tags.map(t => `<span class="product-tag">${escapeHTML(t)}</span>`).join('')}
          </div>
        </div>
        <div class="product-card-footer">
          <div class="product-price">
            <span class="product-price-current">${this.formatPrice(product.price)}</span>
            ${product.originalPrice > product.price ? `<span class="product-price-original">${this.formatPrice(product.originalPrice)}</span>` : ''}
          </div>
          <button class="btn btn-primary" onclick="store.addToCart(${product.id})">
            🛒 Agregar
          </button>
        </div>
      </article>
    `;
  }

  renderFeatured() {
    const grid = document.getElementById('featured-grid');
    if (!grid) return;

    const featured = this.products.filter(p => p.active && p.featured);
    grid.innerHTML = featured.map(product => this.createProductCard(product)).join('');
  }

  // --- Carrusel ---
  renderCarousel() {
    const track = document.getElementById('carousel-track');
    const dots = document.getElementById('carousel-dots');
    if (!track || !dots) return;

    track.innerHTML = CONFIG.carouselSlides.map(slide => `
      <div class="carousel-slide">
        <h3>${slide.title}</h3>
        <p>${slide.description}</p>
        <button class="btn btn-primary" onclick="document.getElementById('catalog').scrollIntoView({behavior:'smooth'})">${slide.cta}</button>
      </div>
    `).join('');

    dots.innerHTML = CONFIG.carouselSlides.map((_, i) => `
      <button class="carousel-dot ${i === 0 ? 'active' : ''}" onclick="store.goToSlide(${i})" aria-label="Slide ${i + 1}"></button>
    `).join('');
  }

  goToSlide(index) {
    const track = document.getElementById('carousel-track');
    const dots = document.querySelectorAll('.carousel-dot');
    if (!track) return;

    this.currentCarouselSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;

    dots.forEach((dot, i) => {
      dot.classList.toggle('active', i === index);
    });
  }

  nextSlide() {
    const total = CONFIG.carouselSlides.length;
    this.goToSlide((this.currentCarouselSlide + 1) % total);
  }

  prevSlide() {
    const total = CONFIG.carouselSlides.length;
    this.goToSlide((this.currentCarouselSlide - 1 + total) % total);
  }

  startCarouselAuto() {
    if (this.carouselInterval) {
      clearInterval(this.carouselInterval);
    }
    this.carouselInterval = setInterval(() => this.nextSlide(), 5000);
  }

  // --- FAQ ---
  renderFAQ() {
    const list = document.getElementById('faq-list');
    if (!list) return;

    list.innerHTML = CONFIG.faq.map((item, i) => `
      <div class="faq-item" data-index="${i}">
        <button class="faq-question" onclick="store.toggleFAQ(${i})">
          <span>${item.question}</span>
          <span class="faq-icon">▼</span>
        </button>
        <div class="faq-answer">
          <p>${item.answer}</p>
        </div>
      </div>
    `).join('');
  }

  toggleFAQ(index) {
    const items = document.querySelectorAll('.faq-item');
    items.forEach((item, i) => {
      if (i === index) {
        item.classList.toggle('active');
      } else {
        item.classList.remove('active');
      }
    });
  }

  // --- Testimonios ---
  renderTestimonials() {
    const grid = document.getElementById('testimonials-grid');
    if (!grid) return;

    grid.innerHTML = CONFIG.testimonials.map(t => `
      <div class="testimonial-card">
        <div class="testimonial-stars">${'⭐'.repeat(t.stars)}</div>
        <p class="testimonial-text">"${t.text}"</p>
        <div class="testimonial-author">
          <div class="testimonial-avatar">${t.avatar}</div>
          <div>
            <div class="testimonial-name">${t.name}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
        </div>
      </div>
    `).join('');
  }

  // --- Carrito ---
  addToCart(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const existing = this.cart.find(item => item.id === productId);
    if (existing) {
      existing.quantity++;
    } else {
      this.cart.push({ id: productId, quantity: 1 });
    }

    this.saveCart();
    this.updateCartUI();
    this.showNotification(`${product.name} agregado al carrito`, 'success');
  }

  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveCart();
    this.updateCartUI();
  }

  updateQuantity(productId, delta) {
    const item = this.cart.find(i => i.id === productId);
    if (!item) return;

    item.quantity += delta;
    if (item.quantity <= 0) {
      this.removeFromCart(productId);
      return;
    }

    this.saveCart();
    this.updateCartUI();
  }

  clearCart() {
    this.cart = [];
    this.appliedCoupon = null;
    this.saveCart();
    this.updateCartUI();
    this.showNotification('Carrito vaciado', 'info');
  }

  getCartTotal() {
    let total = 0;
    this.cart.forEach(item => {
      const product = this.products.find(p => p.id === item.id);
      if (product) {
        total += product.price * item.quantity;
      }
    });
    return total;
  }

  getCartDiscount() {
    if (!this.appliedCoupon) return 0;
    const discount = CONFIG.coupons[this.appliedCoupon] || 0;
    return Math.round(this.getCartTotal() * discount / 100);
  }

  updateCartUI() {
    // Contador del header
    const countEl = document.getElementById('cart-count');
    const totalItems = this.cart.reduce((sum, item) => sum + item.quantity, 0);
    if (countEl) {
      countEl.textContent = totalItems;
      countEl.style.display = totalItems > 0 ? 'flex' : 'none';
    }

    // Items del carrito
    const cartItems = document.getElementById('cart-items');
    if (!cartItems) return;

    if (this.cart.length === 0) {
      cartItems.innerHTML = `
        <div class="cart-empty">
          <span>🛒</span>
          <p>Tu carrito esta vacio</p>
        </div>
      `;
    } else {
      cartItems.innerHTML = this.cart.map(item => {
        const product = this.products.find(p => p.id === item.id);
        if (!product) return '';
        return `
          <div class="cart-item">
            <div class="cart-item-image">${product.logo}</div>
            <div class="cart-item-info">
              <div class="cart-item-name">${escapeHTML(product.name)}</div>
              <div class="cart-item-price">${this.formatPrice(product.price)}</div>
              <div class="cart-item-controls">
                <button onclick="store.updateQuantity(${product.id}, -1)">-</button>
                <span class="cart-item-qty">${item.quantity}</span>
                <button onclick="store.updateQuantity(${product.id}, 1)">+</button>
              </div>
            </div>
            <button class="cart-item-remove" onclick="store.removeFromCart(${product.id})">✕</button>
          </div>
        `;
      }).join('');
    }

    // Totales
    const subtotal = this.getCartTotal();
    const discount = this.getCartDiscount();
    const total = subtotal - discount;

    const subtotalEl = document.getElementById('cart-subtotal');
    const discountEl = document.getElementById('cart-discount');
    const totalEl = document.getElementById('cart-total');

    if (subtotalEl) subtotalEl.textContent = this.formatPrice(subtotal);
    if (discountEl) {
      discountEl.textContent = discount > 0 ? `-${this.formatPrice(discount)}` : this.formatPrice(0);
    }
    if (totalEl) totalEl.textContent = this.formatPrice(total);
  }

  toggleCart() {
    const panel = document.getElementById('cart-panel');
    const overlay = document.getElementById('cart-overlay');
    if (panel && overlay) {
      panel.classList.toggle('active');
      overlay.classList.toggle('active');
      document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
    }
  }

  // --- Cupones ---
  applyCoupon(code) {
    const upperCode = code.toUpperCase().trim();
    if (CONFIG.coupons[upperCode]) {
      this.appliedCoupon = upperCode;
      this.saveCart();
      this.updateCartUI();
      this.showNotification(`Cupon "${upperCode}" aplicado: ${CONFIG.coupons[upperCode]}% descuento`, 'success');
    } else {
      this.showNotification('Cupon no valido', 'error');
    }
  }

  // --- Favoritos ---
  toggleFavorite(productId) {
    const index = this.favorites.indexOf(productId);
    if (index > -1) {
      this.favorites.splice(index, 1);
      this.showNotification('Eliminado de favoritos', 'info');
    } else {
      this.favorites.push(productId);
      this.showNotification('Agregado a favoritos', 'success');
    }
    this.saveFavorites();
    this.renderProducts(this.currentFilter, this.searchQuery);
    this.renderFeatured();
  }

  // --- WhatsApp Checkout ---
  openCheckout() {
    if (this.cart.length === 0) {
      this.showNotification('Tu carrito esta vacio', 'error');
      return;
    }
    const modal = document.getElementById('checkout-modal');
    if (modal) {
      modal.classList.add('active');
      this.toggleCart(); // Cerrar carrito
    }
  }

  closeCheckout() {
    const modal = document.getElementById('checkout-modal');
    if (modal) modal.classList.remove('active');
  }

  sendWhatsApp() {
    const nameInput = document.getElementById('checkout-name');
    const phoneInput = document.getElementById('checkout-phone');
    const emailInput = document.getElementById('checkout-email');

    const name = nameInput ? nameInput.value.trim() : '';
    const phone = phoneInput ? phoneInput.value.trim() : '';
    const email = emailInput ? emailInput.value.trim() : '';

    if (!name || !phone) {
      this.showNotification('Por favor completa nombre y telefono', 'error');
      return;
    }

    // Construir mensaje
    let message = `${CONFIG.whatsappMessage}\n\n`;
    message += `👤 *Cliente:* ${name}\n`;
    message += `📱 *Telefono:* ${phone}\n`;
    if (email) message += `📧 *Correo:* ${email}\n`;
    message += `\n📦 *Productos:*\n`;
    message += `─────────────────\n`;

    this.cart.forEach(item => {
      const product = this.products.find(p => p.id === item.id);
      if (product) {
        message += `• ${product.name}\n`;
        message += `  Cantidad: ${item.quantity}\n`;
        message += `  Precio: ${this.formatPrice(product.price)} c/u\n`;
        message += `  Subtotal: ${this.formatPrice(product.price * item.quantity)}\n\n`;
      }
    });

    message += `─────────────────\n`;
    const subtotal = this.getCartTotal();
    const discount = this.getCartDiscount();
    const total = subtotal - discount;

    message += `💰 *Subtotal:* ${this.formatPrice(subtotal)}\n`;
    if (discount > 0) {
      message += `🎫 *Descuento (${this.appliedCoupon}):* -${this.formatPrice(discount)}\n`;
    }
    message += `💵 *TOTAL:* ${this.formatPrice(total)}\n`;

    // Usar numero de settings (editable desde admin)
    const whatsappNum = this.settings.whatsappNumber || CONFIG.whatsappNumber;
    const url = `https://wa.me/${whatsappNum}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');

    this.closeCheckout();
    this.clearCart();
    this.showNotification('Pedido enviado a WhatsApp', 'success');
  }

  // --- Busqueda ---
  search(query) {
    this.searchQuery = query;
    this.renderProducts(this.currentFilter, query);
  }

  // --- Filtro por Categoria ---
  filterCategory(category) {
    this.currentFilter = category;

    // Actualizar botones activos
    document.querySelectorAll('.category-filter').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.category === category);
    });

    this.renderProducts(category, this.searchQuery);
  }

  // --- Tema Oscuro/Claro ---
  toggleTheme() {
    const current = document.documentElement.getAttribute('data-theme');
    const newTheme = current === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('tutienda_theme', newTheme);

    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = newTheme === 'light' ? '🌙' : '☀️';
  }

  applyTheme() {
    const saved = localStorage.getItem('tutienda_theme') || 'dark';
    document.documentElement.setAttribute('data-theme', saved);
    const icon = document.getElementById('theme-icon');
    if (icon) icon.textContent = saved === 'light' ? '🌙' : '☀️';

    // Aplicar nombre de tienda guardado
    if (this.settings.storeName && this.settings.storeName !== CONFIG.storeName) {
      document.querySelectorAll('.logo span').forEach(el => {
        el.textContent = this.settings.storeName;
      });
      document.title = `${this.settings.storeName} - Streaming Premium`;
    }

    // Aplicar color primario guardado
    if (this.settings.theme && this.settings.theme.primary) {
      document.documentElement.style.setProperty('--primary', this.settings.theme.primary);
    }
  }

  // --- Notificaciones ---
  showNotification(message, type = 'info') {
    const container = document.getElementById('toast-container');
    if (!container) return;

    const icons = { success: '✅', error: '❌', info: 'ℹ️' };
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    toast.innerHTML = `
      <span class="toast-icon">${icons[type] || icons.info}</span>
      <span class="toast-message">${message}</span>
    `;

    container.appendChild(toast);

    // Animar entrada
    requestAnimationFrame(() => toast.classList.add('show'));

    // Remover despues de 3 segundos
    setTimeout(() => {
      toast.classList.remove('show');
      setTimeout(() => toast.remove(), 300);
    }, 3000);
  }

  // --- Intersection Observer (Lazy Loading / Animaciones) ---
  setupIntersectionObserver() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    // Observar secciones
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });
  }

  // --- Event Listeners ---
  setupEventListeners() {
    // Scroll - Header y Back to Top
    window.addEventListener('scroll', () => {
      const header = document.querySelector('.header');
      const backToTop = document.querySelector('.back-to-top');

      if (header) {
        header.classList.toggle('scrolled', window.scrollY > 50);
      }
      if (backToTop) {
        backToTop.classList.toggle('visible', window.scrollY > 300);
      }
    });

    // Back to top
    const backToTopBtn = document.querySelector('.back-to-top');
    if (backToTopBtn) {
      backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Hamburger menu
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    if (hamburger && navMenu) {
      hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
      });

      // Cerrar menu al hacer clic en un enlace
      navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
          hamburger.classList.remove('active');
          navMenu.classList.remove('active');
        });
      });
    }

    // Busqueda
    const searchToggle = document.getElementById('search-toggle');
    const searchBox = document.querySelector('.search-box');
    const searchInput = document.getElementById('search-input');

    if (searchToggle && searchBox && searchInput) {
      searchToggle.addEventListener('click', () => {
        searchBox.classList.toggle('active');
        if (searchBox.classList.contains('active')) {
          searchInput.focus();
        }
      });

      searchInput.addEventListener('input', (e) => {
        this.search(e.target.value);
      });
    }

    // Cart overlay
    const cartOverlay = document.getElementById('cart-overlay');
    if (cartOverlay) {
      cartOverlay.addEventListener('click', () => this.toggleCart());
    }

    // Admin key combo (Ctrl+Shift+A)
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'A') {
        e.preventDefault();
        this.toggleAdminPanel();
      }
    });

    // Check URL hash
    window.addEventListener('hashchange', () => this.checkAdminAccess());

    // Coupon
    const couponBtn = document.getElementById('apply-coupon');
    const couponInput = document.getElementById('coupon-input');
    if (couponBtn && couponInput) {
      couponBtn.addEventListener('click', () => {
        this.applyCoupon(couponInput.value);
      });
    }
  }

  // --- Admin Panel ---
  checkAdminAccess() {
    if (window.location.hash === CONFIG.adminHash) {
      this.showAdminPanel();
    }
  }

  toggleAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (panel) {
      panel.classList.toggle('active');
      document.body.style.overflow = panel.classList.contains('active') ? 'hidden' : '';
    }
  }

  showAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (panel) {
      panel.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  hideAdminPanel() {
    const panel = document.getElementById('admin-panel');
    if (panel) {
      panel.classList.remove('active');
      document.body.style.overflow = '';
      window.location.hash = '';
    }
  }

  setupAdminPanel() {
    this.renderAdminProducts();
    this.loadAdminSettings();
  }

  switchAdminTab(tabName) {
    document.querySelectorAll('.admin-tab').forEach(tab => {
      tab.classList.toggle('active', tab.dataset.tab === tabName);
    });
    document.querySelectorAll('.admin-section').forEach(section => {
      section.classList.toggle('active', section.id === `admin-${tabName}`);
    });
  }

  renderAdminProducts() {
    const list = document.getElementById('admin-product-list');
    if (!list) return;

    list.innerHTML = this.products.map(p => `
      <div class="admin-product-item" data-id="${p.id}">
        <span class="product-name">${escapeHTML(p.name)}</span>
        <span class="product-price">${this.formatPrice(p.price)}</span>
        <span style="color: ${p.active ? 'var(--accent)' : 'var(--text-muted)'}; font-size: 0.75rem;">${p.active ? 'Activo' : 'Inactivo'}</span>
        <div class="admin-product-actions">
          <button class="admin-btn-edit" onclick="store.editProduct(${p.id})">Editar</button>
          <button class="admin-btn-toggle" onclick="store.toggleProductStatus(${p.id})">${p.active ? 'Desactivar' : 'Activar'}</button>
          <button class="admin-btn-delete" onclick="store.deleteProduct(${p.id})">Eliminar</button>
        </div>
      </div>
    `).join('');
  }

  loadAdminSettings() {
    const whatsappInput = document.getElementById('admin-whatsapp');
    const storeNameInput = document.getElementById('admin-store-name');
    const primaryColorInput = document.getElementById('admin-primary-color');

    if (whatsappInput) whatsappInput.value = this.settings.whatsappNumber;
    if (storeNameInput) storeNameInput.value = this.settings.storeName;
    if (primaryColorInput) primaryColorInput.value = this.settings.theme.primary;
  }

  saveAdminSettings() {
    const whatsappInput = document.getElementById('admin-whatsapp');
    const storeNameInput = document.getElementById('admin-store-name');
    const primaryColorInput = document.getElementById('admin-primary-color');

    if (whatsappInput) this.settings.whatsappNumber = whatsappInput.value.trim();
    if (storeNameInput) this.settings.storeName = storeNameInput.value.trim();
    if (primaryColorInput) {
      this.settings.theme.primary = primaryColorInput.value;
      document.documentElement.style.setProperty('--primary', primaryColorInput.value);
    }

    this.saveSettings();

    // Actualizar nombre de la tienda en todo el sitio
    const storeName = this.settings.storeName;
    document.querySelectorAll('.logo span').forEach(el => {
      el.textContent = storeName;
    });
    document.title = `${storeName} - Streaming Premium`;

    // Actualizar meta description si existe
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', `${storeName} - Tienda premium de cuentas y suscripciones de streaming`);

    this.showNotification('Configuracion guardada', 'success');
  }

  addProduct() {
    const name = document.getElementById('admin-new-name');
    const desc = document.getElementById('admin-new-desc');
    const price = document.getElementById('admin-new-price');
    const originalPrice = document.getElementById('admin-new-original-price');
    const category = document.getElementById('admin-new-category');
    const tags = document.getElementById('admin-new-tags');

    if (!name || !name.value.trim()) {
      this.showNotification('El nombre es obligatorio', 'error');
      return;
    }

    const newProduct = {
      id: Date.now(),
      name: name.value.trim(),
      description: desc ? desc.value.trim() : '',
      price: price ? parseInt(price.value) || 0 : 0,
      originalPrice: originalPrice ? parseInt(originalPrice.value) || 0 : 0,
      category: category ? category.value : 'otros',
      tags: tags ? tags.value.split(',').map(t => t.trim()).filter(Boolean) : [],
      badge: '',
      active: true,
      featured: false,
      logo: '<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><circle cx="50" cy="50" r="45" fill="none" stroke="#888" stroke-width="4"/><text x="50" y="58" text-anchor="middle" fill="#888" font-family="Arial" font-weight="bold" font-size="30">+</text></svg>'
    };

    this.products.push(newProduct);
    this.saveProducts();
    this.renderAdminProducts();
    this.renderProducts(this.currentFilter, this.searchQuery);
    this.renderFeatured();
    this.showNotification(`Producto "${newProduct.name}" agregado`, 'success');

    // Limpiar campos
    if (name) name.value = '';
    if (desc) desc.value = '';
    if (price) price.value = '';
    if (originalPrice) originalPrice.value = '';
    if (tags) tags.value = '';
  }

  editProduct(productId) {
    const product = this.products.find(p => p.id === productId);
    if (!product) return;

    const newName = prompt('Nombre:', product.name);
    if (newName === null) return;

    const newPrice = prompt('Precio:', product.price);
    if (newPrice === null) return;

    const newDesc = prompt('Descripcion:', product.description);
    if (newDesc === null) return;

    product.name = newName || product.name;
    product.price = parseInt(newPrice) || product.price;
    product.description = newDesc || product.description;

    this.saveProducts();
    this.renderAdminProducts();
    this.renderProducts(this.currentFilter, this.searchQuery);
    this.renderFeatured();
    this.updateCartUI();
    this.showNotification(`Producto "${product.name}" actualizado`, 'success');
  }

  deleteProduct(productId) {
    if (!confirm('Estas seguro de eliminar este producto?')) return;

    this.products = this.products.filter(p => p.id !== productId);
    this.cart = this.cart.filter(item => item.id !== productId);
    this.saveProducts();
    this.saveCart();
    this.renderAdminProducts();
    this.renderProducts(this.currentFilter, this.searchQuery);
    this.renderFeatured();
    this.updateCartUI();
    this.showNotification('Producto eliminado', 'info');
  }

  toggleProductStatus(productId) {
    const product = this.products.find(p => p.id === productId);
    if (product) {
      product.active = !product.active;
      this.saveProducts();
      this.renderAdminProducts();
      this.renderProducts(this.currentFilter, this.searchQuery);
      this.renderFeatured();
      this.showNotification(`${product.name}: ${product.active ? 'Activado' : 'Desactivado'}`, 'info');
    }
  }

  resetProducts() {
    if (!confirm('Esto restaurara todos los productos a los valores predeterminados. Continuar?')) return;
    this.products = [...DEFAULT_PRODUCTS];
    this.saveProducts();
    this.renderAdminProducts();
    this.renderProducts(this.currentFilter, this.searchQuery);
    this.renderFeatured();
    this.showNotification('Productos restaurados', 'success');
  }

  // --- Utilidades ---
  formatPrice(amount) {
    return `${CONFIG.currencySymbol}${amount.toLocaleString('es-CO')}`;
  }

  // --- PWA Service Worker ---
  registerServiceWorker() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('./service-worker.js')
        .then(() => console.log('[App] Service Worker registrado'))
        .catch(err => console.log('[App] Error SW:', err));
    }
  }
}

// ==========================================
// INICIALIZAR LA TIENDA
// ==========================================
let store;
document.addEventListener('DOMContentLoaded', () => {
  store = new StreamingStore();
});
