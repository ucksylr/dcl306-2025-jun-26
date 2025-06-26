async function app() {
    let tickers = await fetch("https://api.binance.com/api/v3/ticker/price")
        .then(tickers => tickers.json());
    let symbols = tickers.splice(0, 3000).map(ticker => ticker["symbol"]);
    Promise.all(
        symbols.map(symbol => fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`))
    ).then(prices => Promise.all(prices.map(price => price.json())))
    .then(prices => prices.forEach(price => console.log(price)));

}

app()