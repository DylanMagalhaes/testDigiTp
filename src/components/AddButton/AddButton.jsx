/* eslint-disable react/prop-types */
import './AddButton.css';

function AddButton({ text, handleOpenModal }) {
  return (
    <button onClick={handleOpenModal} className="add-button" type="button">
      <span>+</span>
      {text}
    </button>
  );
}
export default AddButton;
