import CharCard from "../CharCard"
import "../Characters/style.css"

function Characters({ characterList }) {
  return (
    <>
      <h1>Meus personagens</h1>
      <div className='containerCards'>
        {characterList.map((character) => (
          <CharCard
            key={character.id}
            name={character.name}
            image={character.image}
          />
        ))}
      </div>
    </>
  )
}

export default Characters
