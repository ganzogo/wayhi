import { useState } from 'react'
import PersonCard from './components/PersonCard'
import AddCard from './components/AddCard'
import AddPersonModal from './components/AddPersonModal'

interface Person {
  name: string
  dob: string
}

function App() {
  const [people, setPeople] = useState<Person[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [name, setName] = useState('')
  const [dob, setDob] = useState('')

  function openModal() {
    setName('')
    setIsModalOpen(true)
  }

  function closeModal() {
    setIsModalOpen(false)
  }

  function addPerson() {
    setPeople([...people, { name, dob }])
    closeModal()
  }

  return (
    <>
      <h1><span translate="no">wayhi</span></h1>

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
          dob={dob}
          setDob={setDob}
          onAdd={addPerson}
          onCancel={closeModal}
        />
      )}
    </>
  )
}

export default App
