const About = () => {
  return (
    <div className="container mx-auto px-4 py-20 min-h-screen">
      <h1 className="text-4xl font-bold mb-8 animate-fade-down">About ScreenSaver Galaxy</h1>
      <div className="prose prose-invert max-w-none animate-fade-up">
        <p>
          Welcome to ScreenSaver Galaxy, a modern collection of interactive screensavers that bring
          nostalgia and creativity to your screen. Our screensavers are built with modern web
          technologies and are fully customizable to match your preferences.
        </p>
        <h2>Features</h2>
        <ul>
          <li>14 unique screensavers to choose from</li>
          <li>Customizable colors, speeds, and sizes</li>
          <li>Smooth animations and transitions</li>
          <li>Responsive design that works on all devices</li>
          <li>Modern glass-morphic UI</li>
        </ul>
      </div>
    </div>
  );
};

export default About;