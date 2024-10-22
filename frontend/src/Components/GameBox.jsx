import { useState } from "react";
import { useAnimationControls } from "framer-motion";

// Components
import ColumnBox from "./ColumnBox";
import Reel from "./Reel";

const GameBox = ({ ordinalNum }) => {
  const spinControl = useAnimationControls();

  const [reelSize, setReelSize] = useState(100);

  const handlePlay = () => {
    spinControl.start("spin");
  };

  return (
    <>
      <ColumnBox className="gap-y-4">
        {/* Ordinal Number (1st, 2nd, 3rd) */}
        <h1 className="text-3xl text-slate-50 font-bold">{ordinalNum}</h1>

        {/* Game Screen */}
        <div
          className="aspect-square bg-slate-50 overflow-hidden"
          style={{
            width: `${reelSize}px`,
            height: `${reelSize}px`,
          }}
        >
          {/* Reel */}
          <Reel reelSize={reelSize} spinControl={spinControl} />
        </div>

        {/* Action Button */}
        <button
          onClick={handlePlay}
          className="w-24 text-2xl text-slate-300 font-semibold bg-secondary rounded-md py-3 shadow-md shadow-supporting mt-16"
        >
          Play
        </button>
      </ColumnBox>
    </>
  );
};

export default GameBox;
