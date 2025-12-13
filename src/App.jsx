import { useState } from 'react'
import PersonCard from './components/PersonCard'
import AddCard from './components/AddCard'
import AddPersonModal from './components/AddPersonModal'

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
      <h1>People</h1>

      <div className="grid">
        {people.map((person, index) => (
          <PersonCard key={index} name={person.name} />
        ))}

        <AddCard onClick={openModal} />
      </div>

      {isModalOpen && (
        <AddPersonModal
          name={name}
          setName={setName}
          onAdd={addPerson}
          onCancel={closeModal}
        />
      )}
    </>
  )
}

export default App
