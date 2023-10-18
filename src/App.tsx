import { useState } from "react";
import "./App.css";

type Coordinates = {
  x: number;
  y: number;
};

function App() {
  const [clickCoordinates, setClickCoordinates] = useState<Coordinates>({ x: 0, y: 0 });

  const registerCoordinates = (event: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = event;
    setClickCoordinates({ x: clientX, y: clientY });
  };

  return (
    <div onClick={(e) => registerCoordinates(e)} className="wrapper">
      <p>last X of click: {clickCoordinates.x}</p>
      <p>last Y of click: {clickCoordinates.y}</p>
    </div>
  );
}

export default App;
