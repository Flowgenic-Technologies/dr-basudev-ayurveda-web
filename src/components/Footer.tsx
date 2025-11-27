import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Logo/Icon */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <Leaf className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold font-playfair">
              Samata Ayurved Upachar Kendra
            </span>
          </div>

          {/* Divider */}
          <div className="w-32 h-px bg-background/20" />

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-background/80">
              © {new Date().getFullYear()} Samata Ayurved Upachar Kendra. All rights reserved.
            </p>
            <p className="text-background/60 text-sm">
              Developed by Roshan
            </p>
          </div>

          {/* Contact */}
          <div className="text-center text-background/70 text-sm">
            <p>Jorpati, Kathmandu | +977 9851061380</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
