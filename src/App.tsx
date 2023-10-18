import { useState } from "react";
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
        left: center.x + "px",
        top: center.y + "px",
      }}
    ></div>
  );
}

function App() {
  const [coordinatesList, setCoordinatesList] = useState<Coordinates[]>([]);

  const clickListener = (event: React.MouseEvent) => {
    const { clientX, clientY } = event;
    setCoordinatesList([...coordinatesList, { x: clientX, y: clientY }]);
  };

  return (
    <div onClick={(e) => clickListener(e)} className="wrapper">
      <div className="buttons">
        <button className="actions">Undo</button>
        <button className="actions">Redo</button>
      </div>
      {coordinatesList.length > 0 &&
        coordinatesList.map((coordinate) => {
          return <Circle center={coordinate} />;
        })}
    </div>
  );
}

export default App;
