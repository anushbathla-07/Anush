import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Leaf, Flame, HandHeart } from 'lucide-react';

const values = [
  {
    icon: Leaf,
    title: 'Ethically Sourced',
    text: 'We partner directly with small farms across Ethiopia, Colombia, and Guatemala — paying above fair trade for beans grown with care.',
  },
  {
    icon: Flame,
    title: 'Roasted In-House',
    text: 'Every bean is roasted in small batches on our 1950s drum roaster, profiled to highlight the character of each origin.',
  },
  {
    icon: HandHeart,
    title: 'Crafted with Intention',
    text: 'No automated machines. Every drink is hand-poured by a barista who knows your name and your order.',
  },
];

const storyImg = 'https://images.pexels.com/photos/894695/pexels-photo-894695.jpeg?auto=compress&cs=tinysrgb&w=940';
const baristaImg = 'https://images.pexels.com/photos/31723346/pexels-photo-31723346.jpeg?auto=compress&cs=tinysrgb&w=940';

export default function Story() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="story" className="py-24 md:py-32 bg-cream-50 relative overflow-hidden">
      {/* Decorative coffee ring */}
      <div className="absolute top-20 right-0 w-96 h-96 rounded-full border-2 border-cream-200 opacity-50" />
      <div className="absolute top-32 right-8 w-72 h-72 rounded-full border border-cream-200 opacity-40" />

      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Intro */}
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} max-w-3xl mb-20`}>
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Our Story</span>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800 mt-4 leading-tight">
            A neighborhood coffee house, built on craft and community
          </h2>
          <p className="text-espresso-600 text-lg mt-6 leading-relaxed">
            Ember &amp; Oak started in 2016 as a single drum roaster in a converted bicycle shop.
            Today, we're a gathering place — where the espresso is precise, the pastries are baked
            before sunrise, and the door is always open.
          </p>
        </div>

        {/* Image + values grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <div className={`reveal ${isVisible ? 'is-visible' : ''} relative`}>
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={storyImg}
                alt="Freshly roasted coffee beans"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -right-4 lg:-right-8 w-40 h-52 rounded-2xl overflow-hidden shadow-xl border-4 border-cream-50 hidden sm:block">
              <img
                src={baristaImg}
                alt="Barista hand-pouring coffee"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Stat badge */}
            <div className="absolute -top-6 -left-6 bg-espresso-700 text-cream-50 rounded-2xl px-6 py-4 shadow-xl">
              <div className="font-serif text-3xl font-bold text-amber-400">8</div>
              <div className="text-xs tracking-wide uppercase text-cream-200">Years Roasting</div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className={`reveal ${isVisible ? 'is-visible' : ''} flex gap-5 group`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-espresso-100 flex items-center justify-center group-hover:bg-espresso-700 transition-colors duration-300">
                  <v.icon className="w-6 h-6 text-espresso-700 group-hover:text-cream-50 transition-colors duration-300" />
                </div>
                <div>
                  <h3 className="font-serif text-xl text-espresso-800 font-semibold">{v.title}</h3>
                  <p className="text-espresso-600 mt-1.5 leading-relaxed">{v.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
