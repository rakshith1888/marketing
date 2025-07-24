
import Layout from '../components/Layout';
import FuturisticCard from '../components/FuturisticCard';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import SolutionHero from '../components/solutions/SolutionHero';
import SolutionTab from '../components/solutions/SolutionTab';
import IndustrySolutions from '../components/solutions/IndustrySolutions';
import QADemo from '../components/solutions/QADemo';
import FinalCTA from '../components/solutions/FinalCTA';


const solutions = [
  {
    id: "business-leaders",
    title: "Business Leaders",
    subtitle: "Strategic Decision Making",
    pain: "Can't get cross-functional visibility",
    gain: "Forecasting + ROI metrics on day 1",
    description:
      "See where you're heading and what to do about it before others do.",
    icon: "👔",
    features: [
      "Executive Dashboards",
      "Risk Forecasting",
      "ROI Tracking",
      "Strategic Planning",
    ],
    cta: "See How Groflex Drives ROI",
    metrics: [
      "85% faster decision making",
      "3x ROI visibility",
      "67% reduction in strategic risks",
    ],
  },
  {
    id: "bi-managers",
    title: "BI Managers",
    subtitle: "Operational Intelligence",
    pain: "Reporting fatigue + bottlenecks",
    gain: "Instant insights with no analyst lag",
    description:
      "Deliver predictive dashboards that tell leadership what matters.",
    icon: "📊",
    features: [
      "Automated Reporting",
      "Predictive Analytics",
      "Team Collaboration",
      "Data Governance",
    ],
    cta: "Explore the Platform",
    metrics: [
      "90% less manual reporting",
      "5x faster insights delivery",
      "60% analyst time savings",
    ],
  },
  {
    id: "analysts",
    title: "Analysts",
    subtitle: "Advanced Analytics",
    pain: "Manual dashboards & reactive reporting",
    gain: "Self-serve AI. Ask, predict, act.",
    description: "Automate insight delivery and eliminate low-impact work.",
    icon: "🔍",
    features: [
      "Natural Language Queries",
      "Automated Insights",
      "Model Building",
      "Data Exploration",
    ],
    cta: "Try It Free",
    metrics: [
      "70% reduction in manual work",
      "4x faster analysis",
      "95% query automation",
    ],
  },
];

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
