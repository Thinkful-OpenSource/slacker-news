/*global phantom:false */
var page = require('webpage').create(),
    system = require('system'),
    url = system.args[1];
page.open(url, function(status){
  page.evaluate(function(){
    document.querySelector('body').appendChild(document.createElement('script')).textContent = "" +
      "var slacker_scrape_info = {" +
        "url: location.href," +
        "general: {" +
          "description: document.querySelector(\"meta[name=description]\") !== null ? document.querySelector(\"meta[name=description]\").getAttribute('content') : null," +
          "keywords: document.querySelector(\"meta[name=keywords]\") !== null ? document.querySelector(\"meta[name=keywords]\").getAttribute('content') : null" +
        "}," +
        "facebook: {" +
          "title: document.querySelector(\"meta[property=og\\\:title]\") !== null ? document.querySelector(\"meta[property=og\\\:title]\").getAttribute('content') : null," +
          "site_name: document.querySelector(\"meta[property=og\\\:site_name]\") !== null ? document.querySelector(\"meta[property=og\\\:site_name]\").getAttribute('content') : null," +
          "url: document.querySelector(\"meta[property=og\\\:url]\") !== null ? document.querySelector(\"meta[property=og\\\:url]\").getAttribute('content') : null," +
          "description: document.querySelector(\"meta[property=og\\\:description]\") !== null ? document.querySelector(\"meta[property=og\\\:description]\").getAttribute('content') : null," +
          "image: document.querySelector(\"meta[property=og\\\:image]\") !== null ? document.querySelector(\"meta[property=og\\\:image]\").getAttribute('content') : null" +
        "}" +
      "};" +
      "var r = new XMLHttpRequest();"+
      "r.open('POST', 'https://slacker-news-thinkfulcommunity.c9.io/link/archive', true);" +
      "r.setRequestHeader('Content-type', 'application/json;charset=UTF-8');" +
      "r.send(JSON.stringify(info));";
    //$.ajax({url: 'https://slacker-news-thinkfulcommunity.c9.io/link/archive', type: 'POST', data: info});
    setTimeout(phantom.exit, 1000);
  });
});