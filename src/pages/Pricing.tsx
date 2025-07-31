import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import { TicketPercent, Check } from "lucide-react";
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

  const getPrice = (monthlyPrice: number) => {
    if (isYearly) {
      switch (monthlyPrice) {
        case 1199:
          return 999;
        case 299:
          return 249;
        default:
          return Math.round(monthlyPrice * 0.8); // 20% discount for yearly
      }
    }
    return monthlyPrice;
  };

  const plans = [
    {
      name: "Growth",
      monthlyPrice: 1199,
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
      monthlyPrice: 299,
      features: [
        { label: "Target Users", value: "Large enterprises, data-driven orgs" },
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
  ];

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
    { feature: "Users", growth: "5", enterprise: "Custom", isHeader: true },
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
      a: "Yes, we offer a 20% discount when you choose our yearly billing option. This applies to all plans.",
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

          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-2xl p-8 transition-all duration-300 hover:scale-105 bg-white/5 backdrop-blur-md border ${
                  plan.popular
                    ? "border-brand-purple/60 shadow-lg shadow-brand-purple/20"
                    : "border-white/20"
                }`}
              >
                {/* {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="w-96 h-8 bg-gradient-purple text-white px-4 py-1 rounded-full text-sm font-medium flex items-center justify-center gap-2">
                      <span className="flex items-center gap-1">
                        30% Discount on{" "}
                        <TicketPercent className="w-5 h-4 text-white" />
                      </span>
                      <button
                        onClick={handleCopy}
                        className="bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-xs transition flex items-center gap-1"
                      >
                        {copied ? (
                          <>
                            <Check className="w-3 h-3" />
                            Copied!
                          </>
                        ) : (
                          "WELCOMEAI30"
                        )}
                      </button>
                    </div>
                  </div>
                )} */}

                <div className="text-center mb-8">
                  <h2 className="text-5xl md:text-4xl font-bold mb-6">
                    <span className="text-gradient">{plan.name}</span>
                  </h2>
                  <div className="flex items-baseline justify-center mb-6">
                    {plan.name === "Enterprise" ? (
                      <span className="text-3xl font-bold text-white">
                        Custom
                      </span>
                    ) : (
                      <div className="flex flex-col items-start">
                        <div className="flex items-baseline space-x-1">
                          <div className="text-4xl font-bold text-white">
                            ${getPrice(plan.monthlyPrice)}
                          </div>
                          <div className="text-white text-m pt-1">
                            / month
                          </div>
                        </div>
                        <div className="text-white/60 text-[11px] mt-1">
                          30% Discount if billed yearly
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex justify-between items-start"
                    >
                      <span className="text-white/70 text-sm font-medium">
                        {feature.label}:
                      </span>
                      <span className="text-white text-sm font-semibold text-right ml-2">
                        {feature.value}
                      </span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={
                    plan.name === "Enterprise"
                      ? handleContactUs
                      : handleGetStarted
                  }
                  className="w-full py-3 rounded-full font-semibold transition-all duration-300 bg-gradient-to-r from-brand-purple to-brand-coral text-white hover:shadow-2xl"
                >
                  {plan.name === "Enterprise"
                    ? "Contact Us"
                    : "Free 30-day Trial"}
                </button>
              </div>
            ))}
          </div>

          {/* Pricing Table */}
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

          {/* FAQ Section */}
          <FuturisticCard variant="neon" className="p-6">
            <h2 className="text-xl font-bold text-gradient text-center mb-6">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/20 rounded-lg overflow-hidden"
                  >
                    <AccordionTrigger className="px-4 py-2 text-left hover:bg-brand-purple/20 hover:text-brand-cream transition-all duration-300 text-sm font-semibold text-white [&[data-state=open]]:bg-brand-purple/30 [&[data-state=open]]:text-brand-cream">
                      {faq.q}
                    </AccordionTrigger>
                    <AccordionContent className="px-4 pb-2 text-white/80 bg-white/5 text-sm">
                      <p>{faq.a}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </FuturisticCard>

          <div className="text-center mt-12">
            <h2 className="text-3xl font-bold text-gradient mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-white/80 mb-8">
              Join thousands of businesses already using Groflex
            </p>
            <button
              onClick={handleGetStarted}
              className="bg-gradient-to-r from-brand-purple to-brand-coral text-white font-semibold px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300"
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
