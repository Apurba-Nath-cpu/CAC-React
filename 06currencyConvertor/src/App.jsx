import { useCallback, useEffect, useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  let currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  // useEffect to recalculate the conversion when from, to, or amount changes
  useEffect(() => {
    if (currencyInfo[to]) {
      convert()
    }
  }, [from, to, amount, currencyInfo]);

  const swap = useCallback(
    () => {
      setFrom(to)
      setTo(from)
    },
    [from, to]
  )

  const convert = () => {
    console.log(currencyInfo[to])
    setConvertedAmount(() => amount * currencyInfo[to])
  }

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        style={{
            backgroundImage: `url('https://images.pexels.com/photos/259209/pexels-photo-259209.jpeg')`,
        }}
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
                            onAmountChange={(amount) => setAmount(amount)}
                            onCurrencyChange={(curr) => {
                              setFrom(curr)
                              setAmount(amount)
                            }}
                            selectCurrency={from}
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
                            onCurrencyChange={
                              (curr) => {
                                setTo(curr)
                                convert()
                              }}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <div className='flex flex-row'>
                      {/* <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                          Convert {from.toUpperCase()} to {to.toUpperCase()}
                      </button> */}
                      <button onClick={
                        () => {
                          setAmount(0)
                          setConvertedAmount(0)
                        }
                      } className="w-full bg-red-600 text-white px-4 py-3 rounded-lg">
                          Clear
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
