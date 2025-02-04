import { Rocket } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Rocket className="h-8 w-8 text-blue-500" />
              <span className="text-xl font-bold">STELLARIX SPACE PRIVATE LIMITED</span>
            </div>
            <p className="text-gray-400">
              The future of space agriculture and exploration technology.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white">Home</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white">Services</a></li>
              <li><a href="#missions" className="text-gray-400 hover:text-white">Missions</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white">Earth Based CEA Systems</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Space Based Modules </a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Space Research</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Data Analytics</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li><a href="https://www.linkedin.com/company/stellar-ix-space-pvt-ltd/?viewAsMember=true" className="text-gray-400 hover:text-white">LinkedIn</a></li>
              <li><a href="https://x.com/stellarixspace" className="text-gray-400 hover:text-white">Twitter</a></li>
              <li><a href="https://www.instagram.com/stellarix_space/" className="text-gray-400 hover:text-white">Instagram</a></li>
              <li><a href="https://wa.me/+918122211194" className="text-gray-400 hover:text-white">Whatsapp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Stellarix Space Private Limited. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
