import React, { useEffect, useRef } from "react";

interface Props {
  color: string;
  speed: number;
  size: number;
}

const DvdScreensaver: React.FC<Props> = ({ color, speed, size }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameId = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let x = Math.random() * (canvas.width - 200);
    let y = Math.random() * (canvas.height - 100);
    let dx = speed * 2;
    let dy = speed * 2;

    const drawDVDLogo = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const logoWidth = 200 * (size / 50);
      const logoHeight = 100 * (size / 50);

      ctx.fillStyle = color;
      ctx.font = `bold ${logoHeight/2}px Arial`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("DVD", x + logoWidth/2, y + logoHeight/2);

      x += dx;
      y += dy;

      if (x + logoWidth > canvas.width || x < 0) dx = -dx;
      if (y + logoHeight > canvas.height || y < 0) dy = -dy;
    };

    const animate = () => {
      drawDVDLogo();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    animate();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
    };
  }, [color, speed, size]);

  return <canvas ref={canvasRef} className="screen-saver-container" />;
};

export default DvdScreensaver;