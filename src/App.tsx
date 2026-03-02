import React, { useState, ReactNode } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Phone, 
  MapPin, 
  Star, 
  ChevronDown, 
  Pizza, 
  UtensilsCrossed, 
  Sandwich, 
  Clock, 
  Truck,
  Instagram,
  Facebook
} from 'lucide-react';
import { MENU_DATA, REVIEWS, CONTACT_INFO, ALLERGENS } from './constants';

const COLORS = {
  red: '#C41E3A',
  yellow: '#FFD700',
  black: '#141414',
  white: '#FFFFFF',
  offWhite: '#F5F5F5'
};

const AllergenIcons = ({ allergenIds }: { allergenIds: string[] }) => {
  if (!allergenIds || allergenIds.length === 0) return null;
  return (
    <div className="flex gap-1 ml-2">
      {allergenIds.map(id => {
        const allergen = ALLERGENS.find(a => a.id === id);
        if (!allergen) return null;
        return (
          <span 
            key={id} 
            title={allergen.name} 
            className="w-5 h-5 flex items-center justify-center bg-gray-100 rounded-full text-[10px] border border-gray-200"
          >
            {allergen.icon}
          </span>
        );
      })}
    </div>
  );
};

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string | null>('pizzas');

  const toggleCategory = (category: string) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="min-h-screen bg-[#F5F5F5] font-sans text-[#141414]">
      {/* --- HEADER / HERO --- */}
      <header className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#141414] py-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=2000" 
            alt="Pizza background" 
            className="w-full h-full object-cover opacity-40"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#141414]"></div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <div className="mb-8 inline-block">
             <div className="relative">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-64 md:h-64 bg-white rounded-full flex items-center justify-center border-4 border-[#C41E3A] shadow-2xl mx-auto overflow-hidden p-2">
                   <img 
                     src={CONTACT_INFO.logoUrl} 
                     alt="La Pizzería Rota Logo" 
                     className="w-full h-full object-contain scale-110"
                     referrerPolicy="no-referrer"
                     onError={(e) => {
                       e.currentTarget.src = "https://cdn-icons-png.flaticon.com/512/3595/3595455.png";
                     }}
                   />
                </div>
                <motion.div 
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 4 }}
                  className="absolute -top-2 -right-2 bg-[#FFD700] text-[#141414] font-bold py-1 px-4 rounded-full text-xs sm:text-sm shadow-lg border-2 border-[#141414] z-20"
                >
                  ¡Desde 1990!
                </motion.div>
             </div>
          </div>
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-black text-white tracking-tighter mb-4 italic drop-shadow-2xl leading-none">
            LA <span className="text-[#C41E3A]">PIZZERÍA</span>
          </h1>
          <p className="text-[#FFD700] text-lg sm:text-xl md:text-2xl font-medium tracking-[0.2em] uppercase mb-12 drop-shadow-lg">
            Sabor Artesanal • Tradición • Rota
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-12">
            <motion.a 
              href="tel:956841515"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-[#C41E3A] hover:bg-[#A01830] text-white px-12 py-6 rounded-full font-black uppercase italic tracking-wider flex items-center justify-center gap-4 transition-all shadow-[0_15px_30px_rgba(196,30,58,0.4)] text-lg"
            >
              <Phone size={28} />
              Encarga tu pedido
            </motion.a>
            <motion.button 
              onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 text-[#141414] px-12 py-6 rounded-full font-black uppercase italic tracking-wider flex items-center justify-center gap-4 transition-all shadow-[0_15px_30px_rgba(0,0,0,0.15)] text-lg"
            >
              <UtensilsCrossed size={28} />
              Ver Carta
            </motion.button>
          </div>
        </motion.div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white opacity-50">
          <ChevronDown size={32} />
        </div>
      </header>

      {/* --- INFO STRIP --- */}
      <section className="bg-[#FFD700] py-6 border-y-4 border-[#141414]">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-[#141414] font-bold uppercase tracking-wider text-sm">
          <div className="flex items-center gap-2">
            <Truck size={20} />
            <span>Servicio a domicilio: {CONTACT_INFO.deliveryFee}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={20} />
            <span>{CONTACT_INFO.address}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} />
            <span>Abierto todos los días</span>
          </div>
        </div>
      </section>

      {/* --- INTERACTIVE MENU --- */}
      <section id="menu" className="py-20 px-4 max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-black tracking-tight mb-4 uppercase italic">Nuestra <span className="text-[#C41E3A]">Carta</span></h2>
          <div className="w-24 h-2 bg-[#C41E3A] mx-auto"></div>
        </div>

        <div className="space-y-6">
          {/* PIZZAS CATEGORY */}
          <MenuCategory 
            id="pizzas"
            title={MENU_DATA.pizzas.title}
            icon={<Pizza className="text-[#C41E3A]" />}
            isOpen={activeCategory === 'pizzas'}
            onToggle={() => toggleCategory('pizzas')}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-xl font-bold mb-4 border-b-2 border-[#FFD700] pb-2">Bases</h4>
                <div className="space-y-3">
                  {MENU_DATA.pizzas.bases.map((base) => (
                    <div key={base.name} className="flex justify-between items-center bg-white p-3 rounded-lg shadow-sm border-l-4 border-[#C41E3A]">
                      <div className="flex items-center">
                        <span className="font-bold">{base.name}</span>
                        <AllergenIcons allergenIds={base.allergens} />
                      </div>
                      <span className="font-mono bg-[#141414] text-white px-2 py-1 rounded">{base.price.toFixed(2)}€</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gray-100 rounded-lg text-sm italic">
                  <p>* Precio por ingrediente extra: {MENU_DATA.pizzas.ingredientPrices.small.toFixed(2)}€ (Peq/Med) / {MENU_DATA.pizzas.ingredientPrices.large.toFixed(2)}€ (Gra/Fam)</p>
                </div>
              </div>

              <div>
                <h4 className="text-xl font-bold mb-4 border-b-2 border-[#FFD700] pb-2">Especialidades</h4>
                <div className="space-y-4">
                  {MENU_DATA.pizzas.specialties.map((spec) => (
                    <div key={spec.name} className="bg-white p-4 rounded-lg shadow-sm border-r-4 border-[#C41E3A]">
                      <div className="flex justify-between items-start mb-1">
                        <h5 className="font-black text-[#C41E3A]">{spec.name}</h5>
                        <AllergenIcons allergenIds={spec.allergens} />
                      </div>
                      <p className="text-sm text-gray-600 leading-tight">{spec.ingredients}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="md:col-span-2">
                <h4 className="text-xl font-bold mb-4 border-b-2 border-[#FFD700] pb-2">Ingredientes para combinar</h4>
                <div className="flex flex-wrap gap-2">
                  {MENU_DATA.pizzas.ingredients.map((ing) => (
                    <div key={ing.name} className="bg-white px-3 py-1 rounded-full text-xs font-bold border border-gray-200 shadow-sm hover:border-[#C41E3A] transition-colors flex items-center gap-1">
                      <span>{ing.name}</span>
                      <AllergenIcons allergenIds={ing.allergens} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </MenuCategory>

          {/* DE TODO UN POCO CATEGORY */}
          <MenuCategory 
            id="complementos"
            title={MENU_DATA.deTodoUnPoco.title}
            icon={<UtensilsCrossed className="text-[#C41E3A]" />}
            isOpen={activeCategory === 'complementos'}
            onToggle={() => toggleCategory('complementos')}
          >
            <div className="grid md:grid-cols-2 gap-4">
              {MENU_DATA.deTodoUnPoco.items.map((item) => (
                <div key={item.name} className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="flex items-center">
                    <span className="font-bold text-gray-800">{item.name}</span>
                    <AllergenIcons allergenIds={item.allergens} />
                  </div>
                  <span className="font-mono font-bold text-[#C41E3A]">{item.price.toFixed(2)}€</span>
                </div>
              ))}
            </div>
          </MenuCategory>

          {/* SANDWICH & BURGERS CATEGORY */}
          <MenuCategory 
            id="burgers"
            title={MENU_DATA.sandwichAndHamburguesas.title}
            icon={<Sandwich className="text-[#C41E3A]" />}
            isOpen={activeCategory === 'burgers'}
            onToggle={() => toggleCategory('burgers')}
          >
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#FFD700]"></span> Sándwiches
                </h4>
                <div className="space-y-3">
                  {MENU_DATA.sandwichAndHamburguesas.sandwiches.map((s) => (
                    <div key={s.name} className="flex justify-between items-center group">
                      <div className="flex items-center">
                        <span className="font-medium group-hover:text-[#C41E3A] transition-colors">{s.name}</span>
                        <AllergenIcons allergenIds={s.allergens} />
                      </div>
                      <div className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></div>
                      <span className="font-mono font-bold">{s.price.toFixed(2)}€</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <span className="w-8 h-1 bg-[#FFD700]"></span> Hamburguesas
                </h4>
                <div className="space-y-3">
                  {MENU_DATA.sandwichAndHamburguesas.hamburguesas.map((h) => (
                    <div key={h.name} className="flex justify-between items-center group">
                      <div className="flex items-center">
                        <span className="font-medium group-hover:text-[#C41E3A] transition-colors">{h.name}</span>
                        <AllergenIcons allergenIds={h.allergens} />
                      </div>
                      <div className="flex-1 border-b border-dotted border-gray-300 mx-4 mb-1"></div>
                      <span className="font-mono font-bold">{h.price.toFixed(2)}€</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h5 className="text-sm font-bold uppercase tracking-widest text-gray-400 mb-4">Extras Hamburguesas</h5>
                  <div className="grid grid-cols-2 gap-2">
                    {MENU_DATA.sandwichAndHamburguesas.extras.map(e => (
                      <div key={e.name} className="text-xs flex justify-between bg-gray-50 p-2 rounded items-center">
                        <div className="flex items-center">
                          <span>{e.name}</span>
                          <AllergenIcons allergenIds={e.allergens} />
                        </div>
                        <span className="font-bold">+{e.price.toFixed(2)}€</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </MenuCategory>

          {/* EXTRAS CATEGORY */}
          <MenuCategory 
            id="extras"
            title={MENU_DATA.extras.title}
            icon={<Truck className="text-[#C41E3A]" />}
            isOpen={activeCategory === 'extras'}
            onToggle={() => toggleCategory('extras')}
          >
            <div className="grid md:grid-cols-3 gap-4">
              {MENU_DATA.extras.items.map((item) => (
                <div key={item.name} className="bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col justify-center items-center text-center relative">
                  <div className="absolute top-2 right-2">
                    <AllergenIcons allergenIds={item.allergens} />
                  </div>
                  <span className="text-sm font-bold text-gray-800 mb-2">{item.name}</span>
                  <span className="text-lg font-mono font-black text-[#C41E3A]">{item.price.toFixed(2)}€</span>
                </div>
              ))}
            </div>
          </MenuCategory>
        </div>

        {/* --- ALLERGEN LEGEND --- */}
        <div className="mt-20 p-8 bg-white rounded-3xl border-2 border-[#141414] shadow-lg">
          <h4 className="text-xl font-black mb-6 uppercase italic border-b-2 border-[#FFD700] pb-2">Leyenda de Alérgenos</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
            {ALLERGENS.map(allergen => (
              <div key={allergen.id} className="flex flex-col items-center text-center gap-1">
                <span className="w-10 h-10 flex items-center justify-center bg-gray-100 rounded-full text-xl border border-gray-200 shadow-sm">
                  {allergen.icon}
                </span>
                <span className="text-[10px] font-bold uppercase text-gray-500 leading-tight">{allergen.name}</span>
              </div>
            ))}
          </div>
          <p className="mt-8 text-xs text-gray-400 italic text-center">
            * Algunos ingredientes pueden contener trazas de alérgenos. Consulte con nuestro personal si tiene alguna duda.
          </p>
        </div>
      </section>

      {/* --- REVIEWS --- */}
      <section className="py-20 bg-[#141414] text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-black mb-4 uppercase italic">Lo que dicen <span className="text-[#FFD700]">nuestros clientes</span></h2>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => <Star key={i} size={24} fill="#FFD700" className="text-[#FFD700]" />)}
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {REVIEWS.map((review, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="bg-white/5 p-8 rounded-2xl border border-white/10 relative"
              >
                <div className="absolute -top-4 -left-4 bg-[#C41E3A] w-10 h-10 rounded-full flex items-center justify-center text-2xl font-serif italic">"</div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">"{review.text}"</p>
                <div className="flex items-center justify-between mt-auto">
                  <div>
                    <h5 className="font-bold text-[#FFD700]">{review.name}</h5>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(review.rating)].map((_, i) => <Star key={i} size={12} fill="#FFD700" className="text-[#FFD700]" />)}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.a 
              href={CONTACT_INFO.reviewUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-[#FFD700] text-[#141414] px-10 py-5 rounded-full font-black uppercase italic tracking-wider shadow-[0_0_20px_rgba(255,215,0,0.3)] hover:shadow-[0_0_30px_rgba(255,215,0,0.5)] transition-all"
            >
              <Star size={24} fill="#141414" />
              ¡Déjanos tu reseña en Google!
              <Star size={24} fill="#141414" />
            </motion.a>
            <p className="mt-4 text-gray-400 text-sm">Tu opinión nos ayuda a seguir mejorando cada día</p>
          </div>
        </div>
      </section>

      {/* --- CONTACT & FOOTER --- */}
      <footer className="bg-white pt-20 pb-10 border-t-8 border-[#C41E3A]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12 mb-16">
            <div>
              <h3 className="text-2xl font-black mb-6 italic uppercase">La <span className="text-[#C41E3A]">Pizzería</span> Rota</h3>
              <p className="text-gray-600 mb-6">
                Llevamos el auténtico sabor de la pizza artesanal a tu mesa desde 1990. 
                Calidad, rapidez y el mejor trato en el corazón de Rota.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C41E3A] hover:text-white transition-colors">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#C41E3A] hover:text-white transition-colors">
                  <Facebook size={20} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Contacto</h4>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPin className="text-[#C41E3A] shrink-0" size={20} />
                  <span className="text-gray-600">{CONTACT_INFO.address}</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="text-[#C41E3A] shrink-0" size={20} />
                  <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="text-gray-600 font-bold hover:text-[#C41E3A]">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Truck className="text-[#C41E3A] shrink-0" size={20} />
                  <span className="text-gray-600">Servicio a domicilio: {CONTACT_INFO.deliveryFee}</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-6 uppercase tracking-widest">Horario</h4>
              <div className="space-y-2 text-gray-600">
                <div className="flex justify-between">
                  <span>Lunes - Domingo</span>
                  <span className="font-bold">19:30 - 23:30</span>
                </div>
                <div className="flex justify-between">
                  <span>Viernes - Sábado</span>
                  <span className="font-bold">19:30 - 00:00</span>
                </div>
                <p className="text-xs mt-4 text-gray-400 italic">* Horarios aproximados. Consulta disponibilidad por teléfono.</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} La Pizzería Rota. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

function MenuCategory({ 
  id, 
  title, 
  icon, 
  children, 
  isOpen, 
  onToggle 
}: { 
  id: string; 
  title: string; 
  icon: ReactNode; 
  children: ReactNode; 
  isOpen: boolean; 
  onToggle: () => void;
}) {
  return (
    <div className="border-2 border-[#141414] rounded-3xl overflow-hidden shadow-lg bg-white">
      <button 
        onClick={onToggle}
        className={`w-full flex items-center justify-between p-6 text-left transition-colors ${isOpen ? 'bg-[#FFD700]' : 'hover:bg-gray-50'}`}
      >
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100">
            {icon}
          </div>
          <h3 className="text-2xl font-black uppercase italic tracking-tight">{title}</h3>
        </div>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronDown size={28} />
        </motion.div>
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <div className="p-8 bg-[#FDFDFD] border-t-2 border-[#141414]">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
