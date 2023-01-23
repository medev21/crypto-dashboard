const data = [
    {
        symbol: 'btc',
        name: 'bitcoin',
        image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        amount: 0.47,
        price: 8200,
        value: 4000,
    },
    {
        symbol: 'eth',
        name: 'ethereum',
        image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        amount: 1.02,
        price: 1600,
        value: 1602,
    },
    {
        symbol: 'ada',
        name: 'cardano',
        image: 'https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1547033579',
        amount: 400,
        price: 0.38,
        value: 200,
    },
];

export const HomeView = () => {
    return (
        <>
            {data.map((entry) => (
                <div>
                    <img src={entry.image} />
                </div>
            ))}
            <h1 className="text-3xl font-bold underline">this is a teset</h1>
        </>
    );
};
