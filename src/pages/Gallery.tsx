import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const screensavers = [
  { id: "bubbles", name: "Bubbles", description: "Floating bubbles animation" },
  { id: "matrix", name: "Matrix Rain", description: "Digital rain effect" },
  { id: "starfield", name: "Starfield", description: "Space travel simulation" },
  { id: "dvd", name: "DVD Bounce", description: "Classic DVD screensaver" },
  { id: "waves", name: "Waves", description: "Animated wave patterns" },
  { id: "particles", name: "Particles", description: "Interactive particle system" },
  { id: "plasma", name: "Plasma", description: "Colorful plasma effect" },
  { id: "geometric", name: "Geometric", description: "Animated geometric patterns" },
  { id: "rain", name: "Rain", description: "Rainfall animation" },
  { id: "fire", name: "Fire", description: "Dynamic fire effect" },
  { id: "tunnel", name: "Tunnel", description: "3D tunnel effect" },
  { id: "spiral", name: "Spiral", description: "Hypnotic spiral animation" },
  { id: "noise", name: "Noise", description: "Animated noise patterns" },
  { id: "grid", name: "Grid", description: "Dynamic grid system" },
];

const Gallery = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 animate-fade-down">Screensaver Gallery</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {screensavers.map((screensaver) => (
          <div
            key={screensaver.id}
            className="glass p-6 rounded-xl animate-scale-up hover:scale-105 transition-transform"
          >
            <h2 className="text-2xl font-bold mb-2">{screensaver.name}</h2>
            <p className="text-gray-400 mb-4">{screensaver.description}</p>
            <Link to={`/?screensaver=${screensaver.id}`}>
              <Button className="w-full">Try Now</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;