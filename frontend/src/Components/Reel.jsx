import { useState, useEffect } from "react";
import { motion } from "framer-motion";

// Store
import useControlStore from "../Store/useControlStore";

// Utils
import { getRandomNumber, getRandomDecimal } from "../Utils/NumberManager";

const Reel = ({ reelSize, spinControl }) => {
  const { totalPlayers } = useControlStore();

  const [randomNumList, setRandomNumList] = useState([]);
  const [winNumPosition, setWinNumPosition] = useState(null);
  const [animateDuration, setAnimateDuration] = useState(null);
  const [winningNum, setWinningNum] = useState(null);

  const generateRandomList = () => {
    const newRandomNumList =
      winningNum !== null
        ? [
            winningNum,
            ...Array.from({ length: 49 }, () => getRandomNumber(totalPlayers)),
          ]
        : Array.from({ length: 50 }, () => getRandomNumber(totalPlayers));

    setRandomNumList(newRandomNumList);
  };

  useEffect(() => {
    generateRandomList();
  }, [totalPlayers]);

  useEffect(() => {
    let newWinPosition = getRandomNumber(40, 20);
    setWinNumPosition(newWinPosition);
    setWinningNum(randomNumList[newWinPosition]);
    setAnimateDuration(getRandomDecimal(3, 1));
    spinControl.set("initial");
  }, [randomNumList]);

  return (
    <>
      {randomNumList.map((num, index) => {
        return (
          <motion.div
            key={index}
            className="aspect-square text-5xl font-bold text-secondary flex justify-center items-center"
            style={{
              width: `${reelSize}px`,
              height: `${reelSize}px`,
            }}
            variants={{
              initial: {
                transform: `translateY(0)`,
              },
              spin: {
                transform: `translateY(-${reelSize * winNumPosition}px)`,
              },
            }}
            initial="initial"
            animate={spinControl}
            transition={{
              duration: animateDuration,
              ease: "circOut",
            }}
            onAnimationComplete={generateRandomList}
          >
            {num}
          </motion.div>
        );
      })}
    </>
  );
};

export default Reel;
