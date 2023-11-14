import React, { useEffect, useState } from "react";
import { Header, Sidebar, CryptoCard } from "../../components"
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [coinPrice, setCoinPrice] = useState([]);
    const firstFourCoins = data.slice(0, 4);
    const otherCoins = data.slice(5, 29);

    useEffect(() => {
        const fetchData = async () => {
            try {
              // Replace 'YOUR_API_URL' with the actual URL of the API you want to fetch data from
              const response = await axios.get("https://api.coinranking.com/v2/coins");
              // console.log(response.data.data.coins)
              setData(response.data.data.coins);
              setCoinPrice(response.data.data.coins.sparkline)
            } catch (error) {
              console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, [])
    


  return (
    <div className="relative">
        <Sidebar />
        <div className="w-10/12 bg-gray-50 absolute top-0 right-0">
            <Header />
            <div className="p-4">
                {data ? (
                    <div className="grid grid-cols-4 gap-4">
                        {firstFourCoins.map((item) => (
                            <CryptoCard 
                                key={item.uuid}
                                imageUrl={item.iconUrl} 
                                name={item.name} 
                                value={item.price} 
                                symbol={item.symbol}
                                mccp={item.change}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="mt-4">
                {data ? (
                    <div className="grid grid-cols-4 gap-4">
                    {otherCoins.map((item) => (
                        <div key={item.id} className="p-4 flex justify-between border rounded border-slate-100 bg-white">
                            <div className="flex flex-row items-center justify-between">
                                <img src={item.iconUrl} className="w-10 h-10"/>
                                <div className=''>
                                    <p className="ml-4 font-bold text-slate-700">{item.symbol}</p>
                                    <p className="ml-4 text-xs text-slate-700">{item.name}</p>
                                </div>
                            </div>
                            <div>
                                <p className="bg-slate-200 font-bold text-sm rounded py-2 px-4">{item.change}%</p>
                            </div>
                        </div>
                    ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Dashboard