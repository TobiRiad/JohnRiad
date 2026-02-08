import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
interface LayoutProps {
  children: React.ReactNode;
}
export function Layout({ children }: LayoutProps) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <div className="min-h-screen flex flex-col bg-cream-50">
      <Header />
      <main className="flex-grow">{children}</main>
      <Footer />
    </div>);

}