// src/components/PersonCard.jsx

import './PersonCard.css'

interface PersonCardProps {
  name: string
}

function PersonCard({ name }: PersonCardProps) {
  return (
    <div className="card">
      <div className="avatar">👤</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default PersonCard;
