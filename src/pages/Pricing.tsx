import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../components/ui/table";

const Pricing = () => {
  const [isYearly, setIsYearly] = useState(true);
  const [copied, setCopied] = useState(false);
  const [region, setRegion] = useState("US"); // Default to US pricing
  const navigate = useNavigate();

  const handleGetStarted = () => {
    window.open("https://app.groflex.ai", "_blank");
  };

  const handleContactUs = () => {
    navigate("/Contactus");
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("WELCOMEAI30");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  // yearly discount logic
  const getPrice = (monthlyPrice: number, region?: string) => {
    if (monthlyPrice === 0) return "Custom";
    if (isYearly) {
      // return Math.round(monthlyPrice * 0.8); // 20% discount
    }
    if (region === "India") {
      return monthlyPrice.toLocaleString("en-IN")
    }
    return monthlyPrice;
  };

  // Plans by region
  const plansByRegion: Record<string, any[]> = {
    US: [
      {
        name: "Growth",
        monthlyPrice: 999,
        currency: "$",
        features: [
          { label: "Target Users", value: "Mid-sized businesses" },
          { label: "Value Focus", value: "Productivity & automation" },
          { label: "Users", value: "5" },
          { label: "AI Questions / Month", value: "5,000" },
          { label: "Data Size", value: "15GB" },
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 0,
        currency: "$",
        features: [
          {
            label: "Target Users",
            value: "Large enterprises, data-driven orgs",
          },
          {
            label: "Value Focus",
            value: "Strategic impact + full customization",
          },
          { label: "Users", value: "Custom" },
          { label: "AI Questions / Month", value: "Custom" },
          { label: "Data Size", value: "Custom" },
        ],
        popular: false,
      },
    ],
    India: [
      {
        name: "Growth",
        monthlyPrice: 60000,
        currency: "₹",
        features: [
          { label: "Target Users", value: "Mid-sized businesses" },
          { label: "Value Focus", value: "Productivity & automation" },
          { label: "Users", value: "5" },
          { label: "AI Questions / Month", value: "5,000" },
          { label: "Data Size", value: "15GB" },
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 0,
        currency: "₹",
        features: [
          { label: "Target Users", value: "Large enterprises" },
          {
            label: "Value Focus",
            value: "Strategic impact + full customization",
          },
          { label: "Users", value: "Custom" },
          { label: "AI Questions / Month", value: "Custom" },
          { label: "Data Size", value: "Custom" },
        ],
        popular: false,
      },
    ],
    EU: [
      {
        name: "Growth",
        monthlyPrice: 999,
        currency: "€",
        features: [
          { label: "Target Users", value: "Mid-sized businesses" },
          { label: "Value Focus", value: "Productivity & automation" },
          { label: "Users", value: "5" },
          { label: "AI Questions / Month", value: "5,000" },
          { label: "Data Size", value: "15GB" },
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 0,
        currency: "€",
        features: [
          { label: "Target Users", value: "Large enterprises" },
          {
            label: "Value Focus",
            value: "Strategic impact + full customization",
          },
          { label: "Users", value: "Custom" },
          { label: "AI Questions / Month", value: "Custom" },
          { label: "Data Size", value: "Custom" },
        ],
        popular: false,
      },
    ],
    GCC: [
     {
        name: "Growth",
        monthlyPrice: 999,
        currency: "€",
        features: [
          { label: "Target Users", value: "Mid-sized businesses" },
          { label: "Value Focus", value: "Productivity & automation" },
          { label: "Users", value: "5" },
          { label: "AI Questions / Month", value: "5,000" },
          { label: "Data Size", value: "15GB" },
        ],
        popular: true,
      },
      {
        name: "Enterprise",
        monthlyPrice: 0,
        currency: "د.إ",
        features: [
          { label: "Target Users", value: "Large enterprises" },
          {
            label: "Value Focus",
            value: "Strategic impact + full customization",
          },
          { label: "Users", value: "Custom" },
          { label: "AI Questions / Month", value: "Custom" },
          { label: "Data Size", value: "Custom" },
        ],
        popular: false,
      },
    ],
  };

  const tableFeatures = [
    { feature: "Data Storage", growth: "", enterprise: "", isHeader: true },
    {
      feature: "Files, Relational Databases",
      growth: "Yes",
      enterprise: "Yes",
    },
    { feature: "Data Size", growth: "15GB", enterprise: "Custom" },
    {
      feature: "Data Preparation and Synthesis",
      growth: "",
      enterprise: "",
      isHeader: true,
    },
    { feature: "No Code Data Prep", growth: "Yes", enterprise: "Yes" },
    { feature: "Data Pipeline Scheduling", growth: "Yes", enterprise: "Yes" },
    { feature: "Data Model Schemas", growth: "No", enterprise: "Yes" },
    { feature: "Data Customization", growth: "Yes", enterprise: "Yes" },
    { feature: "Data Quality Checks", growth: "Yes", enterprise: "Yes" },
    {
      feature: "Insights and Visualizations",
      growth: "",
      enterprise: "",
      isHeader: true,
    },
    {
      feature: "KPI tracking and Management",
      growth: "Yes",
      enterprise: "Yes",
    },
    { feature: "Dashboards and Insights", growth: "Yes", enterprise: "Yes" },
    {
      feature: "Trends, Patterns, Impact Analytics",
      growth: "Yes",
      enterprise: "Yes",
    },
    { feature: "Narratives", growth: "Yes", enterprise: "Yes" },
    {
      feature: "Predictions and Prescriptions",
      growth: "",
      enterprise: "",
      isHeader: true,
    },
    { feature: "Predictions with Insights", growth: "Yes", enterprise: "Yes" },
    { feature: "What If Analysis", growth: "Yes", enterprise: "Yes" },
    { feature: "Consolidated Reports", growth: "Yes", enterprise: "Yes" },
    { feature: "Custom code modeling", growth: "No", enterprise: "Yes" },
    {
      feature: "Agentic AI and Actions",
      growth: "",
      enterprise: "",
      isHeader: true,
    },
    { feature: "Conversations with Data", growth: "Yes", enterprise: "Yes" },
    {
      feature: "Create Actions, Track and Manage",
      growth: "Yes",
      enterprise: "Yes",
    },
    {
      feature: "External Actions Tracker Integration",
      growth: "No",
      enterprise: "Yes",
    },
    {
      feature: "360 Degree view of Analytics based on Actions",
      growth: "No",
      enterprise: "Yes",
    },
    {
      feature: "Create Stories from Insights and Actions",
      growth: "No",
      enterprise: "Yes",
    },
    { feature: "Create Notes", growth: "No", enterprise: "Yes" },
    {
      feature: "Intelligent Chatbot as assistant",
      growth: "Yes",
      enterprise: "Yes",
    },
    { feature: "AI Questions", growth: "15000", enterprise: "Custom" },
    { feature: "Terms and Users", growth: "", enterprise: "", isHeader: true },
    { feature: "Users", growth: "5", enterprise: "Custom" },
    { feature: "Share Dashboards", growth: "Yes", enterprise: "Yes" },
    { feature: "Creation, Sharing of Notes", growth: "No", enterprise: "Yes" },
  ];

  const faqs = [
    {
      q: "Is there a free trial available?",
      a: "We offer a 30-day free trial for all plans. No credit card required.",
    },
    {
      q: "What payment methods do you accept?",
      a: "We accept all major credit cards, PayPal, and bank transfers for enterprise plans.",
    },
    {
      q: "Can I cancel anytime?",
      a: "Yes, you can cancel your subscription at any time. No long-term contracts.",
    },
    {
      q: "Do you offer discounts for annual subscriptions?",
      a: "Yes, we offer a 30% discount when you choose our yearly billing option. This applies to all plans.",
    },
    {
      q: "Is customer support included in all plans?",
      a: "All plans include customer support. Pro plans get email + chat support, and Enterprise plans get priority support with dedicated onboarding.",
    },
  ];

  return (
    <Layout>
      <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Choose the perfect plan for your business needs. All plans include
              our core features.
            </p>
          </div>

          {/* Region Buttons */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-full bg-white/10 p-2 shadow-lg gap-2">
              <button
                onClick={() => setRegion("US")}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                  region === "US"
                    ? "bg-gradient-to-r from-brand-purple to-brand-coral text-white"
                    : "text-white/80 hover:bg-white/20"
                }`}
              >
                US{" "}
                <img
                  src="/lovable-uploads/usa.png"
                  alt="US Flag"
                  className="w-8 h-6 inline ml-2"
                />
              </button>
              <button
                onClick={() => setRegion("India")}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                  region === "India"
                    ? "bg-gradient-to-r from-brand-purple to-brand-coral text-white"
                    : "text-white/80 hover:bg-white/20"
                }`}
              >
                India{" "}
                <img
                  src="/lovable-uploads/india.webp"
                  alt="India Flag"
                  className="w-8 h-6 inline ml-2"
                />
              </button>
              <button
                onClick={() => setRegion("EU")}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                  region === "EU"
                    ? "bg-gradient-to-r from-brand-purple to-brand-coral text-white"
                    : "text-white/80 hover:bg-white/20"
                }`}
              >
                EU{" "}
                <img
                  src="/lovable-uploads/europe.png"
                  alt="EU Flag"
                  className="w-9 h-7 inline ml-2"
                />
              </button>
              <button
                onClick={() => setRegion("GCC")}
                className={`px-6 py-3 rounded-full text-base font-semibold transition-all ${
                  region === "GCC"
                    ? "bg-gradient-to-r from-brand-purple to-brand-coral text-white"
                    : "text-white/80 hover:bg-white/20"
                }`}
              >
                GCC{" "}
                <img
                  src="/lovable-uploads/gcc.jpg"
                  alt="GCC Flag"
                  className="w-9 h-7 inline ml-2"
                />
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          {/* Pricing Cards */}
          {region === "GCC" ? (
            <div className="mb-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {plansByRegion[region].map((plan, i) => (
                <div
                  key={i}
                  className="w-full max-w-md relative rounded-2xl p-8 bg-white/5 border border-white/20 backdrop-blur-md hover:scale-105 transition-all flex flex-col"
                >
                  <div className="text-center mb-9">
                    <h2 className="text-4xl font-bold mb-4 text-gradient">
                      {plan.name}
                    </h2>
                    <div className="text-3xl font-bold text-white min-h-[4rem] flex items-center justify-center">
                      Custom Pricing
                    </div>
                  </div>
                  <div className="space-y-4 mb-6 flex-grow">
                    {plan.features.map((f: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm text-white/80"
                      >
                        <span>{f.label}:</span>
                        <span className="font-semibold text-white">
                          {f.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={handleContactUs}
                    className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-brand-purple to-brand-coral text-white hover:shadow-2xl"
                  >
                    Contact Us
                  </button>
                </div>
              ))}
            </div>
          ) : (
            <div className="mb-16 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              {plansByRegion[region].map((plan, i) => (
                <div
                  key={i}
                  className="relative rounded-2xl p-8 bg-white/5 border border-white/20 backdrop-blur-md hover:scale-105 transition-all flex flex-col"
                >
                  <div className="text-center mb-9">
                    <h2 className="text-4xl font-bold mb-4 text-gradient">
                      {plan.name}
                    </h2>
                    {plan.monthlyPrice === 0 ? (
                      <div className="text-3xl font-bold text-white min-h-[4rem] flex items-center justify-center">
                        Custom Pricing
                      </div>
                    ) : (
                      <div className="flex flex-col items-center min-h-[4rem] justify-center">
                        <div className="flex items-baseline justify-center">
                          <div className="text-4xl font-bold text-white">
                            {plan.currency}
                            {getPrice(plan.monthlyPrice, region)}
                          </div>
                          <span className="text-white/80 ml-1">/ month</span>
                        </div>
                        <div className="text-white/60 text-xs mt-1">
                          30% discount if billed yearly
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="space-y-4 mb-6 flex-grow">
                    {plan.features.map((f: any, idx: number) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm text-white/80"
                      >
                        <span>{f.label}:</span>
                        <span className="font-semibold text-white">
                          {f.value}
                        </span>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={
                      plan.monthlyPrice === 0
                        ? handleContactUs
                        : handleGetStarted
                    }
                    className="w-full py-3 rounded-full font-semibold bg-gradient-to-r from-brand-purple to-brand-coral text-white hover:shadow-2xl"
                  >
                    {plan.monthlyPrice === 0
                      ? "Contact Us"
                      : "Free 30-day Trial"}
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Compare Table */}
          <FuturisticCard className="p-8 mb-16">
            <h2 className="text-2xl font-bold text-gradient text-center mb-8">
              Compare Plans
            </h2>
            <div className="overflow-x-auto">
              <Table className="w-full">
                <TableHeader>
                  <TableRow className="border-brand-purple/30">
                    <TableHead className="text-white font-semibold text-lg">
                      Feature
                    </TableHead>
                    <TableHead className="text-white font-semibold text-lg">
                      Growth
                    </TableHead>
                    <TableHead className="text-white font-semibold text-lg">
                      Enterprise
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tableFeatures.map((row, index) => (
                    <TableRow
                      key={index}
                      className={
                        row.isHeader
                          ? "border-brand-purple/40"
                          : "border-brand-purple/20"
                      }
                    >
                      <TableCell
                        className={`${
                          row.isHeader
                            ? "text-brand-coral font-bold text-lg bg-gradient-to-r from-brand-purple/20 to-brand-coral/20 py-4"
                            : "text-white font-medium pl-6"
                        }`}
                      >
                        {row.feature}
                      </TableCell>
                      <TableCell
                        className={
                          row.isHeader
                            ? "bg-gradient-to-r from-brand-purple/20 to-brand-coral/20"
                            : "text-white/80"
                        }
                      >
                        {row.growth}
                      </TableCell>
                      <TableCell
                        className={
                          row.isHeader
                            ? "bg-gradient-to-r from-brand-purple/20 to-brand-coral/20"
                            : "text-white/80"
                        }
                      >
                        {row.enterprise}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </FuturisticCard>

          {/* FAQ */}
          <FuturisticCard variant="neon" className="p-6">
            <h2 className="text-xl font-bold text-center text-gradient mb-4">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible>
              {faqs.map((f, i) => (
                <AccordionItem key={i} value={`faq-${i}`}>
                  <AccordionTrigger>{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </FuturisticCard>

          {/* CTA */}
          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-6">
              Join thousands of businesses already using Groflex
            </p>
            <button
              onClick={handleGetStarted}
              className="px-8 py-4 bg-gradient-to-r from-brand-purple to-brand-coral text-white rounded-full font-semibold hover:shadow-2xl"
            >
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pricing;
