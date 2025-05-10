import React, { cloneElement } from "react";
import Animated from "./Animated";

type AnimatedToolsProps = {
  delay: number;
  stepSize: number;
  children: React.ReactNode[];
  iconSize: number;
  className?: string;
};

const AnimatedTools: React.FC<AnimatedToolsProps> = ({
  delay,
  stepSize,
  children,
  iconSize,
  className,
}) => {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <Animated key={index} delay={delay + index * stepSize}>
          {cloneElement(child, { size: iconSize })}
        </Animated>
      ))}
    </div>
  );
};

export default AnimatedTools;
