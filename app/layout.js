
import Header from './components/Header';
import Footer from './components/Footer';
import "./styles/globals.css";

export const metadata = {
  title: "Homecoming Ceremony",
  description: "Wanjiku Elijah & Son",
};

const Layout = ({ children }) => {
  return (
    <html lang="en">
     <body className={'flex flex-col min-h-screen'}>
      <div>
    <Header />
      <main className="mt-12 md:mt-20 lg:mt-24 container mx-auto p-4 md:p-6 lg:p-8">{children}</main>
    <Footer />
    </div>
    </body>    
    </html>
  );
};

export default Layout;
