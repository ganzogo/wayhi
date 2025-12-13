// src/components/PersonCard.jsx
function PersonCard({ name }) {
  return (
    <div className="card">
      <div className="avatar">👤</div>
      <div className="name">{name}</div>
    </div>
  );
}

export default PersonCard;
