export default function ItemCount( {handleClickDec, handleClickInc, count} ) {

  return (
    <>
      <div>
        <span>Cantidad: </span>
        <button onClick={() => handleClickDec()}><span>-</span></button>
        <span> {count} </span>
        <button onClick={() => handleClickInc()}><span>+</span></button>
      </div>
    </>
  )
}