import InputBox from "./components/InputBox";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { useState } from "react";

function App() {
  const [amount, setAmount] = useState("")
  const [from, setFrom] = useState("usd") 
  const [to, setTo] = useState("inr")
  const [convertedAmount, setConvertedAmount] =  useState(0)
  
  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    let temp = from
    setFrom(to)
    setTo(temp)

    temp = amount
    setAmount(convertedAmount)
    setConvertedAmount(temp)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-black"
    >
        <div className="w-full">
            <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert()
                    }}
                >
                    <div className="w-full mb-1">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            currency={from}
                            onCurrencyChange={(curr) => setFrom(curr)}
                            onAmountChange={(amount) => setAmount(amount)}
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}  
                        > 
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            currency={to}
                            onCurrencyChange={(curr) => setTo(curr)}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} to {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
  );
}

export default App