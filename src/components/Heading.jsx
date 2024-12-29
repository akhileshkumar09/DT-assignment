

function Heading({name, coins}) {
  return (
    <div className="px-10">
        <h className="text-4xl font-bold ">Explore page</h>
        <span className="flex justify-between mt-2 px-4">
            <p className="text-xl"><span className="font-semibold">Name</span> : {name}</p>
            <p className="text-xl"><span className="font-semibold">Credits</span> : {coins}</p>
        </span>
    </div>
  )
}

export default Heading