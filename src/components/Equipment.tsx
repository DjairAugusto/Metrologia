import equipment1 from '@/assets/equipment-1.jpg';
import equipment2 from '@/assets/equipment-2.jpg';

const Equipment = () => {
  const equipmentList = [
    {
      image: equipment1,
      category: 'Instrumentos de Medição',
      title: 'Equipamentos de Precisão',
      items: ['Micrômetros digitais', 'Paquímetros de alta precisão', 'Termômetros calibrados', 'Manômetros padrão'],
    },
    {
      image: equipment2,
      category: 'Equipamentos Laboratoriais',
      title: 'Análise e Controle',
      items: ['Centrífugas clínicas', 'Balanças analíticas', 'Banhos termostáticos', 'Micropipetas automáticas'],
    },
  ];

  const specifications = [
    { label: 'Faixa de Temperatura', value: '-80°C a +300°C' },
    { label: 'Precisão de Massa', value: '0,001g a 50kg' },
    { label: 'Pressão', value: '0 a 700 mmHg' },
    { label: 'Volume', value: '0,5 μL a 10 mL' },
  ];

  return (
    <section id="equipamentos" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Equipamentos e Instrumentos
          </h2>
          <p className="text-lg text-muted-foreground">
            Laboratório equipado com tecnologia de ponta para calibração precisa
          </p>
        </div>

        {/* Equipment Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {equipmentList.map((equipment, index) => (
            <div
              key={index}
              className="bg-card rounded-xl overflow-hidden shadow-card hover:shadow-hover transition-smooth border border-border group"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={equipment.image}
                  alt={equipment.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-smooth duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-accent text-sm font-medium mb-1">
                    {equipment.category}
                  </div>
                  <h3 className="text-white text-xl font-semibold">
                    {equipment.title}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <ul className="space-y-2">
                  {equipment.items.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2 text-muted-foreground">
                      <span className="text-primary mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Specifications */}
        <div className="bg-card rounded-xl p-8 shadow-card border border-border">
          <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
            Especificações Técnicas
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {specifications.map((spec, index) => (
              <div key={index} className="text-center p-6 rounded-lg bg-secondary/50">
                <div className="text-sm text-muted-foreground mb-2">{spec.label}</div>
                <div className="text-xl font-bold text-primary">{spec.value}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">
              Todos os equipamentos com rastreabilidade certificada pelo INMETRO e RBC
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Equipment;
