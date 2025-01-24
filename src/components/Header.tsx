import { Button } from "./ui/button";
import { Github } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass animate-fade-down">
      <div className="container mx-auto px-4 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold hover:text-primary/80 transition-colors">
            ScreenSaver Galaxy
          </Link>
          <div className="flex items-center gap-4">
            <Link to="/about">
              <Button variant="ghost">About</Button>
            </Link>
            <Link to="/gallery">
              <Button variant="ghost">Gallery</Button>
            </Link>
            <a
              href="https://github.com/yourusername/screensaver-galaxy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="secondary" size="icon">
                <Github className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;