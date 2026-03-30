import { Component, signal, OnInit } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-landing-layout',
  standalone: true,
  imports: [RouterOutlet, ],
  templateUrl: './landing-layout.html',
  styleUrl: './landing-layout.scss',
})
export class LandingLayout implements OnInit {

  protected readonly title = signal('frontend');

  motivationalQuote = '';

  private quotes = [
    '🚀 El código que escribes hoy, construye el futuro de mañana.',
    '💡 Cada bug resuelto te hace más fuerte.',
    '🔥 No pares hasta que tu código brille.',
    '⚡ La magia está en cada línea que escribes.',
    '🎯 Hoy es un gran día para crear algo increíble.',
    '💎 Tu próximo commit puede cambiar todo.',
    '🌟 Programa como si el mundo dependiera de ti.',
    '🧠 La persistencia vence al talento cuando el talento no persiste.',
    '🛠️ Construye, rompe, aprende, repite.',
    '✨ Cada error es una lección disfrazada.',
    '🏆 Los grandes desarrolladores no nacen, se compilan.',
    '🌊 Fluye con el código, no luches contra él.',
    '🎨 Programar es el arte de convertir ideas en realidad.',
    '⏳ No cuentes las horas, haz que las horas cuenten.',
    '🔑 La mejor versión de tu código aún no existe… hasta ahora.',
    '🧩 Cada función es una pieza del rompecabezas perfecto.',
    '💪 Si puedes pensarlo, puedes programarlo.',
    '🌍 Un desarrollador puede cambiar el mundo con una idea y un teclado.',
    '🎶 El código limpio es como buena música: fluye naturalmente.',
    '🔬 Debugging es ser detective en una novela que tú mismo escribiste.',
    '🏗️ Roma no se construyó en un día, pero seguro usaron Git.',
    '🧭 No necesitas ver toda la escalera, solo da el primer paso.',
    '💻 Tu IDE es tu espada, tu lógica es tu escudo.',
    '🌱 De pequeñas funciones nacen grandes proyectos.',
    '⭐ Hoy alguien va a escribir código genial. ¿Por qué no tú?',
    '🎮 La vida es como programar: si no funciona, prueba otra cosa.',
    '📈 Cada línea de código es un paso más hacia la maestría.',
    '🦾 No eres lento, estás siendo meticuloso. Eso es profesionalismo.',
    '🔮 El futuro pertenece a quienes codean hoy.',
    '☕ Un buen café + buen código = día perfecto.',
  ];

  ngOnInit() {
    this.motivationalQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];

    setInterval(() => {
      this.motivationalQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    }, 8000);
  }
}
