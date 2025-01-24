import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BubblesScreensaver from "@/components/screensavers/BubblesScreensaver";
import MatrixScreensaver from "@/components/screensavers/MatrixScreensaver";
import StarfieldScreensaver from "@/components/screensavers/StarfieldScreensaver";
import DvdScreensaver from "@/components/screensavers/DvdScreensaver";
import Controls from "@/components/Controls";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [currentScreensaver, setCurrentScreensaver] = useState(searchParams.get("screensaver") || "bubbles");
  const [color, setColor] = useState("#ffffff");
  const [speed, setSpeed] = useState(5);
  const [size, setSize] = useState(50);

  useEffect(() => {
    const screensaver = searchParams.get("screensaver");
    if (screensaver) {
      setCurrentScreensaver(screensaver);
    }
  }, [searchParams]);

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
      // Additional screensavers will be implemented in future updates
      default:
        return <BubblesScreensaver {...props} />;
    }
  };

  return (
    <div className="relative min-h-screen pt-16 pb-16">
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