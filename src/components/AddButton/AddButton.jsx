import './AddButton.css';

function AddButton({ text }) {
  return (
    <button className="addButton" type="button">
      <span>+</span>{text}
    </button>
  );
}
export default AddButton;
