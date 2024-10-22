// Components
import MenuBar from "../Components/MenuBar";
import GameWindow from "../Components/GameWindow";

const GamePage = () => {
  return (
    <>
      <div className="flex justify-center">
        <MenuBar />
        <GameWindow />
      </div>
    </>
  );
};

export default GamePage;
