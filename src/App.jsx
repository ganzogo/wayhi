import { useState } from 'react'

function App() {
  const [people, setPeople] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')

  function openModal() {
    setName('')
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function addPerson() {
    if (!name.trim()) return
    setPeople([...people, { name }])
    closeModal()
  }

  return (
    <>
      <h1>WayHi</h1>

      <div className="grid">
        {people.map((person, index) => (
          <div className="card" key={index}>
            <div className="avatar">👤</div>
            <div className="name">{person.name}</div>
          </div>
        ))}

        <div className="card add-card" onClick={openModal}>
          +
        </div>
      </div>

      {isModalOpen && (
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
              <button className="btn-cancel" onClick={closeModal}>
                Cancel
              </button>
              <button
                className="btn-add"
                onClick={addPerson}
                disabled={!name.trim()}
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default App
