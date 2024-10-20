// Components
import MenuBar from "../Components/MenuBar";
import GameScreen from "../Components/GameScreen";

const GamePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <MenuBar />
        <GameScreen />
      </div>
    </>
  );
};

export default GamePage;
