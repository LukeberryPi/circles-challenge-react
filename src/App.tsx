import { useRef, useState } from "react";
import "./App.css";

type Coordinates = {
  x: number;
  y: number;
};

type CircleProps = {
  center: Coordinates;
  radius?: number;
};

function Circle({ center, radius = 50 }: CircleProps) {
  return (
    <div
      style={{
        position: "absolute",
        width: radius + "px",
        height: radius + "px",
        background: "blue",
        borderRadius: "50%",
        transform: "translate(-50%, -50%)",
        // ugly way to center circle on user click
        left: center.x + 38 + "px",
        top: center.y + 60 + "px",
      }}
    ></div>
  );
}

function App() {
  const paintAreaRef = useRef<HTMLDivElement | null>(null);
  const [coordinatesList, setCoordinatesList] = useState<Coordinates[]>([]);
  
  const clickListener = (event: React.MouseEvent) => {
    const { offsetX, offsetY } = event.nativeEvent;
    setCoordinatesList([...coordinatesList, { x: offsetX, y: offsetY }]);
  };

  return (
    <div className="wrapper">
      <div className="buttons">
        <button className="actions">Undo</button>
        <button className="actions">Redo</button>
      </div>
      <div
        ref={paintAreaRef}
        onClick={(e) => clickListener(e)}
        className="paint-area"
      >
        {coordinatesList.length > 0 &&
          coordinatesList.map((coordinate) => {
            return <Circle center={coordinate} />;
          })}
      </div>
    </div>
  );
}

export default App;
