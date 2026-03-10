import { Star, MapPin, Phone, Clock, Instagram, Facebook, Linkedin, Leaf, Share2, Bookmark, Navigation, ArrowRight, CheckCircle2, StarHalf } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-stone-50 font-sans text-stone-800">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-emerald-700">
            <Leaf className="w-6 h-6" />
            <span className="font-bold text-xl tracking-tight">Natural Eco Clean</span>
          </div>
          <div className="hidden sm:flex items-center gap-4">
            <a href="#servicios" className="text-sm font-medium text-stone-600 hover:text-emerald-600">Servicios</a>
            <a href="#contacto" className="text-sm font-medium text-stone-600 hover:text-emerald-600">Contacto</a>
            <a href="tel:397-5930" className="bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-emerald-700 transition-colors">
              Llamar ahora
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative bg-emerald-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="https://picsum.photos/seed/ecocleaning/1920/1080" 
            alt="Limpieza ecológica" 
            className="w-full h-full object-cover opacity-30"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1 bg-emerald-800/50 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-emerald-100 mb-6 border border-emerald-700/50">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span>4.3 (6 opiniones)</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Limpieza profesional y ecoamigable
            </h1>
            <p className="text-lg sm:text-xl text-emerald-50 mb-8 leading-relaxed">
              Servicios de limpieza a distintos sectores y venta de productos ecológicos a través de nuestra página web en San Miguelito.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="tel:397-5930" className="bg-white text-emerald-900 px-6 py-3 rounded-full font-semibold hover:bg-stone-100 transition-colors flex items-center gap-2">
                <Phone className="w-5 h-5" />
                397-5930
              </a>
              <a href="#ubicacion" className="bg-emerald-800/50 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-emerald-700/50 transition-colors border border-emerald-700 flex items-center gap-2">
                <Navigation className="w-5 h-5" />
                Cómo llegar
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Left Column: Details */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* About */}
          <section>
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6 text-emerald-600" />
              De Natural Eco Clean
            </h2>
            <p className="text-stone-600 text-lg leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-stone-100 italic">
              "Servicios de limpieza ecoamigables a distintos sectores y venta de productos de limpieza a travez de nuestra página web."
            </p>
          </section>

          {/* Features */}
          <section id="servicios">
            <h2 className="text-2xl font-bold mb-6">¿Por qué elegirnos?</h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Productos 100% ecológicos',
                'Personal altamente capacitado',
                'Atención a distintos sectores',
                'Venta de productos online',
                'Servicio en San Miguelito',
                'Compromiso con el medio ambiente'
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3 bg-white p-4 rounded-xl shadow-sm border border-stone-100">
                  <CheckCircle2 className="w-6 h-6 text-emerald-500 shrink-0" />
                  <span className="font-medium text-stone-700">{feature}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Reviews Summary */}
          <section>
            <h2 className="text-2xl font-bold mb-6">Opiniones</h2>
            <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-stone-100 flex flex-col sm:flex-row items-center gap-8">
              <div className="text-center">
                <div className="text-6xl font-bold text-stone-900 mb-2">4.3</div>
                <div className="flex items-center justify-center gap-1 text-yellow-400 mb-2">
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <Star className="w-6 h-6 fill-current" />
                  <StarHalf className="w-6 h-6 fill-current" />
                </div>
                <div className="text-sm font-medium text-stone-500">6 opiniones</div>
              </div>
              <div className="flex-1 w-full space-y-3">
                {[
                  { stars: 5, fill: '50%' },
                  { stars: 4, fill: '33%' },
                  { stars: 3, fill: '0%' },
                  { stars: 2, fill: '0%' },
                  { stars: 1, fill: '0%' }
                ].map((rating) => (
                  <div key={rating.stars} className="flex items-center gap-3 text-sm">
                    <span className="w-3 font-medium text-stone-600">{rating.stars}</span>
                    <div className="flex-1 h-2.5 bg-stone-100 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-yellow-400 rounded-full" 
                        style={{ width: rating.fill }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <button className="text-emerald-600 font-medium hover:text-emerald-700 flex items-center gap-2">
                Escribir una opinión <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </section>

        </div>

        {/* Right Column: Info Card */}
        <div className="space-y-6" id="contacto">
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-stone-100 sticky top-24">
            <h3 className="text-lg font-bold mb-6">Información general</h3>
            
            <div className="space-y-6">
              <div className="flex gap-4">
                <MapPin className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-medium text-stone-900">Ubicado en: P.H. Plaza Brisas 507</div>
                  <div className="text-stone-600 text-sm mt-1 leading-relaxed">Brisas del Golf, Panamá, Provincia de Panamá</div>
                  <a href="#" className="text-emerald-600 text-sm font-medium mt-2 inline-flex items-center gap-1 hover:underline">
                    Cómo llegar <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-medium text-stone-900">Horario</div>
                  <div className="text-stone-600 text-sm mt-1">Cerrado · Abre a las 8 a.m. del mar</div>
                  <div className="text-stone-500 text-xs mt-2 bg-stone-50 inline-block px-2 py-1 rounded">
                    Promedio de permanencia: Entre 20 min y 3 h
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Phone className="w-6 h-6 text-emerald-600 shrink-0" />
                <div>
                  <div className="font-medium text-stone-900">Teléfono</div>
                  <a href="tel:397-5930" className="text-stone-600 text-sm mt-1 hover:text-emerald-600 block">397-5930</a>
                </div>
              </div>
            </div>

            <hr className="my-6 border-stone-100" />

            <div className="flex justify-around">
              <button className="flex flex-col items-center gap-2 text-stone-600 hover:text-emerald-600 transition-colors">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                  <Bookmark className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Guardar</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-stone-600 hover:text-emerald-600 transition-colors">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                  <Share2 className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Compartir</span>
              </button>
              <button className="flex flex-col items-center gap-2 text-stone-600 hover:text-emerald-600 transition-colors">
                <div className="w-12 h-12 rounded-full border border-stone-200 flex items-center justify-center hover:border-emerald-200 hover:bg-emerald-50 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-xs font-medium">Llamar</span>
              </button>
            </div>

            <hr className="my-6 border-stone-100" />

            <div className="space-y-3">
              <button className="w-full py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                Agregar la información que falta
              </button>
              <button className="w-full py-2.5 text-sm font-medium text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                Agregar sitio web
              </button>
              <button className="w-full py-2.5 text-sm font-medium text-stone-600 hover:text-emerald-600 transition-colors">
                Enviar al teléfono
              </button>
            </div>

            <hr className="my-6 border-stone-100" />

            <div>
              <h4 className="text-sm font-bold text-stone-900 mb-4">Perfiles sociales</h4>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                  <Facebook className="w-5 h-5" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 hover:bg-emerald-100 hover:text-emerald-600 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-stone-900 text-stone-400 py-12 text-center text-sm">
        <div className="max-w-5xl mx-auto px-4 flex flex-col items-center gap-4">
          <Leaf className="w-8 h-8 text-emerald-600" />
          <p>© {new Date().getFullYear()} Natural Eco Clean. Todos los derechos reservados.</p>
          <div className="flex flex-wrap justify-center gap-4 mt-2">
            <a href="#" className="hover:text-white transition-colors">Sugerir una edición</a>
            <span className="hidden sm:inline">·</span>
            <a href="#" className="hover:text-white transition-colors">¿Eres propietario de esta empresa?</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
