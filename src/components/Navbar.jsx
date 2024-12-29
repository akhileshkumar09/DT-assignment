import DTLogo from '../assets/logo 1.svg'
import { FaHome } from "react-icons/fa";
import { FaTools } from "react-icons/fa";
import { IoNotifications } from "react-icons/io5";

function Navbar() {
  return (
    <nav className="flex justify-between bg-gray-100 shadow-md items-center py-2 px-10">

     <div>
      <img src={DTLogo} className="logo h-8" alt="DT logo" />
     </div>

     <div className='flex gap-2 items-center'>
      <FaHome className='p-1 rounded-full bg-blue-600 text-3xl text-white' />
      <FaTools className='p-1 rounded-full bg-blue-600 text-3xl text-white' />
      <span className='relative'>
      <IoNotifications className='p-1 rounded-full bg-blue-600 text-3xl text-white' />
      <span className='text-6xl text-red-600 absolute bottom-3 right-1'>.</span>
      </span>
      <img className='w-8 h-8 rounded-full' src='https://s3-alpha-sig.figma.com/img/7ac8/5301/b9bfc59f733c9f17f2bede82c41154f1?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MZ9g1sZSMA7P4DkcIf1rMJCXPM43XqdRYJ8XFfvrMY4SqBDmO3l3cNVQDsMgpiE62I3kWktPoXqlH5~duCyP9tzg02txMHO4mTDOacePU9jcZoNuDwMWRTPXlhoXWdelgCOIY0QKvFKH2No2Kv3ZQ1pWPdEC~zpoRL~nRl4AXXp996XuMaihGjfRRxmOIcWG8Pqf4Vwiul8~aR4eqI0KPuTm1ZuuIj~hmLzEddS34CP1XIECCL-JOcys1MEg3iCKbiwkInjiwUAj-FAYW-KrPiVlQpkGC39oiHakHhzjjTXVEiaqax-GpmfD8ANvRtFt5nOkkU2SRdFZBbL61P1PLw__' alt='user'/>
      <span className='flex flex-col -p-1 ml-4  mb-6'>
        <span className='-m-4 text-4xl text-blue-600'>.</span>
        <span className='-m-4 text-4xl text-blue-600'>.</span>
        <span className='-m-4 text-4xl text-blue-600'>.</span>
      </span>
     </div>

    </nav>
  )
}

export default Navbar