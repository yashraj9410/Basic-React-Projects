// this is the button component

function ButtonComp(props) {
  return (
   <div className="flex flex-row  gap-5 bg-slate-300 m-5 p-2" >
        {props.colors.map((color, index) => (
        <button className="text-white font-bold py-2 px-4 rounded" key={index} style={{ backgroundColor: color }} onClick={()=> props.onClick(color)}>
          {color}
        </button>
      ))}
   </div>
  )
}

export default ButtonComp
