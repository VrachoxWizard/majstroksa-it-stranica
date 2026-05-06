import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import MobileContactBar from './MobileContactBar';
import { LocalBusinessJsonLd } from '../../shared/components/Seo';

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-hidden bg-background-light pb-[76px] antialiased lg:pb-0">
      <LocalBusinessJsonLd />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <MobileContactBar />
    </div>
  );
}
