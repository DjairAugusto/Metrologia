import { useState } from 'react';
import { Microscope, ClipboardCheck, Award, GraduationCap, Thermometer, Scale, Gauge, Droplet } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Thermometer,
      title: 'Calibração de Equipamentos',
      shortDesc: 'Calibração precisa de equipamentos médicos e laboratoriais',
      fullDesc: 'Realizamos calibração completa de termômetros clínicos, autoclaves, estufas, refrigeradores, banhos-maria e outros equipamentos que exigem controle de temperatura. Garantimos rastreabilidade ao Sistema Internacional de Unidades (SI).',
      details: ['Termômetros clínicos', 'Autoclaves e estufas', 'Refrigeradores médicos', 'Banhos-maria', 'Certificado de calibração'],
    },
    {
      icon: Scale,
      title: 'Verificação de Balanças',
      shortDesc: 'Verificação e calibração de balanças de precisão',
      fullDesc: 'Serviço especializado em balanças analíticas, semi-analíticas e de precisão utilizadas em laboratórios clínicos e farmacêuticos. Asseguramos exatidão em todas as pesagens críticas.',
      details: ['Balanças analíticas', 'Balanças semi-analíticas', 'Balanças de precisão', 'Ajustes e manutenção', 'Laudo técnico'],
    },
    {
      icon: Gauge,
      title: 'Instrumentos de Pressão',
      shortDesc: 'Calibração de manômetros e medidores de pressão',
      fullDesc: 'Calibração de esfigmomanômetros (aparelhos de pressão arterial), manômetros, vacuômetros e outros instrumentos de medição de pressão essenciais para diagnósticos precisos.',
      details: ['Esfigmomanômetros', 'Manômetros clínicos', 'Vacuômetros', 'Ventiladores pulmonares', 'Certificação completa'],
    },
    {
      icon: Droplet,
      title: 'Pipetas e Micropipetas',
      shortDesc: 'Calibração volumétrica de precisão',
      fullDesc: 'Calibração gravimétrica de pipetas automáticas, micropipetas e outros instrumentos volumétricos críticos para análises clínicas e pesquisas científicas.',
      details: ['Micropipetas', 'Pipetas automáticas', 'Dispensers', 'Método gravimétrico', 'Certificado rastreável'],
    },
    {
      icon: ClipboardCheck,
      title: 'Certificação e Rastreabilidade',
      shortDesc: 'Documentação técnica completa e rastreável',
      fullDesc: 'Emissão de certificados de calibração com rastreabilidade à Rede Brasileira de Calibração (RBC) e ao INMETRO, garantindo conformidade com normas ISO 17025 e regulamentações da ANVISA.',
      details: ['Certificados ISO 17025', 'Rastreabilidade RBC/INMETRO', 'Conformidade ANVISA', 'Documentação completa', 'Suporte técnico'],
    },
    {
      icon: Microscope,
      title: 'Equipamentos Laboratoriais',
      shortDesc: 'Calibração de equipamentos analíticos',
      fullDesc: 'Serviços de calibração para centrífugas, espectrofotômetros, pHmetros, condutivímetros e outros equipamentos analíticos essenciais para laboratórios clínicos e de pesquisa.',
      details: ['Centrífugas', 'Espectrofotômetros', 'pHmetros', 'Condutivímetros', 'Equipamentos analíticos'],
    },
    {
      icon: Award,
      title: 'Consultoria em Qualidade',
      shortDesc: 'Assessoria para conformidade regulatória',
      fullDesc: 'Consultoria especializada para implementação de sistemas de gestão da qualidade, preparação para auditorias e adequação às normas regulatórias vigentes no setor de saúde.',
      details: ['Sistema de gestão', 'Preparação para auditorias', 'Conformidade regulatória', 'Procedimentos operacionais', 'Capacitação técnica'],
    },
    {
      icon: GraduationCap,
      title: 'Treinamentos',
      shortDesc: 'Capacitação técnica especializada',
      fullDesc: 'Cursos e treinamentos para equipes técnicas sobre boas práticas em metrologia, manuseio adequado de equipamentos e interpretação de certificados de calibração.',
      details: ['Boas práticas metrológicas', 'Manuseio de equipamentos', 'Interpretação de certificados', 'Normas técnicas', 'Certificado de participação'],
    },
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicos" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluções completas em metrologia biomédica com certificação e 
              rastreabilidade garantidas
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className="bg-card p-6 rounded-xl shadow-card hover:shadow-hover transition-smooth border border-border text-left group"
              >
                <div className="w-14 h-14 rounded-lg bg-gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                  <service.icon className="text-white" size={28} />
                </div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.shortDesc}
                </p>
                <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                  Saiba mais →
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      {selectedService !== null && (
        <Dialog open={selectedService !== null} onOpenChange={handleCloseDialog}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                {(() => {
                  const ServiceIcon = services[selectedService].icon;
                  return <ServiceIcon className="text-white" size={32} />;
                })()}
              </div>
              <DialogTitle className="text-2xl">{services[selectedService].title}</DialogTitle>
              <DialogDescription className="text-base pt-4">
                {services[selectedService].fullDesc}
              </DialogDescription>
            </DialogHeader>
            <div className="pt-4">
              <h4 className="font-semibold text-foreground mb-3">O que está incluído:</h4>
              <ul className="space-y-2">
                {services[selectedService].details.map((detail, idx) => (
                  <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                    <span className="text-accent mt-1">✓</span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};

export default Services;
