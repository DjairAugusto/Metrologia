import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Início', id: 'inicio' },
    { label: 'Sobre', id: 'sobre' },
    { label: 'Serviços', id: 'servicos' },
    { label: 'Equipamentos', id: 'equipamentos' },
    { label: 'Qualidade', id: 'qualidade' },
    { label: 'Aplicações', id: 'aplicacoes' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled || isMobileMenuOpen ? 'bg-background/95 backdrop-blur-md shadow-card' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex items-center justify-between h-20 md:h-24 py-2">
          {/* Logo */}
          <div className="flex items-center overflow-visible">
            {/* Logo image only - no text. object-contain to avoid being cropped */}
            <img src="/precisa-logo.svg" alt="Precisa" className="h-12 md:h-16 object-contain block" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary transition-smooth rounded-lg hover:bg-secondary"
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button
              onClick={() => scrollToSection('contato')}
              className="bg-gradient-primary text-white hover:opacity-90 transition-smooth shadow-card"
            >
              Contato
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-foreground hover:text-primary transition-smooth"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-50 bg-background/95 backdrop-blur-md animate-fade-in">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <img src="/precisa-logo.svg" alt="Precisa" className="h-10 md:h-12 object-contain" />
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Fechar menu" className="p-2">
                <X size={24} />
              </button>
            </div>

            <nav className="flex flex-col items-center justify-center space-y-6 h-[calc(100vh-80px)] px-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="w-full text-center text-xl font-medium text-foreground hover:text-primary rounded-lg py-3 transition-smooth bg-transparent"
                >
                  {item.label}
                </button>
              ))}

              <div className="w-full flex justify-center">
                <Button
                  onClick={() => scrollToSection('contato')}
                  className="w-11/12 max-w-xs bg-gradient-primary text-white py-3 shadow-card"
                >
                  Contato
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
