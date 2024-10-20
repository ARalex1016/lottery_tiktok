// Components
import MenuBar from "../Components/MenuBar";
import GameField from "../Components/GameField";

const GamePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <MenuBar />
        <GameField />
      </div>
    </>
  );
};

export default GamePage;
