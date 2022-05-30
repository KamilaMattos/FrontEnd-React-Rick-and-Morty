import "./App.css"
import Characters from "./components/Characters"
import { useEffect, useState } from "react"

function App() {
  const [characterList, setCharacterList] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
      .then((response) => response.json())
      .then((response) => setCharacterList(response.results))
  }, [currentPage])

  function PreviousPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  function NextPage() {
    setCurrentPage(currentPage + 1)
  }

  return (
    <>
      <div>
        <Characters characterList={characterList} />
      </div>
      <div className='buttons'>
        <button onClick={PreviousPage}>Previous</button>
        <button onClick={NextPage}>Next</button>
      </div>
    </>
  )
}

export default App
