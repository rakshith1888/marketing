import Layout from "../components/Layout";
import FuturisticCard from "../components/FuturisticCard";
import {
  ArrowRight,
  Zap,
  Brain,
  Target,
  Users,
  TrendingUp,
  Shield,
  CheckCircle,
  MessageSquare,
  BarChart3,
  Database,
  Cloud,
  ChevronDown,
  Play,
  Pause,
  Briefcase,
  Presentation,
  ChartBar,
  Mail,
  Calendar,
  Snowflake,
  Youtube,
  X,
  Video,
  Volume2,
  VolumeX,
  Volume1,
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  
const partnershipLogos = [
  "/lovable-uploads/YECTRAm.png",
  "/lovable-uploads/K67m.png",
  "/lovable-uploads/INSEADm.png",
  "/lovable-uploads/INSEAD2m.png",
  "/lovable-uploads/IESEm.png",
  "/lovable-uploads/BLAUm.png",
  "/lovable-uploads/logo_stationF.png",
  "/lovable-uploads/logo_launchpad.png",
  "/lovable-uploads/logo_microsoft_for_startups.png",
  "/lovable-uploads/YECTRAm.png",
  "/lovable-uploads/K67m.png",
  "/lovable-uploads/INSEADm.png",
  "/lovable-uploads/INSEAD2m.png",
  "/lovable-uploads/IESEm.png",
  "/lovable-uploads/BLAUm.png",
  "/lovable-uploads/logo_stationF.png",
  "/lovable-uploads/logo_launchpad.png",
  "/lovable-uploads/logo_microsoft_for_startups.png",
];

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [isPlayingHero, setIsPlayingHero] = useState(true);
  const [showHeroButton, setShowHeroButton] = useState(false);
  const [isPlayingDemo, setIsPlayingDemo] = useState(false);
  const [showDemoButton, setShowDemoButton] = useState(true);
  const [volume, setVolume] = useState(1);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSubtitles, setShowSubtitles] = useState(false);
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const demoVideoRef = useRef<HTMLVideoElement>(null);
  const demoSectionRef = useRef<HTMLDivElement>(null);
  const heroButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const demoButtonTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleGetStarted = () => {
    window.open("https://app.groflex.ai", "_blank");
  };

  const navigate = useNavigate();

  const handleBookDemo = () => {
    navigate("/Contactus");
  };

  const toggleHeroVideoPlay = () => {
    if (heroVideoRef.current) {
      if (isPlayingHero) {
        heroVideoRef.current.pause();
      } else {
        heroVideoRef.current.play();
      }
      setIsPlayingHero(!isPlayingHero);
      setShowHeroButton(true);

      if (heroButtonTimeoutRef.current) {
        clearTimeout(heroButtonTimeoutRef.current);
      }

      heroButtonTimeoutRef.current = setTimeout(() => {
        setShowHeroButton(false);
      }, 2000);
    }
  };

  const toggleDemoVideoPlay = () => {
    if (demoVideoRef.current) {
      if (isPlayingDemo) {
        demoVideoRef.current.pause();
      } else {
        demoVideoRef.current.play();
      }
      setIsPlayingDemo(!isPlayingDemo);
      setShowDemoButton(true);

      if (demoButtonTimeoutRef.current) {
        clearTimeout(demoButtonTimeoutRef.current);
      }

      demoButtonTimeoutRef.current = setTimeout(() => {
        setShowDemoButton(!isPlayingDemo);
      }, 2000);
    }
  };

  const seekForward = () => {
    if (demoVideoRef.current) {
      demoVideoRef.current.currentTime = Math.min(
        demoVideoRef.current.currentTime + 10,
        demoVideoRef.current.duration
      );
      setCurrentTime(demoVideoRef.current.currentTime);
    }
  };

  const seekBackward = () => {
    if (demoVideoRef.current) {
      demoVideoRef.current.currentTime = Math.max(
        demoVideoRef.current.currentTime - 10,
        0
      );
      setCurrentTime(demoVideoRef.current.currentTime);
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value);
    if (demoVideoRef.current) {
      demoVideoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(newVolume === 0);
    }
  };

  const toggleMute = () => {
    if (demoVideoRef.current) {
      demoVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
      if (!isMuted) {
        setVolume(0);
      } else {
        setVolume(1);
        demoVideoRef.current.volume = 1;
      }
    }
  };

  const increaseVolume = () => {
    if (demoVideoRef.current) {
      const newVolume = Math.min(volume + 0.1, 1);
      demoVideoRef.current.volume = newVolume;
      setVolume(newVolume);
      setIsMuted(false);
    }
  };

  const decreaseVolume = () => {
    if (demoVideoRef.current) {
      const newVolume = Math.max(volume - 0.1, 0);
      demoVideoRef.current.volume = newVolume;
      setVolume(newVolume);
      if (newVolume === 0) setIsMuted(true);
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    if (demoVideoRef.current) {
      demoVideoRef.current.currentTime = time;
      setCurrentTime(time);
    }
  };

  const toggleSubtitles = () => {
    setShowSubtitles(!showSubtitles);
  };

  useEffect(() => {
    const video = demoVideoRef.current;
    if (video) {
      const updateTime = () => setCurrentTime(video.currentTime);
      const updateDuration = () => setDuration(video.duration);
      video.addEventListener("timeupdate", updateTime);
      video.addEventListener("loadedmetadata", updateDuration);
      return () => {
        video.removeEventListener("timeupdate", updateTime);
        video.removeEventListener("loadedmetadata", updateDuration);
      };
    }
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isPlayingDemo) {
          setShowDemoButton(true);
        }
      },
      { threshold: 0.5 }
    );

    if (demoSectionRef.current) {
      observer.observe(demoSectionRef.current);
    }

    return () => {
      if (demoSectionRef.current) {
        observer.unobserve(demoSectionRef.current);
      }
    };
  }, [isPlayingDemo]);

  useEffect(() => {
    return () => {
      if (heroButtonTimeoutRef.current) {
        clearTimeout(heroButtonTimeoutRef.current);
      }
      if (demoButtonTimeoutRef.current) {
        clearTimeout(demoButtonTimeoutRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Predictive Forecasts",
      description:
        "Built-in ML models forecast risks and opportunities before they happen",
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Natural Language Q&A",
      description:
        "Ask business questions in plain English, get context-aware recommendations",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Prescriptive Next Steps",
      description: "Suggested next-best actions with decision framing tools",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Sync",
      description:
        "Live data updates ensure your decisions are based on current information",
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Multi-Cloud Data Engine",
      description: "Connect and analyze data from any source, anywhere",
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI for Everyone",
      description:
        "Natural language interface works across all roles from executives to analysts",
    },
  ];

  const audienceCards = [
    {
      title: "Executives",
      description:
        "Align the organization around what matters and act before issues escalate",
      icon: <Briefcase className="w-12 h-12" />,
    },
    {
      title: "BI Managers",
      description: "Deliver recommendations not just charts",
      icon: <Presentation className="w-12 h-12" />,
    },
    {
      title: "Analysts",
      description: "Automate insight delivery and focus on high value work",
      icon: <ChartBar className="w-12 h-12" />,
    },
  ];

  const testimonials = [
    {
      quote:
        "Groflex helped us identify market shifts 3 months ahead of our competition",
      author: "Sarah C.",
      role: "VP Strategy",
      company: "Business Strategies 2k Inc.",
    },
    {
      quote:
        "Finally, dashboards that tell us what to do, not just what happened",
      author: "Michael R.",
      role: "Director of Business Intelligence",
      company: "DataFlow LLC",
    },
    {
      quote: "I spend 80% less time on reports and 80% more time on insights",
      author: "Emily W.",
      role: "Senior Data Analyst",
      company: "MarketROI Incorporated",
    },
  ];

  const integrations = [
    { name: "Google", logo: "/lovable-uploads/google.png" },
    { name: "Salesforce", logo: "/lovable-uploads/salesforce.png" },
    { name: "{Postgresql}", logo: "/lovable-uploads/postgresql.png" },
    { name: "Looker", logo: "/lovable-uploads/looker.png" },
    { name: "Microsoft", logo: "/lovable-uploads/microsoft.png" },
    { name: "AWS", logo: "/lovable-uploads/aws.png" },
    { name: "MongoDB ", logo: "/lovable-uploads/MongoDB.png" },
    { name: "Tableau", logo: "/lovable-uploads/tableau.png" },
  ];

  const faqs = [
    {
      question: "How does Groflex's AI explainability work?",
      answer:
        "Our AI provides transparent reasoning for every recommendation, showing you the data sources, confidence levels, and logic behind each suggestion.",
    },
    {
      question: "What data integrations does Groflex support?",
      answer:
        "Groflex connects to 150+ data sources including CRMs, ERPs, marketing platforms, cloud databases, and custom APIs.",
    },
    {
      question: "How does this benefit our BI team specifically?",
      answer:
        "BI teams can automate report generation, focus on strategic analysis, and deliver prescriptive insights that drive executive action.",
    },
    {
      question: "Is our data secure with Groflex?",
      answer:
        "Yes, we use enterprise-grade security with SOC 2 compliance, end-to-end encryption.",
    },
    {
      question: "How quickly can we see results?",
      answer:
        "Most customers see predictive insights within 2 weeks of connecting their first data source.",
    },
    {
      question: "What makes Groflex different from traditional BI tools?",
      answer:
        "Unlike traditional BI that shows what happened, Groflex predicts what will happen and prescribes what you should do about it.",
    },
  ];

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  const connectApps = [
    { name: "Teams", icon: <Users className="w-8 h-8" /> },
    { name: "Gmail", icon: <Mail className="w-8 h-8" /> },
    { name: "Snowflake", icon: <Database className="w-8 h-8" /> },
  ];

  const connectedPlatforms = [
    { name: "Teams", icon: <Users className="w-12 h-12" /> },
    { name: "Snowflake", icon: <Snowflake className="w-12 h-12" /> },
    { name: "Google Meet", icon: <Video className="w-12 h-12" /> },
    { name: "YouTube", icon: <Youtube className="w-12 h-12" /> },
    { name: "X", icon: <X className="w-12 h-12" /> },
  ];

  return (
    <Layout>
      {/* 1. HERO + VIDEO SECTION - SIDE BY SIDE LAYOUT */}
      <div className="relative overflow-hidden cyber-grid">
        {/* Floating orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-coral rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "3s" }}
        ></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-gradient-purple rounded-full blur-3xl opacity-20 animate-float"></div>
        <div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-gradient-coral rounded-full blur-3xl opacity-20 animate-float"
          style={{ animationDelay: "2s" }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Side by Side Content */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center py-16 lg:py-24">
            {/* Left Side - Hero Content */}
            <div className="text-left space-y-8">
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gradient">The Business OS </span>
                <br />
                <span className="text-white"> for Decisive Growth</span>
              </h1>

              <p className="text-lg md:text-xl lg:text-2xl text-white/80 leading-relaxed max-w-2xl">
                Predict what’s coming and turn insight into action. Groflex
                <br />
                Connects your data and systems to power smarter decisions.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={handleGetStarted}
                  className="bg-gradient-brand text-black font-semibold px-8 py-4 text-lg rounded-full hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  Start Free Trial
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                </button>
                <Link to="/products">
                  <button className="bg-gradient-purple text-white font-semibold px-8 py-4 text-lg rounded-full hover:shadow-lg hover:shadow-brand-purple/25 transition-all duration-300 w-full">
                    See How It Works
                  </button>
                </Link>
              </div>

              {/* badge */}
              <div>
                <a
                  href="https://www.f6s.com/groflex-technology1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/lovable-uploads/rank2.png"
                    alt="F65 Top Company Badge"
                    className="w-1/2 mr-auto mt-6 bg-gradient-to-r from-brand-purple/30 to-brand-coral/30 p-2 rounded-xl shadow-xl backdrop-blur-sm"
                  />
                </a>
              </div>
            </div>

            {/* Right Side - Hero Video */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-lg lg:max-w-xl h-[430px] relative">
                <FuturisticCard
                  variant="neon"
                  className="relative overflow-hidden shadow-2xl h-full"
                >
                  <video
                    ref={heroVideoRef}
                    src="/lovable-uploads/Groflex UI animation.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    onClick={toggleHeroVideoPlay}
                    className="w-full h-full object-cover cursor-pointer"
                  >
                    Your browser does not support the video tag. Please try a
                    different browser or contact support.
                  </video>
                  {showHeroButton && (
                    <button
                      onClick={toggleHeroVideoPlay}
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 text-black p-3 rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center opacity-0 animate-fadeIn"
                      style={{ animationFillMode: "forwards" }}
                      aria-label={isPlayingHero ? "Pause video" : "Play video"}
                    >
                      {isPlayingHero ? (
                        <Pause className="w-6 h-6" />
                      ) : (
                        <Play className="w-6 h-6" />
                      )}
                    </button>
                  )}
                </FuturisticCard>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. SEE GROFLEX IN ACTION SECTION */}
      <section className="mb-24" ref={demoSectionRef}>
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">
              See How the Business OS
              <br />
              Powers Smarter Decisions
            </span>
          </h2>
          <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
            Explore how Groflex helps leaders get ahead with insights that don’t
            just explain but drive execution
          </p>
        </div>
        <FuturisticCard variant="neon" className="max-w-4xl mx-auto">
          <div className="aspect-video rounded-lg overflow-hidden relative">
            <video
              ref={demoVideoRef}
              src="public/lovable-uploads/demo.mp4"
              title="Groflex Demo Video"
              playsInline
              onClick={toggleDemoVideoPlay}
              className="w-full h-full object-cover cursor-pointer"
            >
              Your browser does not support the video tag. Please try a
              different browser or contact support.
            </video>
            {showDemoButton && (
              <button
                onClick={toggleDemoVideoPlay}
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white/80 text-black p-4 rounded-full hover:bg-white/90 transition-all duration-300 flex items-center justify-center"
                aria-label={isPlayingDemo ? "Pause video" : "Play video"}
              >
                {isPlayingDemo ? (
                  <Pause className="w-8 h-8" />
                ) : (
                  <Play className="w-8 h-8" />
                )}
              </button>
            )}
          </div>
        </FuturisticCard>
      </section>

      {/* 3. PROBLEM SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">
                The Real Problem Isn’t Data.{" "}
              </span>
              <br />
              <span className="text-white">It’s Disconnected Decisions</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                stat: "86%",
                issue: "Siloed Systems",
                description: "say their systems are too fragmented",
                quote: '"We have data everywhere but insights nowhere"',
              },
              {
                stat: "72%",
                issue: "Gut Decisions Still Dominate",
                description: "rely on intuition over dashboards",
                quote: '"I trust my gut more than our reports"',
              },
              {
                stat: "92%",
                issue: "No Prescriptive Path",
                description: "don't trust BI to tell them what to do next",
                quote: '"Our dashboards show what happened, not what to do"',
              },
            ].map((item, index) => (
              <FuturisticCard key={index} variant="hologram">
                <div className="text-6xl font-bold text-gradient mb-6">
                  {item.stat}
                </div>
                <h3 className="text-xl font-bold text-brand-purple mb-2">
                  {item.issue}
                </h3>
                <p className="text-white/70 mb-4">{item.description}</p>
                <div className="border-l-4 border-brand-coral pl-4 italic text-white/70">
                  {item.quote}
                </div>
              </FuturisticCard>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() =>
                window.open("https://app.groflex.ai/auth/login", "_blank")
              }
              className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-lg transition-all duration-300"
            >
              Free Demo
            </button>
          </div>
        </div>
      </section>

      {/* 4. AUDIENCE NAVIGATION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Built for Everyone</span>
              <br />
              <span className="text-white">
                Who Drives the Business Forward
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {audienceCards.map((card, index) => (
              <FuturisticCard
                key={index}
                variant="neon"
                className="text-center"
              >
                <div className="text-brand-purple mb-6 flex justify-center">
                  {card.icon}
                </div>
                <h3 className="text-2xl font-bold text-gradient mb-4">
                  {card.title}
                </h3>
                <p className="text-white/80 mb-6">{card.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT GROFLEX DOES */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">
                From Prediction to Execution
              </span>
              <br />
              <span className="text-white">All in One OS</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Brain className="w-12 h-12" />,
                title: "Predictive Intelligence",
                description: "AI models surface risks gaps and opportunities",
              },
              {
                icon: <Target className="w-12 h-12" />,
                title: "Prescriptive Action Paths",
                description: "Built in next best action playbooks",
              },
              {
                icon: <MessageSquare className="w-12 h-12" />,
                title: "Execution Ready",
                description:
                  " AI Recommendations flow directly into your systems",
              },
            ].map((concept, index) => (
              <FuturisticCard
                key={index}
                variant="hologram"
                className="text-center"
              >
                <div className="text-brand-purple mb-6 flex justify-center">
                  {concept.icon}
                </div>
                <h3 className="text-xl font-bold text-gradient mb-4">
                  {concept.title}
                </h3>
                <p className="text-white/80">{concept.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURE GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-coral/5 via-transparent to-brand-purple/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Everything You Need to Run</span>
              <br />
              <span className="text-white">
                a Predictive Proactive Business
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard key={index} variant="neon">
                <div className="text-brand-purple mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gradient mb-4">
                  {feature.title}
                </h3>
                <p className="text-white/80">{feature.description}</p>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 7. SOCIAL PROOF */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Trusted by Leaders</span>
              <br />
              <span className="text-white">Who Don’t Wait for Reports</span>
            </h2>
            <p className="text-xl text-white/80 text-center mb-16 max-w-3xl mx-auto">
              C-suite, business leaders, and analysts and operators rely on
              Groflex to know what’s coming and act with confidence{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard key={index} variant="neon">
                <div className="text-white/80 mb-6 italic">
                  "{testimonial.quote}"
                </div>
                <div className="border-t border-white/10 pt-4">
                  <div className="font-bold text-gradient">
                    {testimonial.author}
                  </div>
                  <div className="text-white/70">{testimonial.role}</div>
                  <div className="text-brand-purple text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 8. AI INTERFACE DEMO - CHATBOT SCREENSHOTS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">One Interface.</span>
              <br />
              <span className="text-white">Every Answer.</span>
              <br />
              <span className="text-white">Connected to Execution.</span>
            </h2>
            <p className="text-xl text-white/80 mb-8">
              AI interface with natural language ability to get actionable
              recommendations, and automated execution.{" "}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Chatbot Screenshot 1 */}
            <FuturisticCard variant="hologram">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-lg p-4 relative">
                {/* Groflex Icon in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">G</span>
                </div>

                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 bg-brand-purple rounded-full flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">
                    Groflex AI Assistant
                  </span>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-brand-purple/20 border border-brand-purple/30 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">
                        Why is our customer churn increasing?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 max-w-xs">
                      <p className="text-white/90 text-sm mb-2">
                        Based on your data analysis, churn is up 23% due to:
                      </p>
                      <ul className="text-white/80 text-xs space-y-1">
                        <li>• Pricing sensitivity (40%)</li>
                        <li>• Support response time (35%)</li>
                        <li>• Feature gaps (25%)</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </FuturisticCard>

            {/* Chatbot Screenshot 2 */}
            <FuturisticCard variant="hologram">
              <div className="bg-gradient-to-br from-black/90 to-gray-900/90 rounded-lg p-4 relative">
                {/* Groflex Icon in top right */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-gradient-brand rounded-full flex items-center justify-center">
                  <span className="text-black font-bold text-xs">G</span>
                </div>

                {/* Chat header */}
                <div className="flex items-center gap-3 mb-6 pb-3 border-b border-white/10">
                  <div className="w-8 h-8 bg-brand-coral rounded-full flex items-center justify-center">
                    <BarChart3 className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-white font-semibold">
                    Revenue Insights
                  </span>
                  <div className="ml-auto w-2 h-2 bg-green-500 rounded-full"></div>
                </div>

                {/* Chat messages */}
                <div className="space-y-4">
                  <div className="flex justify-end">
                    <div className="bg-brand-coral/20 border border-brand-coral/30 rounded-lg px-4 py-2 max-w-xs">
                      <p className="text-white text-sm">
                        What should we focus on this quarter?
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 max-w-xs">
                      <p className="text-white/90 text-sm mb-2">
                        Recommended priorities:
                      </p>
                      <div className="space-y-2">
                        <div className="bg-green-500/20 rounded px-2 py-1">
                          <p className="text-green-400 text-xs font-semibold">
                            1. Enterprise expansion (+34% revenue)
                          </p>
                        </div>
                        <div className="bg-yellow-500/20 rounded px-2 py-1">
                          <p className="text-yellow-400 text-xs font-semibold">
                            2. Product feature gap closure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FuturisticCard>
          </div>

          <div className="text-center mt-12">
            <button
              onClick={handleGetStarted}
              className="bg-gradient-brand text-black font-semibold px-8 py-4 rounded-full hover:shadow-xl transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              <Play className="w-5 h-5" />
              Try the Live Demo
            </button>
          </div>
        </div>
      </section>

      {/* 9. FINAL CTA SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 cyber-grid opacity-30"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">
              Ready to Run Your Business Smarter
            </span>
          </h2>
          <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
            Groflex gives every team a common brain from planning to execution
          </p>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-12">
            <FuturisticCard variant="neon" className="text-center">
              <div className="text-4xl mb-4">🚀</div>
              <h3 className="text-xl font-bold text-gradient mb-4">
                For Leaders
              </h3>
              <p className="text-white/80 mb-6">
                Get strategic clarity
                <br />
                and predictive insights
              </p>
              <button
                onClick={handleGetStarted}
                className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Start Free Trial
              </button>
            </FuturisticCard>

            <FuturisticCard variant="neon" className="text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gradient mb-4">
                For Teams
              </h3>
              <p className="text-white/80 mb-6">
                Take immediate action with
                <br />
                execution ready recommendations
              </p>
              <button
                onClick={handleBookDemo}
                className="bg-gradient-brand text-black font-semibold px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Book a Demo
              </button>
            </FuturisticCard>
          </div>
        </div>
      </section>

      {/* 10. TOOL INTEGRATIONS */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-brand-purple/5 via-transparent to-brand-coral/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Plug Groflex</span>
              <br />
              <span className="text-white">Into Your Stack in Minutes</span>
            </h2>
            <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
              Groflex connects to Salesforce, Google, AWS and all the tools you
              already use
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {integrations.map((integration, index) => (
              <FuturisticCard
                key={integration.name}
                className="flex justify-center items-center p-4 bg-white/5 rounded-lg"
              >
                <img
                  style={{ width: 100, height: 100 }}
                  src={integration.logo}
                  alt={integration.name}
                  className="h-12 object-contain"
                />
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>

      {/* 11. PARTNERSHIPS SECTION */}
      <section className="bg-black py-20 text-center w-full">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">Partnerships</span>
          </h2>
        </div>
        <p className="text-xl text-white/80 mb-12 max-w-3xl mx-auto">
          We collaborate with global technology leaders to bring you the most
          reliable, scalable, and cutting-edge solutions.
        </p>

        <div className="mb-12 bg-gradient-purple w-full">
          <div className="w-full">
            <Slider {...sliderSettings}>
              {partnershipLogos.map((logo, idx) => (
                <div key={idx} className="flex justify-center items-center p-4">
                  <div className="w-40 h-36 flex justify-center items-center">
                    <img
                      src={logo}
                      alt={`Partner logo ${idx + 1}`}
                      className="max-h-full max-w-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>

      {/* 12. FAQ SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-gradient">Still Not Clear?</span>
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FuturisticCard key={index} variant="hologram">
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-white">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-brand-purple transition-transform ${
                      expandedFaq === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="mt-4 pt-4 border-t border-white/10">
                    <p className="text-white/80">{faq.answer}</p>
                  </div>
                )}
              </FuturisticCard>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
