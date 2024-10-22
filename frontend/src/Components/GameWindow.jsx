// Component
import GameBox from "./GameBox";

// Store
import useControlStore from "../Store/useControlStore";

// Utils
import { getOrdinalSuffix } from "../Utils/NumberManager";

const GameWindow = () => {
  const { totalWinners } = useControlStore();

  return (
    <>
      {/* GameWindow */}
      <div className="w-[95%] h-screen flex justify-center items-center">
        {/* GameBox */}
        <div className="w-full flex flex-row justify-center items-center">
          {/* ----- */}

          {Array.from({ length: totalWinners }, (_, index) => (
            <GameBox key={index} ordinalNum={getOrdinalSuffix(index + 1)} />
          ))}
        </div>
      </div>
    </>
  );
};

export default GameWindow;
