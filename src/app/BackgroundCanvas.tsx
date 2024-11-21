"use client";

import { useEffect, useRef } from "react";

const numSides = 9;
const lineThickness = 2;
const spinSpeed = 15;

function drawNonagon(
  ctx: CanvasRenderingContext2D,
  vertices: Array<{ x: number; y: number }>,
  centerX: number,
  centerY: number,
  radius: number,
  rotation: number,
  shadowBlur: number,
) {
  ctx.strokeStyle = "red";
  ctx.lineWidth = lineThickness;
  ctx.shadowColor = "red";
  ctx.shadowBlur = shadowBlur;

  for (let i = 0; i < numSides; i++) {
    const angle = ((2 * Math.PI) / numSides) * i - Math.PI / 2 + rotation;
    vertices[i].x = centerX + radius * Math.cos(angle);
    vertices[i].y = centerY + radius * Math.sin(angle);
  }

  for (let i = 0; i < numSides; i++) {
    for (let j = i + 1; j < numSides; j++) {
      ctx.beginPath();
      ctx.moveTo(vertices[i].x, vertices[i].y);
      ctx.lineTo(vertices[j].x, vertices[j].y);
      ctx.stroke();
    }
  }

  ctx.beginPath();
  for (let i = 0; i < numSides; i++) {
    const nextIndex = (i + 1) % numSides;
    ctx.moveTo(vertices[i].x, vertices[i].y);
    ctx.lineTo(vertices[nextIndex].x, vertices[nextIndex].y);
  }
  ctx.stroke();
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rotationRef = useRef(0);
  const shadowBlurRef = useRef(0);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;

    const vertices: Array<{ x: number; y: number }> = [];
    for (let i = 0; i < numSides; i++) {
      vertices[i] = { x: 0, y: 0 };
    }

    let cssWidth: number, cssHeight: number, dpr: number;
    function resizeCanvas() {
      dpr = window.devicePixelRatio || 1;

      cssWidth = window.innerWidth;
      cssHeight = window.innerHeight;

      canvas.width = cssWidth * dpr;
      canvas.height = cssHeight * dpr;

      canvas.style.width = `${cssWidth}px`;
      canvas.style.height = `${cssHeight}px`;

      ctx.scale(dpr, dpr);
    }

    window.addEventListener("resize", resizeCanvas);

    function animate(timestamp: number) {
      ctx.clearRect(0, 0, canvas.width / dpr, canvas.height / dpr);

      const centerX = canvas.width / dpr / 2;
      const centerY = canvas.height / dpr / 2;

      const size = Math.min(cssWidth, cssHeight) / 2 - 24;
      rotationRef.current = (spinSpeed * timestamp) / 1000000;
      shadowBlurRef.current = Math.floor((Math.sin(timestamp / 1000) + 1) * 48);
      drawNonagon(
        ctx,
        vertices,
        centerX,
        centerY,
        size,
        rotationRef.current,
        shadowBlurRef.current,
      );

      requestAnimationFrame(animate);
    }

    resizeCanvas();
    const frame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <canvas className="fixed z-[-1] opacity-15" ref={canvasRef} />;
}
