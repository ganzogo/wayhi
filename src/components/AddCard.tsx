// src/components/AddCard.jsx

import './AddCard.css'

interface AddCardProps {
  onClick: () => void
}

function AddCard({ onClick }: AddCardProps) {
  return (
    <div className="card add-card" onClick={onClick}>
      +
    </div>
  );
}

export default AddCard;
