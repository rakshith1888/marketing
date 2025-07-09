import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { Link } from "react-router-dom";

const Manufacturing = () => {
  const benefits = [
    {
      title: "Predictive Maintenance",
      description:
        "Use sensor data to reduce downtime and optimize repair schedules.",
    },
    {
      title: "Demand-Driven Planning",
      description:
        "Forecast demand and align production to market and customer signals.",
    },
    {
      title: "Inventory & Supply Chain Intelligence",
      description:
        "Track supplier performance, lead times, and inventory turnover in real time.",
    },
    {
      title: "Yield & Quality Analytics",
      description:
        "Analyze scrap, rework, and performance across shifts and production lines.",
    },
    {
      title: "Operational + Financial KPIs",
      description:
        "Correlate operational data with cost, margin, and ROI by plant.",
    },
    {
      title: "Workforce Efficiency",
      description:
        "Forecast staffing needs and boost productivity with AI-driven insights.",
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-br from-black via-[#1a0028] to-[#22003a] text-center overflow-hidden">
        <div className="absolute -inset-0 z-0 opacity-40 blur-3xl bg-gradient-radial from-brand-yellow/30 via-transparent to-brand-purple-dark/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-6">
            Smarter Manufacturing Starts with Groflex AI
          </h1>
          <p className="text-xl text-foreground opacity-80 mb-8">
            See how manufacturers use Groflex to reduce downtime, optimize
            production, and streamline supply chains in real time.
          </p>
          <Link
            to="/contactus"
            className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
          >
            Request a Demo
          </Link>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 px-6 bg-black">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-12 leading-snug pb-2">
            The Challenge for Manufacturing Teams
          </h2>
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Unexpected Equipment Downtime
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Unplanned failures lead to lost productivity and increased
                  maintenance costs.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Fragmented Supply Chain Data
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Disconnected systems hinder visibility across procurement,
                  inventory, and production.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Inaccurate Demand Forecasts
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Poor predictions result in excess inventory or unmet customer
                  expectations.
                </p>
              </div>
            </FuturisticCard>

            <FuturisticCard className="p-6 flex items-start gap-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-4 h-4 bg-brand-yellow rounded-full shadow-md animate-pulse" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  No Plant-Level Financial Insights
                </h3>
                <p className="text-sm text-foreground/70 leading-relaxed">
                  Finance teams lack visibility into real-time cost and
                  efficiency metrics.
                </p>
              </div>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 bg-gradient-to-t from-black via-[#0a0014] to-black px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gradient mb-16">
            Where Groflex Comes In
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item, idx) => (
              <FuturisticCard
                key={idx}
                className="p-6 h-full flex flex-col justify-between"
              >
                <div>
                  <h3 className="text-xl font-semibold text-gradient mb-3">
                    {item.title}
                  </h3>
                  <p className="text-sm text-foreground opacity-75">
                    {item.description}
                  </p>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 bg-black">
        <FuturisticCard
          variant="neon"
          className="max-w-3xl mx-auto text-center p-12"
        >
          <blockquote className="text-xl md:text-2xl italic text-foreground opacity-80 mb-6 leading-relaxed">
            “With Groflex, we cut downtime by 30% and identified $1.2M in hidden
            inventory waste. It’s transformed how we run our operations.”
          </blockquote>
          <p className="text-sm text-foreground/60 font-semibold">
            — COO, Global Manufacturer
          </p>
        </FuturisticCard>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-r from-brand-purple to-brand-coral text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-10">
          Ready to modernize your manufacturing strategy?
        </h2>
        <Link
          to="/contactus"
          className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-xl hover:bg-gray-900 transition"
        >
          Talk to Sales
        </Link>
      </section>
    </Layout>
  );
};

export default Manufacturing;



// import Layout from "../components/Layout";
// import FuturisticCard from "../components/FuturisticCard";
// import { Link } from "react-router-dom";
// import {
//   Factory,
//   AlertCircle,
//   BarChart3,
//   Cpu,
//   Users,
//   Package,
// } from "lucide-react";

// const Manufacturing = () => {
//   const benefits = [
//     {
//       title: "Predictive Maintenance",
//       description:
//         "Use sensor data to reduce downtime and optimize repair schedules.",
//       icon: <Cpu className="w-6 h-6 text-brand-purple" />,
//     },
//     {
//       title: "Demand-Driven Planning",
//       description:
//         "Forecast demand and align production to market and customer signals.",
//       icon: <BarChart3 className="w-6 h-6 text-brand-purple" />,
//     },
//     {
//       title: "Inventory & Supply Chain Intelligence",
//       description:
//         "Track supplier performance, lead times, and inventory turnover in real time.",
//       icon: <Package className="w-6 h-6 text-brand-purple" />,
//     },
//     {
//       title: "Yield & Quality Analytics",
//       description:
//         "Analyze scrap, rework, and performance across shifts and production lines.",
//       icon: <Factory className="w-6 h-6 text-brand-purple" />,
//     },
//     {
//       title: "Operational + Financial KPIs",
//       description:
//         "Correlate operational data with cost, margin, and ROI by plant.",
//       icon: <BarChart3 className="w-6 h-6 text-brand-purple" />,
//     },
//     {
//       title: "Workforce Efficiency",
//       description:
//         "Forecast staffing needs and boost productivity with AI-driven insights.",
//       icon: <Users className="w-6 h-6 text-brand-purple" />,
//     },
//   ];

//   const challenges = [
//     {
//       title: "Unexpected Equipment Downtime",
//       description:
//         "Unplanned failures lead to lost productivity and increased maintenance costs.",
//     },
//     {
//       title: "Fragmented Supply Chain Data",
//       description:
//         "Disconnected systems hinder visibility across procurement, inventory, and production.",
//     },
//     {
//       title: "Inaccurate Demand Forecasts",
//       description:
//         "Poor predictions result in excess inventory or unmet customer expectations.",
//     },
//     {
//       title: "No Plant-Level Financial Insights",
//       description:
//         "Finance teams lack visibility into real-time cost and efficiency metrics.",
//     },
//   ];

//   return (
//     <Layout>
//       {/* Hero Section */}
//       <section className="relative bg-gradient-to-br from-[#0a0014] via-[#1a0028] to-black text-white py-24 px-6">
//         <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
//           <div>
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
//               Smarter Manufacturing Starts with{" "}
//               <span className="text-brand-purple">Groflex AI</span>
//             </h1>
//             <p className="text-xl text-white/80 mb-8">
//               Reduce downtime, optimize production, and streamline supply chains
//               with real-time intelligence.
//             </p>
//             <Link
//               to="/contactus"
//               className="bg-gradient-to-r from-brand-purple to-brand-coral text-black font-semibold px-8 py-3 rounded-full shadow-xl hover:scale-105 transition-transform"
//             >
//               Request a Demo
//             </Link>
//           </div>
//           <div className="relative">
//             <FuturisticCard variant="neon" className="overflow-hidden">
//               <img
//                 src="/lovable-uploads/homepage_image.png"
//                 alt="Groflex Demo"
//                 className="w-full h-full object-cover rounded-xl"
//               />
//             </FuturisticCard>
//             {/* <img
//               src="/lovable-uploads/ranks.png"
//               alt="F65 Badge"
//               className="absolute top-4 right-4 w-1/4 lg:w-1/3"
//             /> */}
//           </div>
//         </div>
//       </section>

//       {/* Challenges - now simpler and visually lighter */}
//       <section className="py-16 px-6 bg-[#0a0014]">
//         <div className="max-w-5xl mx-auto text-center">
//           <h2 className="text-2xl font-semibold text-white/80 mb-8 tracking-wide uppercase">
//             Key Industry Challenges
//           </h2>
//           <div className="grid md:grid-cols-2 gap-6 text-left">
//             {challenges.map((item, idx) => (
//               <div
//                 key={idx}
//                 className="bg-[#12001c] p-5 rounded-lg border border-white/10 shadow-sm"
//               >
//                 <div className="flex gap-4">
//                   <AlertCircle className="w-5 h-5 text-brand-yellow mt-1" />
//                   <div>
//                     <h3 className="text-base font-medium text-white mb-1">
//                       {item.title}
//                     </h3>
//                     <p className="text-sm text-white/60">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Benefits - now more visually dominant */}
//       <section className="py-28 px-6 bg-black relative">
//         <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-brand-purple via-brand-coral to-black blur-3xl pointer-events-none" />
//         <div className="max-w-7xl mx-auto text-center relative z-10">
//           <h2 className="text-5xl font-extrabold text-white mb-16 tracking-tight">
//             How Groflex Helps
//           </h2>
//           <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
//             {benefits.map((benefit, idx) => (
//               <FuturisticCard
//                 key={idx}
//                 className="p-6 transition-transform duration-300 hover:scale-[1.02] shadow-2xl bg-gradient-to-br from-[#17002c] to-[#0a0014]"
//                 variant="neon"
//               >
//                 <div className="flex gap-4 items-start">
//                   <div className="mt-1">{benefit.icon}</div>
//                   <div>
//                     <h3 className="text-lg font-bold text-white mb-1">
//                       {benefit.title}
//                     </h3>
//                     <p className="text-sm text-white/70">
//                       {benefit.description}
//                     </p>
//                   </div>
//                 </div>
//               </FuturisticCard>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Testimonial */}
//       <section className="py-24 px-6 bg-[#0a0014]">
//         <FuturisticCard
//           variant="neon"
//           className="max-w-3xl mx-auto text-center p-12 border border-brand-purple/30"
//         >
//           <blockquote className="text-xl md:text-2xl italic text-white/90 mb-6">
//             “With Groflex, we cut downtime by 30% and identified $1.2M in hidden
//             inventory waste. It’s transformed how we run our operations.”
//           </blockquote>
//           <p className="text-sm text-white/60 font-semibold">
//             — COO, Global Manufacturer
//           </p>
//         </FuturisticCard>
//       </section>

//       {/* Final CTA */}
//       <section className="py-20 px-6 bg-gradient-to-r from-brand-purple to-brand-coral text-center text-black">
//         <h2 className="text-3xl md:text-4xl font-bold mb-6">
//           Ready to modernize your manufacturing strategy?
//         </h2>
//         <Link
//           to="/contact"
//           className="bg-black text-white font-semibold text-lg py-4 px-8 rounded-full shadow-lg hover:bg-gray-900 transition"
//         >
//           Talk to Sales
//         </Link>
//       </section>
//     </Layout>
//   );
// };

// export default Manufacturing;

