import { UIEvent, useState } from "react";
import { BunchOfStuff, OtherStuffAlsoComplicated } from "./components/Mocks";
import { VerySlowComponent } from "./components/VerySlow";
import "./App.css";

const MovingBlock = ({ position }: { position: number }) => (
  <div className="movable-block" style={{ top: position }}>
    {position}
  </div>
);

// just hard-coded approximation to demonstrate the re-renders problem
// not to be used in real code
const getPosition = (val: number) => 150 - val / 2;

export default function App() {
  const [position, setPosition] = useState(150);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    // calculate position based on the scrolled value
    const calculated = getPosition((e.target as HTMLElement).scrollTop);
    // save it to state
    setPosition(calculated);
  };

  return (
    <div className="scrollable-block" onScroll={onScroll}>
      {/* pass position value to the new movable component */}
      <MovingBlock position={position} />
      <VerySlowComponent />
      <BunchOfStuff />
      <OtherStuffAlsoComplicated />
    </div>
  );
}
