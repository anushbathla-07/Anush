import { useScrollReveal } from '@/hooks/useScrollReveal';

const images = [
  {
    src: 'https://images.pexels.com/photos/11385490/pexels-photo-11385490.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Cappuccino with intricate latte art from above',
    span: 'lg:col-span-2 lg:row-span-2',
  },
  {
    src: 'https://images.pexels.com/photos/30853716/pexels-photo-30853716.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Golden artisan croissants lined up',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/810042/pexels-photo-810042.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Coffee shop interior with ambient lighting',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/36094445/pexels-photo-36094445.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Latte with leaf art in a pink cup',
    span: '',
  },
  {
    src: 'https://images.pexels.com/photos/34773646/pexels-photo-34773646.jpeg?auto=compress&cs=tinysrgb&w=940',
    alt: 'Coffee and croissants at a cafe table',
    span: '',
  },
];

export default function Gallery() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream-100">
      <div className="max-w-7xl mx-auto px-6">
        <div ref={ref} className={`reveal ${isVisible ? 'is-visible' : ''} text-center max-w-2xl mx-auto mb-14`}>
          <span className="text-amber-500 text-sm font-semibold tracking-[0.2em] uppercase">Gallery</span>
          <h2 className="font-serif text-4xl md:text-5xl text-espresso-800 mt-4 leading-tight">
            Moments worth savoring
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[200px] lg:auto-rows-[240px]">
          {images.map((img, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden shadow-md cursor-pointer ${img.span}`}
              style={{ animation: `fadeUp 0.6s ease-out ${i * 100}ms both` }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-espresso-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-cream-50 text-sm font-medium">{img.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
