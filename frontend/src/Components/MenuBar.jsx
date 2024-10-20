import { useState } from "react";
import { motion, useAnimationControls } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ChevronUp } from "lucide-react";

// Custom Hook
import useControl from "../Hooks/useControl";

// Components
import Slider from "./Slider";
import ColumnBox from "./ColumnBox";
import Label from "./Label";

const MenuBar = () => {
  const { totalWinners, totalPlayer, setTotalWinners, setTotalPlayer } =
    useControl();

  const [isOpen, setIsOpen] = useState(false);
  const sliderControls = useAnimationControls();

  const handleToggleSlider = () => {
    if (isOpen) {
      sliderControls.start("initial"); // Close the slider
    } else {
      sliderControls.start("dropDown"); // Open the slider
    }

    setIsOpen((pre) => !pre);
  };
  return (
    <>
      <Slider sliderControls={sliderControls} isOpen={isOpen}>
        <div className="w-full bg-secondary rounded-inherit py-8 flex flex-row justify-around items-center z-30 relative">
          {/* ---- */}

          {/* Total Winners */}
          <ColumnBox>
            <Label htmlFor="totalWinner" className="text-primary">
              Total Winners
            </Label>
            <select
              onChange={(e) => setTotalWinners(Number(e.target.value))}
              value={totalWinners}
              id="totalWinner"
              className="w-16 aspect-square text-2xl font-semibold text-center border-none rounded-lg shadow-custom-inset p-2 outline-none"
            >
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </ColumnBox>

          {/* Total Players */}
          <ColumnBox>
            <Label htmlFor="totalPlayer" className="text-primary">
              Total Players
            </Label>
            <input
              type="number"
              id="totalPlayer"
              min={0}
              max={8}
              value={totalPlayer}
              onChange={(e) => setTotalPlayer(Number(e.target.value))}
              className="w-16 aspect-square text-2xl font-semibold text-center border-none rounded-lg shadow-custom-inset p-2 outline-none"
            />
          </ColumnBox>

          {/* Open & Close Toggle Button */}
          <motion.button
            onClick={handleToggleSlider}
            aria-expanded={isOpen}
            className={`text-primary bg-slate-50 aspect-square rounded-full shadow-md shadow-slate-500 p-2 cursor-pointer hover:scale-105 absolute left-4`}
            animate={{
              top: isOpen ? "100%" : "calc(100% + 10px)",
              translateY: isOpen && "-50%",
            }}
            layout
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {isOpen ? <ChevronUp /> : <ChevronDown />}
          </motion.button>
        </div>
      </Slider>
    </>
  );
};

export default MenuBar;
