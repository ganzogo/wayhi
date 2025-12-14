// src/components/AddPersonModal.jsx

import { useEffect, useRef } from "react";
import './AddPersonModal.css'

interface AddPersonModalProps {
  name: string
  setName: (name: string) => void
  dob: string
  setDob: (dob: string) => void
  onAdd: () => void
  onCancel: () => void
}

function AddPersonModal({ name, setName, dob, setDob, onAdd, onCancel }: AddPersonModalProps) {

  function isFormValid() {

    const birthDate = new Date(dob);
    const year = birthDate.getFullYear()

    return name.trim() && dob && year >= 1900
  }

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <h2>Add Person</h2>
        <label>
          Name
          <input
            ref={inputRef}
            type="text"
            placeholder=""
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Date of birth
          <input
            type="date"
            max={new Date().toISOString().split("T")[0]}
            value={dob}
            onChange={(e) => setDob(e.target.value)}
          />
        </label>
        <div className="modal-actions">
          <button className="btn-cancel" onClick={onCancel}>
            Cancel
          </button>
          <button
            className="btn-add"
            onClick={onAdd}
            disabled={!isFormValid()}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddPersonModal;
