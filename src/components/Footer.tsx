import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 glass animate-fade-up">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center gap-2 text-sm">
          <span>Made with</span>
          <Heart className="h-4 w-4 text-red-500 animate-pulse" />
          <span>by Lovable</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;