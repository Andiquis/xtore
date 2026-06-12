import { Component, signal, OnInit, OnDestroy, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.scss',
})
export class LandingLayout implements OnInit, OnDestroy {

  protected readonly title = signal('SAMINCHAY');

  isScrolled = false;
  menuOpen = false;
  cartCount = signal(0);
  showToast = signal(false);
  toastMessage = signal('');
  activeStep = signal('clean'); // Active step in the routine

  heroParticles = Array.from({ length: 25 });

  benefits = [
    {
      icon: 'fa-solid fa-leaf',
      title: 'Fórmulas 100% Puras',
      description: 'Cosméticos elaborados con extractos botánicos directos de la naturaleza, sin parabenos, sulfatos ni siliconas.'
    },
    {
      icon: 'fa-solid fa-heart-pulse',
      title: 'Libre de Crueldad',
      description: 'Compromiso ético inquebrantable. Ninguno de nuestros insumos o productos finales es testeado en animales.'
    },
    {
      icon: 'fa-solid fa-recycle',
      title: 'Embalaje Sostenible',
      description: 'Envases de vidrio violeta reutilizables y etiquetas biodegradables diseñadas para minimizar la huella plástica.'
    },
    {
      icon: 'fa-solid fa-flask-vial',
      title: 'Eficacia Comprobada',
      description: 'Formulaciones que combinan el conocimiento botánico tradicional con rigurosas pruebas dermatológicas.'
    },
    {
      icon: 'fa-solid fa-handshake-angle',
      title: 'Comercio Ético',
      description: 'Adquisición de ingredientes bajo acuerdos de comercio justo con pequeños agricultores andinos y amazónicos.'
    },
    {
      icon: 'fa-solid fa-wand-magic-sparkles',
      title: 'Nutrición Celular',
      description: 'Ricos en antioxidantes, vitaminas y ácidos grasos esenciales que devuelven la vitalidad natural a tu piel.'
    }
  ];

  categories = [
    { name: 'Cuidado Facial', icon: 'fa-solid fa-spa', desc: 'Sérums, cremas y elixires botánicos.', anchor: '#products-section' },
    { name: 'Corporal', icon: 'fa-solid fa-hand-holding-hand', desc: 'Mantecas nutritivas y aceites secos.', anchor: '#products-section' },
    { name: 'Aromaterapia', icon: 'fa-solid fa-wind', desc: 'Aceites esenciales 100% puros y destilados.', anchor: '#products-section' },
    { name: 'Mascarillas', icon: 'fa-solid fa-face-smile-wink', desc: 'Tratamientos de arcilla y exfoliantes.', anchor: '#products-section' }
  ];

  products = [
    {
      name: 'Elixir Facial de Rosa Mosqueta & Argán',
      category: 'Cuidado Facial',
      description: 'Sérum ultra-regenerador con aceite prensado en frío de rosa mosqueta andina, enriquecido con Coenzima Q10.',
      price: '94.90',
      image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=700&q=85',
      badge: 'Bestseller',
      rating: 5,
      reviews: 142
    },
    {
      name: 'Mascarilla Purificante de Arcilla Verde',
      category: 'Limpieza Profunda',
      description: 'Arcilla volcánica rica en minerales purificantes, mezclada con extracto de té verde orgánico y menta piperita.',
      price: '64.90',
      image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=700&q=85',
      badge: 'Nuevo',
      rating: 4.8,
      reviews: 86
    },
    {
      name: 'Bálsamo Regenerante de Aloe & Karité',
      category: 'Hidratación',
      description: 'Crema hidratante diaria de textura ligera formulada con aloe vera andino y manteca de karité cruda orgánica.',
      price: '79.90',
      image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=700&q=85',
      badge: 'Favorito',
      rating: 4.9,
      reviews: 110
    },
    {
      name: 'Aceite Esencial Puro de Lavanda Silvestre',
      category: 'Aromaterapia',
      description: 'Destilado al vapor artesanalmente. Ideal para relajar el sistema nervioso y tratar imperfecciones cutáneas.',
      price: '48.90',
      image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=700&q=85',
      badge: '20% OFF',
      rating: 5,
      reviews: 204
    }
  ];

