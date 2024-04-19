import { useCallback, useEffect, useRef, useState } from "react";

type MouseCoordType = {
  x: number;
  y: number;
};

type PropsType = {
  width: number;
  height: number;
  mousePosition: MouseCoordType;
};

type ContextType = CanvasRenderingContext2D | null | undefined;

const Canvas = ({ width, height, mousePosition }: PropsType) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<MouseCoordType | null>(null);

  // const [mousePosition, setMousePosition] = useState<MouseCoordType>({
  //   x: 0,
  //   y: 0,
  // });
  const [dotArr, setDotArr] = useState<Dot[]>([]);

  mousePosRef.current = mousePosition;

  const colorArr: string[] = [
    "#FFFFFF",
    "#F8F8F8",
    "#F5F5F5",
    "#F0F0F0",
    "#E8E8E8",
    "#E5E5E5",
    "#E0E0E0",
    "#D8D8D8",
    "#D5D5D5",
    "#D0D0D0",
  ];

  // const colorArr: string[] = ["black"];

  // const handleMousePosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
  //   setMousePosition({ x: e.clientX, y: e.clientY });
  // };

  class Dot {
    x: number;
    y: number;
    radius: number;
    color: string;
    shadowModifier: number;

    constructor(x: number, y: number, radius: number, color: string) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.color = color;
      this.shadowModifier = 0;
    }

    create(context: ContextType) {
      if (!context) return;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

      const transformMatrix = context.getTransform();
      const transformX =
        this.x * transformMatrix.a +
        this.y * transformMatrix.c +
        transformMatrix.e;
      const transformY =
        this.x * transformMatrix.b +
        this.y * transformMatrix.d +
        transformMatrix.f -
        window.scrollY;

      if (
        mousePosRef.current &&
        mousePosRef.current.x - transformX < 50 &&
        mousePosRef.current.x - transformX > -50 &&
        mousePosRef.current.y - transformY < 50 &&
        mousePosRef.current.y - transformY > -50
      ) {
        // context.fillStyle = "red";
        if (this.shadowModifier < 15) {
          this.shadowModifier += 5;
        }
      } else if (this.shadowModifier >= 1) {
        this.shadowModifier -= 1;
      }

      context.fillStyle = this.color;
      context.shadowColor = this.color + "50";
      // if (this.shadowModifier > 0) context.shadowColor = "red";
      context.shadowBlur = Math.max(this.shadowModifier, 0);
      context.fill();
      context.closePath();

      // for (const singleDot of dotArr) {
      //   if (singleDot.x !== this.x && singleDot.y !== this.y) {
      //     const xDist = singleDot.x - this.x;
      //     const yDist = singleDot.y - this.y;
      //     const dist = Math.sqrt(xDist * xDist + yDist * yDist);
      //     if (dist < 100) {
      //       context.beginPath();
      //       context.strokeStyle = "#fff";
      //       context.lineWidth = 2;
      //       context.moveTo(singleDot.x, singleDot.y);
      //       context.lineTo(this.x, this.y);
      //       context.stroke();
      //       context.closePath();
      //     }
      //   }
      // }
    }

    update(context: ContextType) {
      if (!context) return;
      this.create(context);
    }
  }

  const createDotArr = () => {
    const dotArr = [];
    const enlargeFactor = Math.max(width, height) * 0.3;
    const canvasWidth = width + enlargeFactor;
    const canvasHeight = height + enlargeFactor;
    const canvasSize = canvasHeight * canvasWidth;
    const dotLimit = Math.min(canvasSize * 0.00025, 1000);
    for (let i = 0; i < dotLimit; i++) {
      const x = Math.random() * canvasWidth - canvasWidth / 2;
      const y = Math.random() * canvasHeight - canvasHeight / 2;
      // const radius = 3 * Math.random() + 1;
      const radius = 0;
      const color = colorArr[Math.floor(Math.random() * colorArr.length)];

      dotArr.push(new Dot(x, y, radius, color));
    }
    return dotArr;
  };

  useEffect(() => {
    const dotArr = createDotArr();
    setDotArr(dotArr);
  }, [width, height]);

  const animate = useCallback(
    (context: ContextType, rotationRadians: number) => {
      if (!context) return;
      context.clearRect(0, 0, width, height);

      // context.fillStyle = "rgba(10, 10, 10, .8)";
      // context.fillRect(0, 0, width, height);

      //Rotate Canvas
      context.save();
      context.translate(width / 2, height / 2);
      context.rotate(rotationRadians);

      for (const dot of dotArr) {
        dot.update(context);

        for (const singleDot of dotArr) {
          if (singleDot !== dot) {
            const xDist = singleDot.x - dot.x;
            const yDist = singleDot.y - dot.y;
            const dist = Math.sqrt(xDist * xDist + yDist * yDist);
            if (dist < 100) {
              context.beginPath();
              // context.strokeStyle = "#BEBEBE";
              context.strokeStyle = "#A9A9A9";
              context.lineWidth = 1;
              context.moveTo(singleDot.x, singleDot.y);
              context.lineTo(dot.x, dot.y);
              context.stroke();
              context.closePath();
            }
          }
        }
      }

      context.restore();
    },
    [dotArr]
  );

  useEffect(() => {
    const canvasElement = ref?.current;
    const context = canvasElement?.getContext("2d");
    let animationID: number;
    let rotationRadians: number = 0;

    const renderCanvas = () => {
      animationID = window.requestAnimationFrame(renderCanvas);
      animate(context, rotationRadians);
      if (rotationRadians >= Math.PI * 2) rotationRadians = 0;
      rotationRadians += 0.0001;
    };

    if (context) renderCanvas();

    return () => window.cancelAnimationFrame(animationID);
  }, [animate, width, height]);

  return <canvas width={width} height={height} ref={ref}></canvas>;
};

export default Canvas;
