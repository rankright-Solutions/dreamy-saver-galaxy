import React, { useEffect, useRef } from "react";

interface Bubble {
  x: number;
  y: number;
  radius: number;
  dx: number;
  dy: number;
  color: string;
}

interface Props {
  color: string;
  speed: number;
  size: number;
}

const BubblesScreensaver: React.FC<Props> = ({ color, speed, size }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bubbles = useRef<Bubble[]>([]);
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

    const createBubble = (): Bubble => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: (Math.random() * size + 10) * (size / 50),
      dx: (Math.random() - 0.5) * speed,
      dy: (Math.random() - 0.5) * speed,
      color,
    });

    const initBubbles = () => {
      bubbles.current = Array.from({ length: 50 }, createBubble);
    };

    const animate = () => {
      if (!ctx || !canvas) return;

      ctx.fillStyle = "rgba(0, 0, 0, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      bubbles.current.forEach((bubble) => {
        bubble.x += bubble.dx;
        bubble.y += bubble.dy;

        if (bubble.x < 0 || bubble.x > canvas.width) bubble.dx *= -1;
        if (bubble.y < 0 || bubble.y > canvas.height) bubble.dy *= -1;

        ctx.beginPath();
        ctx.arc(bubble.x, bubble.y, bubble.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${bubble.color}20`;
        ctx.fill();
        ctx.strokeStyle = bubble.color;
        ctx.stroke();
      });

      animationFrameId.current = requestAnimationFrame(animate);
    };

    resizeCanvas();
    initBubbles();
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

export default BubblesScreensaver;