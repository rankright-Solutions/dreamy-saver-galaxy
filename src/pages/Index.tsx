import React, { useState } from "react";
import BubblesScreensaver from "@/components/screensavers/BubblesScreensaver";
import MatrixScreensaver from "@/components/screensavers/MatrixScreensaver";
import StarfieldScreensaver from "@/components/screensavers/StarfieldScreensaver";
import DvdScreensaver from "@/components/screensavers/DvdScreensaver";
import Controls from "@/components/Controls";

const Index = () => {
  const [currentScreensaver, setCurrentScreensaver] = useState("bubbles");
  const [color, setColor] = useState("#ffffff");
  const [speed, setSpeed] = useState(5);
  const [size, setSize] = useState(50);

  const renderScreensaver = () => {
    const props = { color, speed, size };

    switch (currentScreensaver) {
      case "bubbles":
        return <BubblesScreensaver {...props} />;
      case "matrix":
        return <MatrixScreensaver {...props} />;
      case "starfield":
        return <StarfieldScreensaver {...props} />;
      case "dvd":
        return <DvdScreensaver {...props} />;
      default:
        return null;
    }
  };

  return (
    <div className="relative min-h-screen">
      {renderScreensaver()}
      <Controls
        currentScreensaver={currentScreensaver}
        setCurrentScreensaver={setCurrentScreensaver}
        color={color}
        setColor={setColor}
        speed={speed}
        setSpeed={setSpeed}
        size={size}
        setSize={setSize}
      />
    </div>
  );
};

export default Index;