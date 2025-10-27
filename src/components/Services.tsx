import { useState } from 'react';
import { Microscope, ClipboardCheck, Award, GraduationCap, Thermometer, Scale, Gauge, Droplet } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import serviceTemperature from '@/assets/service-temperature.jpg';
import serviceBalance from '@/assets/service-balance.jpg';
import servicePressure from '@/assets/service-pressure.jpg';
import servicePipettes from '@/assets/service-pipettes.jpg';

const Services = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      icon: Thermometer,
      image: serviceTemperature,
      title: 'Calibração de Equipamentos',
      shortDesc: 'Calibração precisa de equipamentos médicos e laboratoriais',
      fullDesc: 'Realizamos calibração completa de termômetros clínicos, autoclaves, estufas, refrigeradores, banhos-maria e outros equipamentos que exigem controle de temperatura.',
      details: ['Termômetros clínicos', 'Autoclaves e estufas', 'Refrigeradores médicos', 'Banhos-maria'],
    },
    {
      icon: Scale,
      image: serviceBalance,
      title: 'Verificação de Balanças',
      shortDesc: 'Verificação e calibração de balanças de precisão',
      fullDesc: 'Serviço especializado em balanças analíticas, semi-analíticas e de precisão utilizadas em laboratórios clínicos e farmacêuticos. Asseguramos exatidão em todas as pesagens críticas.',
      details: ['Balanças analíticas', 'Balanças semi-analíticas', 'Balanças de precisão', 'Ajustes e manutenção', 'Laudo técnico'],
    },
    {
      icon: Gauge,
      image: servicePressure,
      title: 'Instrumentos de Pressão',
      shortDesc: 'Calibração de manômetros e medidores de pressão',
      fullDesc: 'Calibração de esfigmomanômetros (aparelhos de pressão arterial), manômetros, vacuômetros e outros instrumentos de medição de pressão essenciais para diagnósticos precisos.',
      details: ['Esfigmomanômetros'],
    },
    {
      icon: Droplet,
      image: servicePipettes,
      title: 'Pipetas e Micropipetas',
      shortDesc: 'Calibração volumétrica de precisão',
      fullDesc: 'Calibração gravimétrica de pipetas automáticas, micropipetas e outros instrumentos volumétricos críticos para análises clínicas e pesquisas científicas.',
  details: ['Micropipetas', 'Pipetas automáticas', 'Método gravimétrico'],
    },
    // 'Equipamentos Laboratoriais' removed per request
  ];

  const handleServiceClick = (index: number) => {
    setSelectedService(index);
  };

  const handleCloseDialog = () => {
    setSelectedService(null);
  };

  return (
    <>
      <section id="servicos" className="py-16 md:py-20 bg-background">
        <div className="container mx-auto px-3 md:px-4">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Nossos Serviços
            </h2>
            <p className="text-lg text-muted-foreground">
              Soluções completas em metrologia para a saúde
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <button
                key={index}
                onClick={() => handleServiceClick(index)}
                className="bg-card rounded-xl shadow-card hover:shadow-hover transition-smooth border border-border text-left group overflow-hidden"
              >
                {/* Service Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute top-4 right-4 w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-smooth">
                    <service.icon className="text-white" size={24} />
                  </div>
                </div>
                
                {/* Service Content */}
                <div className="p-6">
                  <h3 className="font-semibold text-foreground mb-2 text-lg">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {service.shortDesc}
                  </p>
                  <div className="text-primary text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center">
                    Saiba mais →
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Dialog */}
      {selectedService !== null && (
        <Dialog open={selectedService !== null} onOpenChange={handleCloseDialog}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              {/* Service Image in Dialog */}
              <div className="relative h-64 rounded-xl overflow-hidden mb-4 -mt-6 -mx-6">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-6 right-6">
                  <div className="w-16 h-16 rounded-lg bg-gradient-primary flex items-center justify-center mb-3">
                    {(() => {
                      const ServiceIcon = services[selectedService].icon;
                      return <ServiceIcon className="text-white" size={32} />;
                    })()}
                  </div>
                  <DialogTitle className="text-3xl text-white">{services[selectedService].title}</DialogTitle>
                </div>
              </div>
              <DialogDescription className="text-base pt-4 px-6">
                {services[selectedService].fullDesc}
              </DialogDescription>
            </DialogHeader>
            <div className="pt-4 px-6 pb-6">
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
