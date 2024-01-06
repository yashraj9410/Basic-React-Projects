const Card = (props) => {
  console.log(props)
  return (
    <>
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src="data:image/jpeg;base64,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" alt="Sunset in the mountains" />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">The Coldest Sunset</div>
          <p className="text-gray-700 text-base">
            Beautiful Sunset at Dhauldhar Range !
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
        </div>
      </div>
    </>
  )
}

export default Card;