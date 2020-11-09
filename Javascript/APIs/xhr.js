const request = new XMLHttpRequest();

request.onload = function () {
  console.log("All done with your request!!!");
  const data = JSON.parse(this.responseText);
  console.log(`Bitcoin Price: ${data.ticker.price}`);
};

request.onerror = function () {
  console.log("THERE IS AN ERROR!!!");
  console.log(this);
};

request.open("GET", "https://api.cryptonator.com/api/full/btc-usd");
request.send();
