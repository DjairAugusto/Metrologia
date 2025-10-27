import { Award, Target, Users, TrendingUp } from 'lucide-react';
import teamImage from '@/assets/team-lab.jpg';

const About = () => {
  const features = [
    {
      icon: Target,
      title: 'Precisão Comprovada',
      description: 'Precisão comprovada em todos os nossos processos.',
    },
    {
      icon: Users,
      title: 'Equipe Especializada',
      description: 'Profissionais altamente qualificados em metrologia e calibração.',
    },
    {
      icon: TrendingUp,
      title: 'Melhoria Contínua',
      description: 'Investimento constante em equipamentos e capacitação técnica.',
    },
  ];

  return (
    <section id="sobre" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
              <div className="relative rounded-2xl overflow-hidden shadow-hover">
                <img
                  src={teamImage}
                  alt="Equipe de profissionais do laboratório"
                  className="w-full h-56 sm:h-72 md:h-96 object-cover rounded-2xl"
                />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
          </div>

          {/* Content */}
            <div className="space-y-6 md:space-y-8 order-1 lg:order-2">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Sobre a Precisa
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa missão é assegurar que cada medição realizada em ambientes de saúde seja precisa, segura e rastreável.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Somos um laboratório de referência em calibração e verificação de equipamentos, comprometido com medições confiáveis que elevam a qualidade dos diagnósticos.
              </p>
            </div>

            {/* Features Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth border border-border group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <feature.icon className="text-white" size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
