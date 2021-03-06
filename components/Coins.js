import React from 'react'
import Coin from './Coin/'

const Coins = ({coins}) => {
    return (
        <div>
            {coins.map(coin =>{
                return <Coin key={coin.id} name={coin.name} id={coin.id} price={coin.current_price} symbol={coin.symbol} marketcap={coin.market_cap} volume={coin.total_volume} image={coin.image} priceChange={coin.price_change_percentage_24h}/>

            })}
        </div>
    )
}

export default Coins
