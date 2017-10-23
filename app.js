'use strict';

//Declare all store objects as literals
var firstAndPike = {
  minCust: 23,
  maxCust: 65,
  avgCookieSale: 6.3,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var seatacAirport = {
  minCust: 3,
  maxCust: 24,
  avgCookieSale: 1.2,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var seattleCenter = {
  minCust: 11,
  maxCust: 38,
  avgCookieSale: 3.7,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var capitolHill = {
  minCust: 20,
  maxCust: 38,
  avgCookieSale: 2.3,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

var alki = {
  minCust: 2,
  maxCust: 16,
  avgCookieSale: 4.6,
  getStoreData: function() { //Return data in an array format
    return [this.minCust, this.maxCust, this.avgCookieSale];
  },
  genRandCxHr: function() { //generate random number of cx
    var randCx = Math.random() * (this.maxCust - this.minCust) + this.minCust;
    randCx = Math.ceil(randCx) - 1; //subtract 1 to be inclusive since rounding up
    return randCx;
  },
  genRandCookHr: function () { //Generate random cookies per hour
    var randCookiesHr = [];
    var genRandCookies = 0;
    for (var i = 0; i < 15; i++) { //Generate cookies sold per hr from 6 am - 9 pm
      genRandCookies = this.genRandCxHr() * this.avgCookieSale;
      genRandCookies = Math.ceil(genRandCookies) - 1; //round and subtract 1 to be inclusive since rounding up
      randCookiesHr.push(genRandCookies);
    }
    return randCookiesHr; // return array of cookies per hour
  }
};

document.getElementById('test').innerHTML = '<p>' + firstAndPike.genRandCookHr() + '</p>';
