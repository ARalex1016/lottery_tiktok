// Components
import ColumnBox from "./ColumnBox";

const GameBox = ({ ordinalNum }) => {
  return (
    <>
      <ColumnBox className="gap-y-4">
        {/* Ordinal Number (1st, 2nd, 3rd) */}
        <h1 className="text-3xl text-slate-50 font-bold">{ordinalNum}</h1>

        <div className="w-28 aspect-square text-5xl font-bold text-primary bg-slate-50 border-none shadow-custom-inset flex justify-center items-center">
          0
        </div>
        <button className="w-24 text-2xl text-slate-300 font-semibold bg-secondary rounded-md py-3 shadow-md shadow-supporting mt-16">
          Play
        </button>
      </ColumnBox>
    </>
  );
};

export default GameBox;
