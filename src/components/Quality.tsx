import { Shield, FileCheck, Award, TrendingUp } from 'lucide-react';

const Quality = () => {
  // Certifications and specific accreditation references removed per client request

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

        <div className="max-w-4xl mx-auto px-2 md:px-0">
          <div className="bg-card rounded-xl p-8 shadow-card border border-border text-center">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Práticas de Qualidade
            </h3>
            <p className="text-muted-foreground">
              Mantemos procedimentos técnicos rigorosos, controle de processo e manutenção
              preventiva para assegurar medições confiáveis e consistentes em todos os serviços.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quality;
