
import React, { useRef, useState } from "react";



export function MagneticButton({
  children,
  strength = 0.3,
  style,
  className = "",
  onClick,
  ...props
}) {
  const ref = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [pressed, setPressed] = useState(false);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const { left, top, width, height } =
      ref.current.getBoundingClientRect();

    const centerX = left + width / 2;
    const centerY = top + height / 2;

    const distanceX = (e.clientX - centerX) * strength;
    const distanceY = (e.clientY - centerY) * strength;

    setPosition({
      x: distanceX,
      y: distanceY,
    });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
    setPressed(false);
  };

  const handleMouseDown = () => {
    setPressed(true);
  };

  const handleMouseUp = () => {
    setPressed(false);
  };

  const handleClick = (e) => {
    onClick?.(e);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}
      className={className}
      style={{
  
        cursor: "pointer",

        transform: `
          translate3d(${position.x}px, ${position.y}px, 0)
          scale(${pressed ? 0.94 : 1})
        `,

        transition: pressed
          ? "transform 0.08s ease-out"
          : position.x === 0 && position.y === 0
          ? "transform 0.5s cubic-bezier(0.2, 0.8, 0.2, 1)"
          : "transform 0.1s ease-out",

        willChange: "transform",

        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}


export function ElasticButton({
  children,
  strength = 0.15, // how much it squashes
  style,
  className = "",
  onClick,
  ...props
}) {
  const [scale, setScale] = useState({ x: 1, y: 1 });

  const handleMouseDown = () =>
    setScale({ x: 1 + strength, y: 1 - strength });
  const handleMouseUp = () => setScale({ x: 1, y: 1 });

  const handleClick = (e) => {
    onClick?.(e);
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onClick={handleClick}
      className={className}
      style={{
        display: "inline-block",
        cursor: "pointer",
        transform: `scale(${scale.x}, ${scale.y})`,
        transition:
          scale.x === 1
            ? "transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)"
            : "transform 0.08s ease-out",
        willChange: "transform",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
}


