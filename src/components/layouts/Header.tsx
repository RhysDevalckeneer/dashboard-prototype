import { useState } from "react"
import { FaBell, FaMagnifyingGlass, FaAngleDown } from "react-icons/fa6";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="w-full bg-white px-4 py-3 flex justify-between border-b border-slate-100">
        <div className="w-3/6 flex justify-start items-center">
          <p className="font-bold text-2xl text-slate-700">Home</p>
        </div>
        <div className="w-3/6 flex justify-end items-center">
          {isOpen && (
            <input type="text" placeholder="Search..." className="bg-slate-100 py-1.5 px-3 w-3/6 rounded"/>
          )}
          <button className="bg-slate-100 rounded-full p-2 mx-2 w-10 h-10 flex justify-center items-center" onClick={() => setIsOpen(!isOpen)}>
            <FaMagnifyingGlass className="text-gray-400 text-xl"/>
          </button>
          <button className="bg-slate-100 rounded-full p-2 mr-2 w-10 h-10 flex justify-center items-center">
            <FaBell className="text-gray-400 text-xl"/>
          </button>
          <div className="flex justify-start items-center">
            <button className="bg-blue-400 rounded-full w-10 h-10 avatar"></button>
            <p className="font-bold text-slate-700 flex justify-start items-center ml-2">John
              <FaAngleDown className="text-slate-300 text-sm mt-0.5 ml-2" />
            </p>
          </div>
        </div>
    </div>
  )
}

export default Header