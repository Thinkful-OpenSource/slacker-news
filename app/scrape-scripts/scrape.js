var page = require('webpage').create(),
    system = require('system'),
    url = system.args[1];
page.open(url, function(status){
  page.includeJs('http://code.jquery.com/jquery-1.11.0.min.js', function () {
    var info = page.evaluate(function(){
      return {
        general: {
          description: $('meta[name="description"]').attr('content'),
          keywords: $('meta[name="keywords"]').attr('content')
        },
        facebook: {
          title: $('meta[property="og:title"]').attr('content'),
          site_name: $('meta[property="og:site_name"]').attr('content'),
          url: $('meta[property="og:url"]').attr('content'),
          description: $('meta[property="og:description"]').attr('content'),
          image: $('meta[property="og:image"]').attr('content')
        }
      };
    });
    console.log('Title: ' + info.title);
    console.log('Site Name: ' + info.site_name);
    console.log('Url: ' + info.url);
    console.log('Description: ' + info.description);
    console.log('Image: ' + info.image);
    phantom.exit();
  });
});