

const Character = ({name,image,origin})=> {
  return (
    <div className="character-container">
    <h2>{name}</h2>
    <img src={image} alt={name} className="img"/>
    <h3>`Origin:${origin.name}`</h3>
    </div>
  )
}

export default Character