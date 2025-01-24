import React, { useEffect, useRef } from "react";

interface Star {
  x: number;
  y: number;
  z: number;
  pz: number;
}

interface Props {
  color: string;
  speed: number;
  size: number;
}

const StarfieldScreensaver: React.FC<Props> = ({ color, speed, size }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const stars = useRef<Star[]>([]);
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

    const createStar = (): Star => ({
      x: Math.random() * canvas.width - canvas.width / 2,
      y: Math.random() * canvas.height - canvas.height / 2,
      z: Math.random() * 1500,
      pz: 0,
    });

    const initStars = () => {
      stars.current = Array.from({ length: 1000 }, createStar);
    };

    const moveStars = () => {
      stars.current.forEach((star) => {
        star.z = star.z - speed * 10;
        
        if (star.z <= 0) {
          star.z = 1500;
          star.x = Math.random() * canvas.width - canvas.width / 2;
          star.y = Math.random() * canvas.height - canvas.height / 2;
          star.pz = star.z;
        }
      });
    };

    const drawStars = () => {
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.strokeStyle = color;

      stars.current.forEach((star) => {
        const x = (star.x * (star.z ? 100 / star.z : 0)) + cx;
        const y = (star.y * (star.z ? 100 / star.z : 0)) + cy;
        const px = (star.x * (star.pz ? 100 / star.pz : 0)) + cx;
        const py = (star.y * (star.pz ? 100 / star.pz : 0)) + cy;

        const scale = (1 - star.z / 1500) * size;

        ctx.beginPath();
        ctx.lineWidth = scale;
        ctx.moveTo(px, py);
        ctx.lineTo(x, y);
        ctx.stroke();

        star.pz = star.z;
      });
    };

    const animate = () => {
      moveStars();
      drawStars();
      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initStars();
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

export default StarfieldScreensaver;