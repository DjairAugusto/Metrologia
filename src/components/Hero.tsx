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
    <section id="inicio" className="relative min-h-screen flex items-center gradient-hero pt-20 overflow-hidden">
      {/* Floating Particles Background */}
      <FloatingParticles />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium">
              <Activity size={16} />
              <span>Certificação ISO 17025</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              <span className="text-foreground">Precisão que </span>
              <span className="text-primary inline-block">
                <TypingAnimation text="Salva Vidas" speed={150} />
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-balance">
              Metrologia aplicada à biomedicina com excelência e confiabilidade. 
              Calibração e verificação de equipamentos médicos seguindo os mais 
              rigorosos padrões de qualidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection('servicos')}
                className="bg-gradient-primary text-white hover:opacity-90 transition-smooth shadow-hover group"
              >
                Nossos Serviços
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('sobre')}
                className="border-2 hover:border-primary hover:bg-secondary transition-smooth"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats - Animated Counters */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
              <div className="text-center sm:text-left">
                <AnimatedCounter end={15} suffix="+" duration={2000} />
                <div className="text-sm text-muted-foreground mt-1">Anos de Experiência</div>
              </div>
              <div className="text-center sm:text-left">
                <AnimatedCounter end={5000} suffix="+" duration={2500} />
                <div className="text-sm text-muted-foreground mt-1">Equipamentos Calibrados</div>
              </div>
              <div className="text-center sm:text-left">
                <AnimatedCounter end={100} suffix="%" duration={2000} />
                <div className="text-sm text-muted-foreground mt-1">Conformidade</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-hover group">
              <img
                src={heroImage}
                alt="Laboratório moderno de metrologia biomédica"
                className="w-full h-auto transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent" />
            </div>
            
            {/* Floating Card - Animated */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-hover border border-border max-w-xs hidden lg:block animate-fade-in hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <Activity className="text-accent animate-pulse" size={24} />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Certificação Garantida</div>
                  <div className="text-sm text-muted-foreground">Rastreabilidade total</div>
                </div>
              </div>
            </div>
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
