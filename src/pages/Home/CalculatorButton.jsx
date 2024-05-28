// eslint-disable-next-line react/prop-types
function CalculatorButton({ icon, handleBtnClick }) {
  return (
    <button
      onClick={() => handleBtnClick(icon)}
      className="btn text-3xl bg-blue-200 text-gray-700"
    >
      {icon}
    </button>
  );
}

export default CalculatorButton;