  ingredients = [
    {
      name: 'Rosa Mosqueta Andina',
      scientific: 'Rosa rubiginosa',
      icon: 'fa-solid fa-spa',
      desc: 'Famosa por sus propiedades regeneradoras. Difumina cicatrices, reduce arrugas finas y devuelve la elasticidad natural.',
      color: '#e5a5a5'
    },
    {
      name: 'Arcilla Verde Francesa',
      scientific: 'Montmorillonite',
      icon: 'fa-solid fa-gem',
      desc: 'Extrae toxinas e impurezas de los poros. Regula el exceso de sebo y revitaliza la piel apagada aportando minerales.',
      color: '#a8c49a'
    },
    {
      name: 'Aloe Vera Nativo',
      scientific: 'Aloe barbadensis',
      icon: 'fa-solid fa-seedling',
      desc: 'El hidratante definitivo de la naturaleza. Calma, refresca y repara tejidos dañados de forma inmediata.',
      color: '#7c9a6e'
    },
    {
      name: 'Aceite de Jojoba',
      scientific: 'Simmondsia chinensis',
      icon: 'fa-solid fa-droplet',
      desc: 'Una cera líquida que imita el sebo natural de la piel. Hidrata sin obstruir poros y equilibra pieles mixtas.',
      color: '#dfc08a'
    }
  ];

  routineSteps = [
    {
      id: 'clean',
      num: '01',
      title: 'Limpieza Orgánica',
      icon: 'fa-solid fa-soap',
      subtitle: 'Purifica sin despojar',
      desc: 'Comienza eliminando impurezas con nuestra mascarilla de arcilla o agua micelar botánica. Mantiene intacto el manto lipídico natural de la piel.',
      tip: 'Usa agua tibia, nunca caliente, para evitar resecar las capas externas de la dermis.',
      product: 'Mascarilla Purificante de Arcilla Verde'
    },
    {
      id: 'hydrate',
      num: '02',
      title: 'Tonificación e Hidratación',
      icon: 'fa-solid fa-droplet',
      subtitle: 'Devuelve el equilibrio de pH',
      desc: 'Aplica el bálsamo regenerante de aloe vera dando suaves toques. Repone el agua perdida y prepara la piel para retener nutrientes.',
      tip: 'Aplica el bálsamo mientras la piel aún esté ligeramente húmeda para maximizar la absorción.',
      product: 'Bálsamo Regenerante de Aloe & Karité'
    },
    {
      id: 'nourish',
      num: '03',
      title: 'Nutrición Celular',
      icon: 'fa-solid fa-wand-magic-sparkles',
      subtitle: 'Protege y repara profundamente',
      desc: 'Finaliza con 3-4 gotas del elixir facial de Rosa Mosqueta. Sella la hidratación y aporta antioxidantes vitales durante todo el día o noche.',
      tip: 'Realiza un suave masaje ascendente para activar la microcirculación de tu rostro.',
      product: 'Elixir Facial de Rosa Mosqueta & Argán'
    }
  ];

  aboutFeatures = [
    'Fórmulas cruelty-free certificadas internacionalmente',
    'Ingredientes orgánicos procedentes de cultivo sostenible',
    'Envases de vidrio violeta que bloquean la luz dañina',
    'Comercio ético directo con comunidades locales',
    'Elaborado artesanalmente libre de fragancias sintéticas'
  ];

  testimonials = [
    {
      name: 'María Fernanda López',
      location: 'Lima, Perú',
      initials: 'MF',
      text: 'Mi piel nunca se había sentido tan sana y libre de imperfecciones. El Elixir de Rosa Mosqueta cambió mi rutina por completo.'
    },
    {
      name: 'Sebastián Del Carpio',
      location: 'Cusco, Perú',
      initials: 'SC',
      text: 'Increíble calidad. Compré el jabón botánico y la crema de Aloe Vera y los resultados son notorios desde la primera semana.'
    },
    {
      name: 'Carolina Quispe',
      location: 'Arequipa, Perú',
      initials: 'CQ',
      text: 'Tengo piel sensible y casi todo me causa irritación. Con SAMINCHAY encontré la calma y nutrición exacta que necesitaba.'
    }
  ];

  @HostListener('window:scroll')
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }

  ngOnInit() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        e.preventDefault();
        const href = (anchor as HTMLAnchorElement).getAttribute('href');
        if (href) {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    });
  }

  ngOnDestroy() {
    // Cleanup
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  closeMenu() {
    this.menuOpen = false;
  }

  addToCart(productName: string) {
    this.cartCount.update(c => c + 1);
    this.toastMessage.set(`¡${productName} agregado al carrito!`);
    this.showToast.set(true);
    setTimeout(() => {
      this.showToast.set(false);
    }, 3500);
  }

  setRoutineStep(stepId: string) {
    this.activeStep.set(stepId);
  }
}
