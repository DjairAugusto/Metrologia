import { Button } from '@/components/ui/button';
import { ArrowRight, Activity } from 'lucide-react';
import heroImage from '@/assets/hero-lab.jpg';
import FloatingParticles from './FloatingParticles';
import AnimatedCounter from './AnimatedCounter';
import TypingAnimation from './TypingAnimation';

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="inicio" className="relative min-h-[70vh] md:min-h-[85vh] flex items-center gradient-hero pt-12 md:pt-16 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
  <div className="container mx-auto px-4 py-10 md:py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 md:space-y-8 animate-fade-in max-w-prose">
            {/* certification badge removed per client request */}
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Precisão que </span>
              <span className="text-primary inline-block">
                <TypingAnimation text="Salva Vidas" speed={150} />
              </span>
            </h1>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-full md:max-w-2xl text-balance">
              A Precisa atua com metrologia aplicada à biomedicina com excelência e confiabilidade. 
              Calibração e verificação de equipamentos médicos por meio de processos seguros e rastreáveis.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="bg-gradient-primary text-white hover:opacity-90 transition-smooth shadow-hover group w-full sm:w-auto"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('sobre')}
                className="border-2 hover:border-primary hover:bg-secondary transition-smooth w-full sm:w-auto"
              >
                Saiba Mais
              </Button>
            </div>

            {/* initial stats removed per client request */}
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-hover group">
              <img
                src={heroImage}
                alt="Laboratório moderno da Precisa"
                className="w-full h-auto max-h-[420px] md:max-h-none object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* floating card removed per client request */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
