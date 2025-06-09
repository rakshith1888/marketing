
import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <Navigation />
      <main className="pt-20 flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
