const ColumnBox = ({ className, children }) => {
  return (
    <>
      <div className={`flex flex-col items-center gap-y-6 ${className}`}>
        {children}
      </div>
    </>
  );
};

export default ColumnBox;
