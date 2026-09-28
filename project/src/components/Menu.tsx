import { useState } from 'react';
import { menu } from '@/data/menu';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Zap, Droplets, Sparkles, Croissant } from 'lucide-react';

const iconMap = { Zap, Droplets, Sparkles, Croissant };

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState(0);
  const { ref, isVisible } = useScrollReveal();

  const current = menu[activeCategory];

  return (
    <section id="menu" className="py-24 md:py-32 bg-espresso-900 relative overflow-hidden">
      {/* Texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_30%_50%,#E0A24E_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Header */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="text-amber-400 text-sm font-semibold tracking-[0.2em] uppercase">The Menu</span>
          <h2 className="font-serif text-4xl md:text-5xl text-cream-50 mt-4 leading-tight">
            Brewed, poured, and baked with care
          </h2>
          <p className="text-cream-300 text-lg mt-5 leading-relaxed">
            Our menu changes with the seasons. These are the staples — always available, always made to order.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {menu.map((cat, i) => {
            const Icon = iconMap[cat.icon as keyof typeof iconMap];
            return (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(i)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 ${
                  activeCategory === i
                    ? 'bg-amber-500 text-espresso-950 shadow-lg shadow-amber-500/20 scale-105'
                    : 'bg-espresso-800 text-cream-300 hover:bg-espresso-700 hover:text-cream-50'
                }`}
              >
                <Icon className="w-4 h-4" />
                {cat.title}
              </button>
            );
          })}
        </div>

        {/* Menu items */}
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-x-12 gap-y-2">
            {current.items.map((item, i) => (
              <div
                key={item.name}
                className="flex items-start justify-between gap-4 py-5 border-b border-espresso-700/50 group hover:border-amber-400/40 transition-colors duration-300"
                style={{ animation: `fadeUp 0.5s ease-out ${i * 60}ms both` }}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-2.5">
                    <h3 className="font-serif text-lg text-cream-50 group-hover:text-amber-400 transition-colors duration-300">
                      {item.name}
                    </h3>
                    {item.tag && (
                      <span className="text-[10px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/30">
                        {item.tag}
                      </span>
                    )}
                  </div>
                  <p className="text-cream-300/70 text-sm mt-1 leading-relaxed">{item.description}</p>
                </div>
                <div className="flex items-center gap-1 pt-0.5">
                  <span className="text-cream-400 text-sm">$</span>
                  <span className="font-serif text-xl text-cream-50 group-hover:text-amber-400 transition-colors duration-300">
                    {item.price}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Note */}
        <p className="text-center text-cream-300/50 text-sm mt-12 italic">
          Oat, almond, and whole milk available — no extra charge. Decaf on request.
        </p>
      </div>
    </section>
  );
}
