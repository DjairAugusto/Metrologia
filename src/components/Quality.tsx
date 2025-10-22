import { Shield, FileCheck, Award, TrendingUp } from 'lucide-react';

const Quality = () => {
  const certifications = [
    {
      icon: Shield,
      title: 'ISO 17025',
      description: 'Acreditação para laboratórios de ensaio e calibração',
      status: 'Certificado',
    },
    {
      icon: FileCheck,
      title: 'INMETRO',
      description: 'Rastreabilidade à Rede Brasileira de Calibração',
      status: 'Acreditado',
    },
    {
      icon: Award,
      title: 'ANVISA',
      description: 'Conformidade com regulamentações sanitárias',
      status: 'Em conformidade',
    },
    {
      icon: TrendingUp,
      title: 'Melhoria Contínua',
      description: 'Auditorias internas e externas regulares',
      status: 'Ativo',
    },
  ];

  const standards = [
    'NBR ISO 17025:2017 - Requisitos gerais para competência de laboratórios',
    'VIM - Vocabulário Internacional de Metrologia',
    'GUM - Guia para Expressão da Incerteza de Medição',
    'Portarias INMETRO aplicáveis à área biomédica',
    'RDC ANVISA nº 302/2005 - Regulamento Técnico',
  ];

  return (
    <section id="qualidade" className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Normas e Qualidade
          </h2>
          <p className="text-lg text-muted-foreground">
            Compromisso com excelência e conformidade regulatória
          </p>
        </div>

        {/* Certifications Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 md:mb-16">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth border border-border text-center group"
            >
              <div className="w-16 h-16 rounded-full bg-gradient-primary mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-smooth">
                <cert.icon className="text-white" size={32} />
              </div>
              <h3 className="font-bold text-foreground text-lg mb-2">{cert.title}</h3>
              <p className="text-sm text-muted-foreground mb-3">{cert.description}</p>
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                <span>{cert.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Standards List */}
  <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Normas Técnicas Aplicadas
            </h3>
            <div className="space-y-4">
              {standards.map((standard, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-lg hover:bg-secondary/50 transition-smooth"
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-primary font-bold text-sm">{index + 1}</span>
                  </div>
                  <p className="text-foreground">{standard}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Quality Statement */}
          <div className="mt-8 text-center bg-gradient-primary p-8 rounded-xl text-white">
            <h4 className="text-xl font-bold mb-3">Compromisso com a Qualidade</h4>
            <p className="max-w-2xl mx-auto">
              Nosso laboratório mantém um rigoroso sistema de gestão da qualidade, 
              garantindo que cada calibração atenda aos mais altos padrões técnicos 
              e regulatórios do setor biomédico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
