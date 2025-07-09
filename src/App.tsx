
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import { ThemeProvider } from "./contexts/ThemeContext";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogPostPage from "./pages/BlogPostPage";
import ContactUs from "./pages/Contactus";
import CookiePolicy from "./pages/CookiePolicy";
import Home from "./pages/Home";
import Imprint from "./pages/Imprint";
import NotFound from "./pages/NotFound";
import Pricing from "./pages/Pricing";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import ProductsPage from "./pages/ProductsPage";
import Solutions from "./pages/Solutions";
import TermsAndConditions from "./pages/TermsAndConditions";
import Manufacturing from "./pages/Manufacturing";
import Retail from "./pages/Retail";  
import FinancialServices from "./pages/FinancialServices";
import Healthcare from "./pages/Healthcare";
import Finance from "./pages/Finance";
import Ecommerce from "./pages/Ecommerce";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/manufacturing" element={<Manufacturing/>} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/e-commerce" element={<Ecommerce />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />}/>
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
