// src/components/AddCard.jsx

import './AddCard.css'

function AddCard({ onClick }) {
  return (
    <div className="card add-card" onClick={onClick}>
      +
    </div>
  );
}

export default AddCard;
