
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import SolutionHero from '../components/solutions/SolutionHero';
import SolutionTab from '../components/solutions/SolutionTab';
import IndustrySolutions from '../components/solutions/IndustrySolutions';
import QADemo from '../components/solutions/QADemo';
import FinalCTA from '../components/solutions/FinalCTA';
import { solutions } from '../data/solutionsData';

const Solutions = () => {
  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SolutionHero />

          {/* Tabbed Interface */}
          <FuturisticCard variant="neon" className="p-8">
            <Tabs defaultValue="business-leaders" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-12 bg-white/5 border border-white/10 h-auto">
                {solutions.map((solution) => (
                  <TabsTrigger 
                    key={solution.id}
                    value={solution.id} 
                    className="text-white data-[state=active]:bg-brand-purple/20 data-[state=active]:text-brand-cream hover:bg-brand-coral/20 hover:text-brand-cream transition-all duration-300 p-4 h-auto"
                  >
                    <div className="flex flex-col items-center space-y-2">
                      <span className="text-3xl">{solution.icon}</span>
                      <span className="font-semibold text-center leading-tight">{solution.title}</span>
                    </div>
                  </TabsTrigger>
                ))}
              </TabsList>

              {solutions.map((solution) => (
                <TabsContent key={solution.id} value={solution.id} className="mt-0">
                  <SolutionTab solution={solution} />
                </TabsContent>
              ))}
            </Tabs>
          </FuturisticCard>

          <IndustrySolutions />
          <QADemo />
          <FinalCTA />
        </div>
      </div>
    </Layout>
  );
};

export default Solutions;
