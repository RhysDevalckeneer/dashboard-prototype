import { PremiumBanner, SidebarItem } from ".."
import { FaStarOfLife, FaRightFromBracket, FaGear, FaMoneyBills, FaWallet, FaClockRotateLeft, FaChartLine, FaHouse } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className="w-2/12 h-screen p-4 fixed bg-white flex flex-col justify-between border-r border-slate-100">
      <div className="">
        <h1 className="font-bold text-slate-700 text-xl flex justify-start items-center mb-4">
          <FaStarOfLife className="text-blue-500 mr-1.5 mt-0.5 text-sm"/> Dashboard
        </h1>
        <SidebarItem label="Home">
          <FaHouse className="mt-0.5 mr-2"/>
        </SidebarItem>
        <SidebarItem label="Analytics">
          <FaChartLine className="mt-0.5 mr-2"/>
        </SidebarItem>
        <SidebarItem label="History">
          <FaClockRotateLeft className="mt-0.5 mr-2"/>
        </SidebarItem>

        <h2 className="font-bold text-slate-600 mt-6">My Wallet</h2>
        <SidebarItem label="Balance">
          <FaWallet className="mt-0.5 mr-2"/>
        </SidebarItem>
        <SidebarItem label="Transactions">
          <FaMoneyBills className="mt-0.5 mr-2"/>
        </SidebarItem>
      </div>

      <div className="">
        <SidebarItem label="Settings">
          <FaGear className="mt-0.5 mr-2"/>
        </SidebarItem>

        <SidebarItem label="Logout">
          <FaRightFromBracket className="mt-0.5 mr-2"/>
        </SidebarItem>
        <PremiumBanner />
      </div>
    </div>
  )
}

export default Sidebar