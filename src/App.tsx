import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom"; //nAdded Navigate
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
import Marketing from "./pages/Marketing";
import Sales from "./pages/Sales";
import Operations from "./pages/Operations";
import HumanResources from "./pages/HumanResources";
import FinanceandAccounting from "./pages/FinanceandAccounting";
import It from "./pages/It";
import BusinessLeaders from "./pages/BusinessLeaders";
import DataAnalysts from "./pages/DataAnalysts";
import BImanagers from "./pages/BImanagers";

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

            {/*New main Product route */}
            <Route path="/product" element={<ProductsPage />} />

            {/*Redirect from /products to /product */}
            <Route
              path="/products"
              element={<Navigate to="/product" replace />}
            />

            <Route path="/solutions" element={<Solutions />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/retail" element={<Retail />} />
            <Route path="/financial-services" element={<FinancialServices />} />
            <Route path="/healthcare" element={<Healthcare />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/e-commerce" element={<Ecommerce />} />
            <Route path="/marketing" element={<Marketing />} />
            <Route path="/sales" element={<Sales />} />
            <Route path="/operations" element={<Operations />} />
            <Route path="/human-resources" element={<HumanResources />} />
            <Route
              path="/finance-and-accounting"
              element={<FinanceandAccounting />}
            />
            <Route path="/it" element={<It />} />
            <Route path="/business-leaders" element={<BusinessLeaders />} />
            <Route path="/data-analysts" element={<DataAnalysts />} />
            <Route path="/bi-managers" element={<BImanagers />} />
            <Route
              path="/terms-and-conditions"
              element={<TermsAndConditions />}
            />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            <Route path="/imprint" element={<Imprint />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* 404 page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
