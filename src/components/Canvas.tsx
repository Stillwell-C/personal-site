import React, {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

type MouseCoordType = {
  x: number;
  y: number;
};

type PropsType = {
  width: number;
  height: number;
};

type ContextType = CanvasRenderingContext2D | null | undefined;

const Canvas = ({ width, height }: PropsType) => {
  const ref = useRef<HTMLCanvasElement>(null);
  const mousePosRef = useRef<MouseCoordType | null>(null);

  const [mousePosition, setMousePosition] = useState<MouseCoordType>({
    x: 0,
    y: 0,
  });
  const [dotArr, setDotArr] = useState<Dot[]>([]);
  // const [rotationRadians, setRotationRadians] = useState<number>(0);

  mousePosRef.current = mousePosition;

  const colorArr: string[] = [
    "#FFFFFF",
    "#F8F8F8",
    "#F5F5F5",
    "#F0F0F0",
    "#E8E8E8",
  ];

  // const colorArr: string[] = ["black"];

  const handleMousePosition = (e: React.MouseEvent<HTMLCanvasElement>) => {
    setMousePosition({ x: e.screenX, y: e.screenY });
  };

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

    create(context: ContextType, rotationRadians: number) {
      if (!context) return;
      context.beginPath();
      context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);

      // const angle = rotationRadians * (180 / Math.PI);

      const getX = (x: number, y: number) => {
        return x * Math.cos(rotationRadians) + y * Math.sin(rotationRadians);
      };
      const getY = (x: number, y: number) => {
        return (
          x * -1 * Math.sin(rotationRadians) + y * Math.cos(rotationRadians)
        );
      };

      const currentX =
        this.x * Math.cos(rotationRadians) + this.y * Math.sin(rotationRadians);
      const currentY =
        this.x * -1 * Math.sin(rotationRadians) +
        this.y * Math.cos(rotationRadians);

      // console.log(this.x, this.y);
      // console.log(currentX, currentY);
      // if (mousePosRef.current)
      //   console.log(getX(mousePosRef.current.x, mousePosRef.current.y));

      // if (
      //   mouseCoords.x - currentX < 150 &&
      //   mouseCoords.x - currentX > -150 &&
      //   mouseCoords.y - currentY < 150 &&
      //   mouseCoords.y - currentY > -150
      // ) {
      //   // if (this.shadowModifier < 20) {
      //   //   this.shadowModifier += 1;
      //   // }
      //   // } else if (this.shadowModifier > 0) {
      //   context.fillStyle = "red";
      // } else {
      //   // this.shadowModifier -= 1;
      //   context.fillStyle = this.color;
      // }

      context.shadowColor = this.color;
      // if (this.shadowModifier > 0) context.shadowColor = "red";
      context.shadowBlur = 5 * this.radius;
      context.fillStyle = this.color;
      context.fill();
      context.closePath();
    }

    update(context: ContextType, rotationRadians: number) {
      if (!context) return;
      this.create(context, rotationRadians);
    }
  }

  const createDotArr = () => {
    const dotArr = [];
    for (let i = 0; i < 50; i++) {
      const canvasWidth = width + 300;
      const canvasHeight = height + 300;

      const x = Math.random() * canvasWidth - canvasWidth / 2;
      const y = Math.random() * canvasHeight - canvasHeight / 2;
      const radius = 4 * Math.random();
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
        dot.update(context, rotationRadians);
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
      rotationRadians += 0.0001;
    };

    if (context) renderCanvas();

    return () => window.cancelAnimationFrame(animationID);
  }, [animate]);

  // useEffect(() => console.log(mousePosition), [mousePosition]);

  return (
    <canvas
      width={width}
      height={height}
      ref={ref}
      onMouseMove={handleMousePosition}
    ></canvas>
  );
};

export default Canvas;
