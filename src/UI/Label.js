const Label = (props) => {
  return (
    <div className="bg-gray-200 text-black px-4 py-2 rounded-lg">
      {props.children}
    </div>
  );
};

export default Label;
