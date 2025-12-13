// src/components/AddPersonModal.jsx
function AddPersonModal({ name, setName, onAdd, onCancel }) {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Person</h2>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="btn-add"
            onClick={onAdd}
            disabled={!name.trim()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPersonModal;
