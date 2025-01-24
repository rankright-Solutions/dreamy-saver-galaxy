import React from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

interface Props {
  currentScreensaver: string;
  setCurrentScreensaver: (screensaver: string) => void;
  color: string;
  setColor: (color: string) => void;
  speed: number;
  setSpeed: (speed: number) => void;
  size: number;
  setSize: (size: number) => void;
}

const Controls: React.FC<Props> = ({
  currentScreensaver,
  setCurrentScreensaver,
  color,
  setColor,
  speed,
  setSpeed,
  size,
  setSize,
}) => {
  const screensavers = ["bubbles", "matrix", "starfield", "dvd"];
  const colors = ["#ffffff", "#00ff00", "#ff0000", "#00ffff", "#ffff00"];

  return (
    <div className="controls-overlay">
      <div className="control-panel glass">
        <div className="flex gap-2">
          {screensavers.map((screensaver) => (
            <Button
              key={screensaver}
              variant={currentScreensaver === screensaver ? "secondary" : "ghost"}
              onClick={() => setCurrentScreensaver(screensaver)}
              className="capitalize"
            >
              {screensaver}
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {colors.map((c) => (
              <button
                key={c}
                className={`w-6 h-6 rounded-full transition-transform ${
                  color === c ? "scale-125 ring-2 ring-white" : ""
                }`}
                style={{ backgroundColor: c }}
                onClick={() => setColor(c)}
              />
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="flex flex-col gap-1">
              <span className="text-sm">Speed</span>
              <Slider
                value={[speed]}
                onValueChange={(value) => setSpeed(value[0])}
                min={1}
                max={10}
                step={1}
                className="w-32"
              />
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-sm">Size</span>
              <Slider
                value={[size]}
                onValueChange={(value) => setSize(value[0])}
                min={10}
                max={100}
                step={1}
                className="w-32"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Controls;