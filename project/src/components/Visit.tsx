import { useScrollReveal } from '@/hooks/useScrollReveal';
import { MapPin, Clock, Phone, Instagram, Facebook, Twitter } from 'lucide-react';

const hours = [
  { day: 'Monday — Friday', time: '7:00am — 7:00pm' },
  { day: 'Saturday', time: '8:00am — 8:00pm' },
  { day: 'Sunday', time: '8:00am — 5:00pm' },
];

const socials = [
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
];

const visitImg = 'https://images.pexels.com/photos/15860802/pexels-photo-15860802.jpeg?auto=compress&cs=tinysrgb&w=940';

export default function Visit() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="visit" className="py-24 md:py-32 bg-cream-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: info */}
          <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''}`}>
            <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Visit Us</span>
            <h2 className="font-serif text-4xl md:text-5xl text-espresso-800 mt-4 leading-tight">
              Come sit a while
            </h2>
            <p className="text-espresso-600 text-lg mt-5 leading-relaxed">
              We're on the corner of 5th and Vine, in the old brick building with the green door.
              Walk in, grab a seat, and stay as long as you like.
            </p>

            {/* Contact cards */}
            <div className="mt-10 space-y-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100 hover:bg-cream-200 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-espresso-700 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-espresso-800 font-semibold">Find Us</h3>
                  <p className="text-espresso-600 mt-0.5">412 Vine Street, Portland, OR 97201</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100 hover:bg-cream-200 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-espresso-700 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-cream-50" />
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-lg text-espresso-800 font-semibold">Hours</h3>
                  <ul className="mt-1.5 space-y-1">
                    {hours.map((h) => (
                      <li key={h.day} className="flex justify-between text-espresso-600 text-sm">
                        <span>{h.day}</span>
                        <span className="font-medium text-espresso-700">{h.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-cream-100 hover:bg-cream-200 transition-colors duration-300">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-espresso-700 flex items-center justify-center">
                  <Phone className="w-5 h-5 text-cream-50" />
                </div>
                <div>
                  <h3 className="font-serif text-lg text-espresso-800 font-semibold">Call to Order</h3>
                  <p className="text-espresso-600 mt-0.5">(503) 555-0142</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 mt-8">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-11 h-11 rounded-full bg-espresso-100 flex items-center justify-center text-espresso-700 hover:bg-espresso-700 hover:text-cream-50 transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Right: image */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={visitImg}
                alt="Sunlit modern cafe interior"
                className="w-full h-[560px] object-cover"
              />
            </div>
            {/* Floating card */}
            <div className="absolute -bottom-6 left-6 right-6 lg:left-auto lg:right-6 lg:w-72 bg-cream-50 rounded-2xl shadow-xl p-6 border border-cream-200">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-sage-500 animate-pulse" />
                <span className="text-sage-600 text-xs font-semibold tracking-wider uppercase">Open Now</span>
              </div>
              <p className="font-serif text-lg text-espresso-800">
                "Best flat white in the city. Period."
              </p>
              <p className="text-espresso-500 text-sm mt-2">— Portland Monthly</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
