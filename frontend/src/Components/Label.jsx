const Label = ({ htmlFor, className, children }) => {
  return (
    <>
      <label htmlFor={htmlFor} className={`text-xl font-bold ${className}`}>
        {children}
      </label>
    </>
  );
};

export default Label;
