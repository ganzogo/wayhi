// src/components/PersonCard.jsx

import './PersonCard.css'

function PersonCard({ name }) {
  return (
    <div className="card">
      <div className="avatar">👤</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default PersonCard;
