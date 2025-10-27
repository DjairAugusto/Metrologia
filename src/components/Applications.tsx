import { Stethoscope, FlaskConical, Heart, Thermometer } from 'lucide-react';

const Applications = () => {
  const applications = [
    {
      icon: Thermometer,
      title: 'Controle de Temperatura em Bancos de Sangue',
      description: 'Calibração precisa de refrigeradores e freezers garante a preservação adequada de hemoderivados, evitando perdas e mantendo a qualidade dos produtos sanguíneos.',
      impact: 'Reduz desperdício de sangue e hemoderivados em até 95%',
      image: '🩸',
    },
    {
      icon: Heart,
      title: 'Calibração de Ventiladores Pulmonares',
      description: 'Verificação rigorosa de pressão, volume e fluxo em ventiladores mecânicos assegura suporte respiratório confiável para pacientes em estado crítico.',
      impact: 'Aumenta segurança em UTIs e durante procedimentos cirúrgicos',
      image: '🫁',
    },
    {
      icon: Stethoscope,
      title: 'Monitoramento de Pressão Arterial',
      description: 'Calibração de esfigmomanômetros e monitores multiparâmetros garante medições corretas de pressão arterial, fundamentais para diagnóstico e tratamento cardiovascular.',
      impact: 'Precisão essencial para diagnóstico de hipertensão e cardiopatias',
      image: '❤️',
    },
    {
      icon: FlaskConical,
      title: 'Análises Clínicas Confiáveis',
      description: 'Calibração de pipetas, balanças e equipamentos analíticos assegura resultados laboratoriais precisos, base para diagnósticos médicos corretos.',
      impact: 'Garante confiabilidade em milhares de exames laboratoriais diários',
      image: '🧪',
    },
  ];

  return (
    <section id="aplicacoes" className="py-16 md:py-20 bg-secondary/30">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Aplicações Práticas
          </h2>
          <p className="text-lg text-muted-foreground">
            O impacto real da metrologia na saúde e segurança dos pacientes
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-card hover:shadow-hover transition-smooth border border-border group"
            >
              {/* Icon and Title */}
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <app.icon className="text-white" size={28} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{app.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{app.description}</p>
                </div>
              </div>

              {/* Impact Badge */}
              <div className="bg-accent/10 border border-accent/20 rounded-lg p-4 mt-4">
                <div className="flex items-start space-x-3">
                  <span className="text-3xl">{app.image}</span>
                  <div>
                    <div className="text-xs font-medium text-accent mb-1">IMPACTO</div>
                    <p className="text-sm text-foreground font-medium">{app.impact}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              99.9%
            </div>
            <div className="text-sm text-muted-foreground">Taxa de conformidade nos testes</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              24h
            </div>
            <div className="text-sm text-muted-foreground">Tempo médio de calibração</div>
          </div>
          <div className="bg-card p-6 rounded-xl shadow-card border border-border text-center">
            <div className="text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
              100+
            </div>
            <div className="text-sm text-muted-foreground">Instituições de saúde atendidas</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
