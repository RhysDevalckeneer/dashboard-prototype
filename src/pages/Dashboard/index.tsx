import { Header, Sidebar, CryptoCard } from "../../components"

const Dashboard = () => {
  return (
    <div className="relative">
        <Sidebar />
        <div className="w-10/12 bg-gray-50 absolute top-0 right-0">
            <Header />
            <div className="p-4">
                <div className="grid grid-cols-4 gap-4">
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                    <CryptoCard />
                </div>
                <div className="bg-white border border-gray-100 rounded mt-4">
                    another test
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard