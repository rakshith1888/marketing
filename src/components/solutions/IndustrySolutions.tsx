import { useState } from "react";
import { Link } from "react-router-dom";
import FuturisticCard from "../FuturisticCard";

const allSolutions = {
  Industry: [
    {
      name: "Finance",
      icon: "💰",
      slug: "finance",
      description: "Risk assessment and portfolio analytics",
    },
    {
      name: "Manufacturing",
      icon: "🏭",
      slug: "manufacturing",
      description: "Supply chain optimization and quality metrics",
    },
    {
      name: "E-commerce",
      icon: "🛒",
      slug: "e-commerce",
      description: "Customer insights and sales forecasting",
    },
    {
      name: "Healthcare",
      icon: "🏥",
      slug: "healthcare",
      description: "Patient outcomes and operational efficiency",
    },
    {
      name: "Financial Services",
      icon: "🏦",
      slug: "financial-services",
      description: "Compliance monitoring and client analytics",
    },
    {
      name: "Retail",
      icon: "🏪",
      slug: "retail",
      description: "Inventory management and customer behavior",
    },
  ],
  Function: [
    {
      name: "Marketing",
      icon: "📣",
      slug: "marketing",
      description: "Campaign performance and audience analytics",
    },
    {
      name: "Sales",
      icon: "💼",
      slug: "sales",
      description: "Pipeline management and conversion optimization",
    },
    {
      name: "Operations",
      icon: "⚙️",
      slug: "operations",
      description: "Process optimization and performance tracking",
    },
    {
      name: "Human Resources",
      icon: "📊",
      slug: "human-resources",
      description: "Align workforce decisions with business outcomes",
    },
    {
      name: "Finance and Accounting",
      icon: "🎧",
      slug: "finance-and-accounting",
      description:
        "Shift from reactive reporting to proactive financial management",
    },
    {
      name: "IT",
      icon: "🧪",
      slug: "it",
      description: "Turn IT from ticket triage to strategic partner",
    },
  ],
  Role: [
    {
      name: "Business Leaders",
      icon: "👔",
      slug: "business-leaders",
      description: "High-level strategy and performance dashboards",
    },
    {
      name: "BI Managers",
      icon: "🧠",
      slug: "bi-managers",
      description: "Insight automation and governance tools",
    },
    {
      name: "Data Analysts",
      icon: "🔍",
      slug: "data-analysts",
      description: "Advanced analytics and model building",
    },
  ],
};

const categories = ["Industry", "Function", "Role"];

const IndustrySolutions = () => {
  const [activeCategory, setActiveCategory] = useState("Industry");

  return (
    <section className="mt-24 px-4 sm:px-6">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold text-gradient mb-2">
          Clarity for Everyone No Matter Your Role, Industry, or Function"
        </h2>
        <p className="text-white/80 text-lg">
          Explore Groflex by Industry, Function, or Role
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300
              ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-brand-purple to-brand-coral text-white shadow-md"
                  : "bg-white/10 text-white/70 hover:bg-white/20"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allSolutions[activeCategory as keyof typeof allSolutions].map(
          (sol, idx) => (
            <FuturisticCard
              key={idx}
              className="p-6 text-center hover:scale-[1.03] hover:shadow-xl transition-all duration-300"
            >
              <div className="text-4xl mb-4">{sol.icon}</div>
              <h3 className="text-brand-cream font-semibold text-lg mb-2">
                {sol.name}
              </h3>
              <p className="text-white/70 text-sm min-h-[48px]">
                {sol.description}
              </p>
              <Link to={`/${sol.slug}`} className="inline-block">
                <button
                  className="mt-5 px-4 py-2 text-sm bg-gradient-to-r from-brand-purple to-brand-coral text-white rounded-full hover:shadow-lg transition-all"
                  title={`View ${sol.name} use case`}
                >
                  See Use Case
                </button>
              </Link>
            </FuturisticCard>
          )
        )}
      </div>
    </section>
  );
};

export default IndustrySolutions;
