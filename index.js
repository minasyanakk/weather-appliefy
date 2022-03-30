

function loadBTC () {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.cryptonator.com/api/ticker/btc-usd";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function parseJson(json) {
      var usdValue = "1 BTC = $" + json["ticker"]["price"];
      
    
      document.getElementById("btc").innerHTML = usdValue }

};

function loadDOT () {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.cryptonator.com/api/ticker/DOT-usd";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function parseJson(json) {
      var usdValue = "1 DOT = $" + json["ticker"]["price"];
      document.getElementById("dot").innerHTML = usdValue }
};
function loadETH() {
    var xmlhttp = new XMLHttpRequest();
    var url = "https://api.cryptonator.com/api/ticker/ETH-usd";
    
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4  &&  this.status == 200) {
        var json = JSON.parse(this.responseText);
        parseJson(json);
      }		
    };
    
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
    
    function parseJson(json) {
      var usdValue = "1 ETH = $" + json["ticker"]["price"];
      document.getElementById("eth").innerHTML = usdValue }
};


function loadquotable() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://api.quotable.io/random";
  
  xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4  &&  this.status == 200) {
      var json = JSON.parse(this.responseText);
      parseJson(json);
    }		
  };
  
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
  
  function parseJson(json) {
    var content = "" + json["content"];
    var author = "" + json["author"];
    document.getElementById("content_quotable").innerHTML = content; 
    document.getElementById("author_quotable").innerHTML = author; }
};

loadquotable()
loadBTC();
loadDOT();
loadETH();
