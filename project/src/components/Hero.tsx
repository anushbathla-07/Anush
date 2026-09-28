import { ArrowDown } from 'lucide-react';

const heroImg = 'https://images.pexels.com/photos/35518412/pexels-photo-35518412.jpeg?auto=compress&cs=tinysrgb&w=1920';
const latteImg = 'https://images.pexels.com/photos/459489/pexels-photo-459489.jpeg?auto=compress&cs=tinysrgb&w=940';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImg}
          alt="Warm, rustic coffee shop interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-espresso-950/70 via-espresso-900/50 to-espresso-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center pt-20">
        <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cream-50/10 backdrop-blur-sm border border-cream-100/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" />
          <span className="text-cream-100 text-sm font-medium tracking-wide">Open Now · 7am — 7pm</span>
        </div>

        <h1 className="animate-fade-up font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-cream-50 leading-[1.1] text-balance">
          Where Every Cup
          <br />
          <span className="italic text-amber-400">Tells a Story</span>
        </h1>

        <p className="animate-fade-up text-cream-200 text-lg md:text-xl mt-8 max-w-2xl mx-auto leading-relaxed font-light">
          Single-origin beans, roasted in-house, brewed with intention. A coffee house
          built for slow mornings and good conversation.
        </p>

        <div className="animate-fade-up flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a
            href="#menu"
            className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-amber-500 text-espresso-950 font-semibold text-base hover:bg-amber-400 transition-all duration-300 shadow-lg hover:shadow-amber-500/30 hover:scale-105"
          >
            Explore the Menu
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="#story"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-cream-50/10 backdrop-blur-sm border border-cream-100/30 text-cream-50 font-medium text-base hover:bg-cream-50/20 transition-all duration-300"
          >
            Our Story
          </a>
        </div>
      </div>

      {/* Floating latte image */}
      <div className="absolute right-6 lg:right-16 bottom-24 hidden lg:block animate-float">
        <div className="relative">
          <div className="w-48 h-64 rounded-3xl overflow-hidden shadow-2xl border-4 border-cream-50/20">
            <img src={latteImg} alt="Latte with heart-shaped art" className="w-full h-full object-cover" />
          </div>
          <div className="absolute -top-3 -left-3 bg-cream-50 rounded-full px-4 py-2 shadow-lg">
            <span className="text-espresso-800 text-sm font-semibold">Freshly Brewed</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-cream-200/60">
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-cream-200/60 to-transparent" />
      </div>
    </section>
  );
}
