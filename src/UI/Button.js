const ButtonComponent = (props) => {
  return (
    <button
      className="p-2 px-8 text-lg text-white bg-gray-600 rounded"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
