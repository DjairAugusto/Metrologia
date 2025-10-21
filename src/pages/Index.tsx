import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Services from '@/components/Services';
import Equipment from '@/components/Equipment';
import Quality from '@/components/Quality';
import Applications from '@/components/Applications';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Services />
        <Equipment />
        <Quality />
        <Applications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
