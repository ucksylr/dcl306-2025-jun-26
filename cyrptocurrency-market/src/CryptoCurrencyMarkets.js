import Container from "./components/common/container";
import Card from "./components/common/card";
import SelectBox from "./components/common/select-box";
import React, {useEffect} from "react";
import Badge from "./components/common/badge";
import FormGroup from "./components/common/form-group";
import Button from "./components/common/button";

function CryptoCurrencyMarkets() {
    const [symbols, setSymbols] = React.useState([]);
    const [symbol, setSymbol] = React.useState("");
    const [prices, setPrices] = React.useState([]);
    const [isStarted, setStarted] = React.useState(false);

    useEffect(() => {
        fetch("https://api.binance.com/api/v3/ticker/price")
            .then(res => res.json())
            .then(tickers => {
                let symbols = tickers.map(ticker => ticker.symbol);
                symbols.sort();
                setSymbols(symbols);
                setSymbol(symbols[(symbols.length - symbols.length % 2) / 2]);
            })
    }, []);

    useEffect(() => {
        if (symbols.length === 0) return;
        const timerId = setInterval(() => {
            if (!isStarted) return;
            fetch(`https://api.binance.com/api/v3/ticker/price?symbol=${symbol}`)
                .then(res => res.json())
                .then(ticker => {
                    const currentPrice = {"price": ticker.price, "date": Date.now()};
                    setPrices(p => [...p.slice(-9), currentPrice]);
                })
        }, 3_000);
        return () => {
            clearInterval(timerId);
        }
    }, [symbol,isStarted]);

    const start = () => {
        setStarted(true);
    };
    const stop = () => {
        setStarted(false);
        setPrices([]);
    };
    return (
        <Container>
            <Card title={"Markets"}>
                <SelectBox id={"markets"}
                           label={"Symbol"}
                           options={symbols}
                           value={symbol}
                           handleChange={(event) => setSymbol(event.target.value)}/>
                <FormGroup>
                    <Badge value={symbol}
                           label={"Selected Symbol"}
                           color={"bg-info"}
                           isVisible={true}/>
                    {!isStarted && <Button label={"Start"} color={"bg-success"} click={start}/>}
                    {isStarted && <Button label={"Stop"} color={"bg-danger"} click={stop}/>}


                </FormGroup>

                <ul className="list-group">
                    {
                        prices.map((price, i) => (
                            <li className="list-group-item" key={i}>{new Date(price.date).toLocaleString()}: {price.price}</li>
                        ))
                    }
                </ul>
            </Card>
        </Container>
    );
}

export default CryptoCurrencyMarkets;
