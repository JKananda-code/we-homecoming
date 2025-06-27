
import Link from 'next/link';
import Image from 'next/image';
const Header = () => {
  return (
    <header className="bg-cyan-800 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-lg font-bold">
           <Image
            src="/Logo.jpg" 
            alt="WE-Logo" 
            width={100}
            height={100}
            priority={true}
            />
        </div>
        <div className="space-x-4">
          <Link href="/intro" className="hover:underline">Introduction</Link>
          <Link href="/vision" className="hover:underline">Vision</Link>
          <Link href="/family" className="hover:underline">Family</Link>
          <Link href="/ceremony" className="hover:underline">Ceremony</Link>
          <Link href="/messages" className="hover:underline">Messages</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;

