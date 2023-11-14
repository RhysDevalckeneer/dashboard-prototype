import React, { useEffect, useState } from "react";
import { Header, Sidebar, CryptoCard } from "../../components"
import axios from "axios";

const Dashboard = () => {
    const [data, setData] = useState([]);
    const [coinPrice, setCoinPrice] = useState([]);
    const firstFourCoins = data.slice(0, 4);
    const otherCoins = data.slice(5, 23);

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
                                mccp={item.market_cap_change_percentage_24h}
                            />
                        ))}
                    </div>
                ) : (
                    <p>Loading...</p>
                )}
                <div className="bg-white border border-gray-100 rounded mt-4">
                {data ? (
                    <div className="grid grid-cols-3 gap-4">
                    {otherCoins.map((item) => (
                        <div key={item.id} className="p-4 flex justify-between border-b border-slate-100">
                            <div className="flex flex-row items-center">
                                <img src={item.iconUrl} className="w-10 h-10"/>
                                <div className=''>
                                    <p className="ml-4 font-bold text-slate-700">{item.symbol}</p>
                                    <p className="ml-4 text-xs text-slate-700">{item.name}</p>
                                </div>
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