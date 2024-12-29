import Detail from "../Detail"


function DetailContainer() {
  return (
    <div className="mx-10 rounded-lg mt-4 ">
    <div className="border border-gray-400 grid grid-cols-3 rounded-t-lg">
        <span className="relative w-80  ">
            <p className="w-full font-semibold text-center">Classes</p>
            <hr className="absolute -top-1 left-80 transform -translate-x-1/2 w-0.2 h-8 border-r border-gray-500 -rotate-45"/>
        </span>
        <span>
            <p className="font-semibold w-full text-center">Workshops</p>
           
        </span>
        <span className="relative  ">
        <div
        className="absolute top-0 left-0 w-6 h-6 bg-white z-10 "
        style={{ clipPath: "polygon(0 0, 100% 0, 0 100%)" }}
         ></div>
            <p className="relative  w-full text-center bg-blue-600 text-white font-semibold  overflow-hidden rounded-t-lg ">Events</p>
          
        </span>
    </div>
    <Detail/>
    </div>
  )
}

export default DetailContainer