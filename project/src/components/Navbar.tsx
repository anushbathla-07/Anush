import { useEffect, useState } from 'react';
import { Coffee, Menu as MenuIcon, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Our Story', href: '#story' },
  { label: 'Menu', href: '#menu' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Visit', href: '#visit' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur-md shadow-[0_2px_20px_rgba(74,44,26,0.08)] py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2.5 group">
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors duration-500 ${
              scrolled ? 'bg-espresso-700' : 'bg-cream-50/20 backdrop-blur-sm border border-cream-100/30'
            }`}
          >
            <Coffee className={`w-5 h-5 transition-colors duration-500 ${scrolled ? 'text-cream-50' : 'text-cream-50'}`} />
          </div>
          <span
            className={`font-serif text-xl font-semibold tracking-tight transition-colors duration-500 ${
              scrolled ? 'text-espresso-800' : 'text-cream-50'
            }`}
          >
            Ember <span className="text-amber-500">&</span> Oak
          </span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-300 relative after:absolute after:bottom-[-6px] after:left-0 after:w-0 after:h-[2px] after:bg-amber-500 after:transition-all after:duration-300 hover:after:w-full ${
                  scrolled ? 'text-espresso-700 hover:text-espresso-900' : 'text-cream-100 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#visit"
          className={`hidden md:inline-flex items-center px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
            scrolled
              ? 'bg-espresso-700 text-cream-50 hover:bg-espresso-800 shadow-md hover:shadow-lg'
              : 'bg-cream-50 text-espresso-800 hover:bg-white shadow-lg'
          }`}
        >
          Order Ahead
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-espresso-800' : 'text-cream-50'}`}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-500 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream-50/98 backdrop-blur-md mx-4 mt-3 rounded-2xl shadow-xl border border-cream-200 overflow-hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-3.5 text-espresso-700 hover:bg-cream-100 hover:text-espresso-900 transition-colors font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#visit"
                onClick={() => setOpen(false)}
                className="block px-6 py-3.5 bg-espresso-700 text-cream-50 hover:bg-espresso-800 transition-colors font-medium text-center"
              >
                Order Ahead
              </a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
