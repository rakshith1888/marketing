import { ReactNode } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import SensayChatbot from "./SensayChatbot";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isMobilePage = location.pathname.toLowerCase().startsWith("/ftf");

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      <Navigation />
      <main className="pt-20 flex-1">{children}</main>
      <Footer />
      {/* {!isMobilePage && <SensayChatbot />} */}
    </div>
  );
};

export default Layout;
