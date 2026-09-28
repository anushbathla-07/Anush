import { Coffee } from 'lucide-react';

const links = [
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function Footer() {
  return (
    <footer className="bg-espresso-950 py-14">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-full bg-espresso-700 flex items-center justify-center">
              <Coffee className="w-5 h-5 text-cream-50" />
            </div>
            <span className="font-serif text-xl font-semibold text-cream-50">
              Ember <span className="text-amber-400">&</span> Oak
            </span>
          </div>

          {/* Links */}
          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="text-cream-300 text-sm hover:text-amber-400 transition-colors duration-300"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Copyright */}
          <p className="text-cream-400/60 text-sm">
            &copy; {new Date().getFullYear()} Ember &amp; Oak Coffee Co.
          </p>
        </div>
      </div>
    </footer>
  );
}
