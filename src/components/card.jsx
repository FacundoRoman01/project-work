import "../style/card.css"

const card = ({nombre, imagen, ocupacion}) => {
  return (
    <div className="card">
          <img src={imagen} alt=""  className="card-imagen"/>
          <div className="descrption-card">
            <h2>{nombre}</h2>
            <p> {ocupacion} </p>
            <button> Consultar </button>
          </div>
    </div>
  )
}

export default card