var config = {
  
  // Your scriptr.io endpoint
  url: "wss://api.scriptrapps.io/", // do not forget the final "/" 
  
  // Token of your scriptr.io account
  token: "VDNFQjUzMEQ3NA==",
  
  // Google map configuration
  map: {
    
    lat: 40.674116,
    lng: -74.005976,
    zoom: 15,
    key: "AIzaSyBT2lgr9B0CzZSipJK9XSGllkfTUXICbQw",
    output: "terrain",
    channel: "map", // The scriptr.io channel to subscribe the map to (it will receive data from that channel)
    callback: ""
  }  
};
