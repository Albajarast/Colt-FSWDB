// fetch("https://api.cryptonator.com/api/full/btc-usd")
//   .then((res) => {
//     console.log("Response waiting to parse: ", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("Data parsed:", data);
//     console.log("The bitcoin price is: ", data.ticker.price);
//   })
//   .catch((e) => {
//     console.log("ERROR!!! ", e);
//   });

const fetchBitcoinPrice = async () => {
  try {
    const res = await fetch("https://api.cryptonator.com/api/full/btc-usd");
    const data = await res.json();
    let returnedData = data;
    console.log("The Bitcoin price: ", data.ticker.price);
    return returnedData;
  } catch (e) {
    console.log("SOMETHING WENT WRONG!!!, ", e);
  }
};
