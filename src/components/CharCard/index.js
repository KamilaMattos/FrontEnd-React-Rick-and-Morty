import "../CharCard/style.css"

function CharCard({ name, image }) {
  return (
    <div className='card'>
      <p>{name}</p>
      <img src={image} alt='Pic Profile' />
    </div>
  )
}

export default CharCard
