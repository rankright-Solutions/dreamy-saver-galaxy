import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import BubblesScreensaver from "@/components/screensavers/BubblesScreensaver";
import MatrixScreensaver from "@/components/screensavers/MatrixScreensaver";
import StarfieldScreensaver from "@/components/screensavers/StarfieldScreensaver";
import DvdScreensaver from "@/components/screensavers/DvdScreensaver";
import Controls from "@/components/Controls";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const [searchParams] = useSearchParams();
  const [currentScreensaver, setCurrentScreensaver] = useState(searchParams.get("screensaver") || "bubbles");
  const [color, setColor] = useState("#ffffff");
  const [speed, setSpeed] = useState(5);
  const [size, setSize] = useState(50);
  const { toast } = useToast();

  useEffect(() => {
    const screensaver = searchParams.get("screensaver");
    if (screensaver) {
      setCurrentScreensaver(screensaver);
      if (!["bubbles", "matrix", "starfield", "dvd"].includes(screensaver)) {
        toast({
          title: "Coming Soon",
          description: `The ${screensaver} screensaver is under development and will be available soon!`,
          variant: "default",
        });
      }
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
      default:
        // For unimplemented screensavers, show bubbles as fallback
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