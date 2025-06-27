import Link from "next/link";
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
      <footer className="bg-gray-800 text-gray-400 py-6 text-center">
        <div className="container bg-gray-800 text-white py-4 mx-auto text-center space-x-4">
        <Link href="/ceremony" className="hover:underline">Ceremony</Link>
        <Link href="/messages" className="hover:underline">Messages</Link>
        </div>
        <div>
        <SocialLinks />
        </div>
        <p>&copy; 2025 Wanjiku-Elijah. Ken Designs. All rights reserved.</p>      
      </footer>
    );
  };
  
  export default Footer;
  