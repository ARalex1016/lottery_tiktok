import { useState } from "react";

const useControl = () => {
  const [totalWinners, setTotalWinners] = useState(1);
  const [totalPlayer, setTotalPlayer] = useState(7);

  return { totalWinners, totalPlayer, setTotalWinners, setTotalPlayer };
};

export default useControl;
